import { NextResponse } from "next/server";
import { clearAdminSession } from "@/lib/server/admin-session";

export const runtime = "nodejs";

export async function POST() {
  await clearAdminSession().catch(() => null);
  return NextResponse.json({ ok: true });
}
