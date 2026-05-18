import type { Metadata } from "next";
import { MessageCircle } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { CTASection } from "@/components/CTASection";
import { HeroMotionLayer } from "@/components/HeroMotionLayer";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { defaultWhatsAppMessage, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "ByteBlitz Technologies portfolio will be updated soon with real websites, POS systems, dashboards, apps, and branding work.",
};

export default function PortfolioPage() {
  return (
    <>
      <section className="hero-wash relative overflow-hidden px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="digital-grid absolute inset-0 opacity-20" />
        <HeroMotionLayer />
        <div className="relative z-10 mx-auto max-w-7xl">
          <SectionHeading
            as="h1"
            light
            eyebrow="Portfolio"
            title="Real project work will be added soon"
            description="We are preparing this page for completed ByteBlitz Technologies work. For now, contact us directly for websites, POS systems, dashboards, apps, and branding."
          />
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl rounded-lg border border-[#071B3A]/10 bg-white p-8 text-center shadow-2xl shadow-[#071B3A]/10">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#FF6A00]">
            Coming Soon
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-[#071B3A]">
            Portfolio updates are on the way
          </h2>
          <p className="mt-4 text-base leading-8 text-[#071B3A]/70">
            We will add real client projects and screenshots here later. You can
            still request a similar website, POS system, dashboard, app, or
            branding package today.
          </p>
          <div className="mt-7 flex justify-center">
            <ButtonLink
              href={whatsappUrl(defaultWhatsAppMessage)}
              external
              icon={MessageCircle}
            >
              Get Price
            </ButtonLink>
          </div>
        </Reveal>
      </section>

      <CTASection />
    </>
  );
}
