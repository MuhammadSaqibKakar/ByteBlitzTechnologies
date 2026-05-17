import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { HeroMotionLayer } from "@/components/HeroMotionLayer";
import { PortfolioCard } from "@/components/PortfolioCard";
import { StaggerContainer } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { portfolioItems } from "@/lib/site";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Demo portfolio projects by ByteBlitz Technologies including business websites, school websites, NGO websites, POS systems, dashboards, and branding.",
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
            title="Sample projects for confident digital decisions"
            description="Demo portfolio cards show the type of professional solutions ByteBlitz Technologies can build for your organization."
          />
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <StaggerContainer className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {portfolioItems.map((item) => (
              <PortfolioCard key={item.title} item={item} />
            ))}
          </StaggerContainer>
        </div>
      </section>

      <CTASection />
    </>
  );
}
