import { NextResponse } from "next/server";
import { requireAdminSession } from "@/lib/server/admin-session";
import { getPrisma } from "@/lib/server/db";

export const runtime = "nodejs";

export async function GET() {
  const auth = await requireAdminSession().catch(() => ({
    ok: false as const,
    status: 503,
    message: "Database settings are not correct yet.",
  }));

  if (!auth.ok) {
    return NextResponse.json(
      { ok: false, message: auth.message },
      { status: auth.status },
    );
  }

  const prisma = getPrisma();
  const [leadCount, recentLeads, recentAttempts] = await Promise.all([
    prisma.lead.count(),
    prisma.lead.findMany({
      orderBy: { createdAt: "desc" },
      take: 8,
    }),
    prisma.adminLoginAttempt.findMany({
      orderBy: { createdAt: "desc" },
      take: 5,
    }),
  ]).catch(() => [0, [], []] as const);

  return NextResponse.json({
    ok: true,
    database: "connected",
    leadCount,
    recentLeads: recentLeads.map((lead) => ({
      id: lead.id,
      name: lead.name,
      phone: lead.phone,
      service: lead.service,
      message: lead.message,
      createdAt: lead.createdAt.toISOString(),
    })),
    recentAttempts: recentAttempts.map((attempt) => ({
      id: attempt.id,
      success: attempt.success,
      reason: attempt.reason,
      createdAt: attempt.createdAt.toISOString(),
    })),
  });
}
