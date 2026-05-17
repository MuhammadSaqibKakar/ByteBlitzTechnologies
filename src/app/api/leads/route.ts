import { NextResponse } from "next/server";
import { getPrisma, isDatabaseConfigured } from "@/lib/server/db";
import { safeTrim } from "@/lib/server/secret";

export const runtime = "nodejs";

const allowedServices = new Set([
  "Website",
  "POS System",
  "Dashboard",
  "Mobile App",
  "Branding",
  "Social Media",
  "Software Solution",
]);

export async function POST(request: Request) {
  let body: Record<string, unknown>;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: "Invalid request." },
      { status: 400 },
    );
  }

  const name = safeTrim(body.name, 120);
  const phone = safeTrim(body.phone, 80);
  const rawService = safeTrim(body.service, 120);
  const message = safeTrim(body.message, 1000);
  const service = allowedServices.has(rawService) ? rawService : "Website";

  if (!name || !phone) {
    return NextResponse.json(
      { ok: false, message: "Name and phone are required." },
      { status: 400 },
    );
  }

  if (!isDatabaseConfigured()) {
    return NextResponse.json(
      {
        ok: true,
        saved: false,
        message: "WhatsApp will still open. Database is not connected yet.",
      },
      { status: 202 },
    );
  }

  const prisma = getPrisma();

  try {
    await prisma.lead.create({
      data: {
        name,
        phone,
        service,
        message: message || "I want to discuss my project.",
      },
    });
  } catch {
    return NextResponse.json(
      {
        ok: true,
        saved: false,
        message: "WhatsApp will still open. Database save failed.",
      },
      { status: 202 },
    );
  }

  return NextResponse.json({ ok: true, saved: true });
}
