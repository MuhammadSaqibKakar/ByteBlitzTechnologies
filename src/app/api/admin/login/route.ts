import { NextResponse } from "next/server";
import { createAdminSession } from "@/lib/server/admin-session";
import { getPrisma, isDatabaseConfigured } from "@/lib/server/db";
import { getRequestMeta } from "@/lib/server/request";
import { safeTrim, verifySecret } from "@/lib/server/secret";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const meta = await getRequestMeta();

  if (!isDatabaseConfigured()) {
    return NextResponse.json(
      {
        ok: false,
        message:
          "Database is not connected yet. Add DATABASE_URL on Hostinger and run the DB setup.",
      },
      { status: 503 },
    );
  }

  let code = "";

  try {
    const body = await request.json();
    code = safeTrim(body.code, 200);
  } catch {
    return NextResponse.json(
      { ok: false, message: "Please enter the admin code." },
      { status: 400 },
    );
  }

  if (!code) {
    return NextResponse.json(
      { ok: false, message: "Please enter the admin code." },
      { status: 400 },
    );
  }

  let prisma: ReturnType<typeof getPrisma>;

  try {
    prisma = getPrisma();
  } catch {
    return NextResponse.json(
      { ok: false, message: "Database settings are not correct yet." },
      { status: 503 },
    );
  }
  const secret = await prisma.adminSecret
    .findUnique({
      where: { label: "primary" },
    })
    .catch(() => null);

  if (!secret) {
    return NextResponse.json(
      {
        ok: false,
        message:
          "Admin code is not saved in the database yet. Run npm run db:seed.",
      },
      { status: 503 },
    );
  }

  const success = verifySecret(code, secret.codeHash);

  await prisma.adminLoginAttempt
    .create({
      data: {
        success,
        reason: success ? "ok" : "wrong-code",
        ipAddress: meta.ipAddress,
        userAgent: meta.userAgent,
      },
    })
    .catch(() => null);

  if (!success) {
    return NextResponse.json(
      { ok: false, message: "Wrong admin code." },
      { status: 401 },
    );
  }

  await prisma.adminSecret
    .update({
      where: { label: "primary" },
      data: { lastUsedAt: new Date() },
    })
    .catch(() => null);

  await prisma.adminSession
    .deleteMany({
      where: { expiresAt: { lt: new Date() } },
    })
    .catch(() => null);

  try {
    await createAdminSession(meta);
  } catch {
    return NextResponse.json(
      { ok: false, message: "Could not create admin session." },
      { status: 503 },
    );
  }

  return NextResponse.json({ ok: true, message: "Admin access opened." });
}
