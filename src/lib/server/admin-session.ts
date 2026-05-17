import { cookies } from "next/headers";
import { getPrisma, isDatabaseConfigured } from "./db";
import { hashToken } from "./secret";

export const adminSessionCookie = "bb_admin_session";

const sessionHours = 12;

export async function createAdminSession(meta: {
  ipAddress: string | null;
  userAgent: string | null;
}) {
  const { createSessionToken } = await import("./secret");
  const prisma = getPrisma();
  const token = createSessionToken();
  const tokenHash = hashToken(token);
  const expiresAt = new Date(Date.now() + sessionHours * 60 * 60 * 1000);

  await prisma.adminSession.create({
    data: {
      tokenHash,
      expiresAt,
      ipAddress: meta.ipAddress,
      userAgent: meta.userAgent,
    },
  });

  const cookieStore = await cookies();
  cookieStore.set(adminSessionCookie, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: sessionHours * 60 * 60,
  });
}

export async function requireAdminSession() {
  if (!isDatabaseConfigured()) {
    return { ok: false as const, status: 503, message: "Database is not set up." };
  }

  const cookieStore = await cookies();
  const token = cookieStore.get(adminSessionCookie)?.value;

  if (!token) {
    return { ok: false as const, status: 401, message: "Admin login required." };
  }

  const prisma = getPrisma();
  const tokenHash = hashToken(token);
  const session = await prisma.adminSession.findUnique({
    where: { tokenHash },
  });

  if (!session || session.expiresAt.getTime() < Date.now()) {
    if (session) {
      await prisma.adminSession.delete({ where: { id: session.id } });
    }

    cookieStore.delete(adminSessionCookie);
    return { ok: false as const, status: 401, message: "Session expired." };
  }

  await prisma.adminSession.update({
    where: { id: session.id },
    data: { lastSeenAt: new Date() },
  });

  return { ok: true as const, session };
}

export async function clearAdminSession() {
  const cookieStore = await cookies();
  const token = cookieStore.get(adminSessionCookie)?.value;
  cookieStore.delete(adminSessionCookie);

  if (token && isDatabaseConfigured()) {
    const prisma = getPrisma();
    await prisma.adminSession.deleteMany({
      where: { tokenHash: hashToken(token) },
    });
  }
}
