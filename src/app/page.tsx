import {
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  ReceiptText,
  Rocket,
} from "lucide-react";
import Link from "next/link";
import { AnimatedStats } from "@/components/AnimatedStats";
import { AnimatedTechTicker } from "@/components/AnimatedTechTicker";
import { ButtonLink } from "@/components/ButtonLink";
import { CTASection } from "@/components/CTASection";
import { HeroMotionLayer } from "@/components/HeroMotionLayer";
import { PortfolioCard } from "@/components/PortfolioCard";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceGrid } from "@/components/ServiceGrid";
import { TechHeroVisual } from "@/components/TechHeroVisual";
import {
  defaultWhatsAppMessage,
  portfolioItems,
  posWhatsAppMessage,
  site,
  whatsappUrl,
  whyChooseUs,
} from "@/lib/site";

export default function Home() {
  return (
    <>
      <section className="hero-wash animated-gradient relative overflow-hidden px-4 pb-24 pt-16 text-white sm:px-6 lg:px-8 lg:pb-32 lg:pt-20">
        <div className="digital-grid absolute inset-0 opacity-20" />
        <div className="circuit-lines" />
        <HeroMotionLayer />
        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.04fr_0.96fr]">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-4 py-2 text-sm font-bold text-white backdrop-blur">
              <Rocket className="h-4 w-4 text-[#FF6A00]" />
              Proudly Based in Quetta, Balochistan
            </div>
            <h1 className="mt-7 max-w-4xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Build Your Digital Future with ByteBlitz Technologies
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
              We create professional websites, POS systems, dashboards, mobile
              apps, branding, and digital solutions for businesses, schools,
              NGOs, and organizations.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink
                href={whatsappUrl(defaultWhatsAppMessage)}
                external
                icon={MessageCircle}
              >
                Get Free Price
              </ButtonLink>
              <ButtonLink href="#services" icon={ArrowRight} variant="light">
                View Services
              </ButtonLink>
            </div>
            <div className="mt-8 grid gap-3 text-sm font-semibold text-white/75 sm:grid-cols-3">
              {["Premium design", "Reliable code", "WhatsApp-first orders"].map(
                (item) => (
                  <span key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#00AEEF]" />
                    {item}
                  </span>
                ),
              )}
            </div>
          </Reveal>
          <TechHeroVisual />
        </div>
      </section>

      <AnimatedStats />
      <AnimatedTechTicker />

      <section id="services" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Services"
            title="Digital solutions built for real business growth"
            description="Choose a service, send your details on WhatsApp, and get a clear price."
          />
          <div className="mt-12">
            <ServiceGrid />
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#FF6A00]">
              POS Systems
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-[#071B3A] sm:text-4xl">
              Online and offline POS for shops, stores, restaurants, and more
            </h2>
            <p className="mt-5 text-base leading-8 text-[#071B3A]/70">
              Start with billing, invoicing, inventory, reports, and support.
              ByteBlitz POS packages start from PKR 20,000.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink
                href={whatsappUrl(posWhatsAppMessage)}
                external
                icon={MessageCircle}
              >
                Order POS Today
              </ButtonLink>
              <ButtonLink href="/pos-systems" icon={ReceiptText} variant="outline">
                Explore POS
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal className="rounded-lg border border-[#071B3A]/10 bg-[#F5F7FB] p-4 shadow-2xl shadow-[#071B3A]/10">
            <div className="rounded-lg bg-[#071B3A] p-5 text-white">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-bold text-[#00AEEF]">
                    ByteBlitz POS
                  </p>
                  <h3 className="mt-1 text-2xl font-black">Daily Sales</h3>
                </div>
                <span className="rounded-full bg-[#FF6A00] px-4 py-2 text-sm font-black">
                  PKR 20,000+
                </span>
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {["Billing", "Stock", "Reports"].map((item, index) => (
                  <div key={item} className="rounded-lg bg-white/10 p-4">
                    <p className="text-sm font-bold text-white/70">{item}</p>
                    <p className="mt-3 text-2xl font-black">
                      {index === 0 ? "124" : index === 1 ? "840" : "18%"}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-lg bg-white p-4">
                <div className="grid grid-cols-5 items-end gap-2">
                  {[40, 70, 54, 88, 64].map((height) => (
                    <span
                      key={height}
                      style={{ height }}
                      className="rounded-t-md bg-gradient-to-t from-[#007BFF] to-[#00AEEF]"
                    />
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Portfolio"
            title="Demo projects that show what we can build"
            description="Sample project examples for the kind of websites, systems, dashboards, and branding ByteBlitz can deliver."
          />
          <StaggerContainer className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {portfolioItems.slice(0, 3).map((item) => (
              <PortfolioCard key={item.title} item={item} />
            ))}
          </StaggerContainer>
          <div className="mt-10 text-center">
            <Link
              href="/portfolio"
              className="focus-ring inline-flex items-center gap-2 rounded-full border border-[#071B3A]/15 bg-white px-5 py-3 text-sm font-black text-[#071B3A] transition hover:-translate-y-0.5 hover:text-[#007BFF]"
            >
              View Full Portfolio
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Why ByteBlitz"
            title={`${site.shortLocation}, serving businesses everywhere`}
            description="A practical technology partner focused on clean design, reliable development, and long-term support."
          />
          <StaggerContainer className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((item) => {
              const Icon = item.icon;
              return (
                <StaggerItem key={item.title}>
                  <div className="rounded-lg border border-[#071B3A]/10 bg-[#F5F7FB] p-5">
                    <Icon className="h-6 w-6 text-[#FF6A00]" />
                    <h3 className="mt-4 text-lg font-black text-[#071B3A]">
                      {item.title}
                    </h3>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      <CTASection />
    </>
  );
}
