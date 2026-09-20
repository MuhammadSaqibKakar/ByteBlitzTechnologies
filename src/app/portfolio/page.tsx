import type { Metadata } from "next";
import { MessageCircle } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { CTASection } from "@/components/CTASection";
import { HeroMotionLayer } from "@/components/HeroMotionLayer";
import { PortfolioCard } from "@/components/PortfolioCard";
import { StaggerContainer } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import {
  defaultWhatsAppMessage,
  portfolioItems,
  whatsappUrl,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore selected live websites, project-monitoring dashboards, and reporting systems developed by ByteBlitz Technologies.",
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
            title="Real systems. Live deployments."
            description="A selection of production websites and project-monitoring systems we have designed, developed, and deployed for real operational use."
          />
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Selected Work"
            title="Projects you can open and verify"
            description="These are live deployments, not concept screens. Open any project to see the work running in production."
          />

          <StaggerContainer className="mt-12 grid gap-6 md:grid-cols-2">
            {portfolioItems.map((item) => (
              <PortfolioCard key={item.title} item={item} />
            ))}
          </StaggerContainer>

          <div className="mt-10 flex justify-center">
            <ButtonLink
              href={whatsappUrl(defaultWhatsAppMessage)}
              external
              icon={MessageCircle}
            >
              Discuss Your Project
            </ButtonLink>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
