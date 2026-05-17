import type { Metadata } from "next";
import { AnimatedStats } from "@/components/AnimatedStats";
import { CTASection } from "@/components/CTASection";
import { HeroMotionLayer } from "@/components/HeroMotionLayer";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { site, trustPoints, whyChooseUs } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about ByteBlitz Technologies, a digital solutions company based in Quetta, Balochistan.",
};

export default function AboutPage() {
  return (
    <>
      <section className="hero-wash relative overflow-hidden px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="digital-grid absolute inset-0 opacity-20" />
        <HeroMotionLayer />
        <div className="relative z-10 mx-auto max-w-7xl">
          <SectionHeading
            as="h1"
            light
            eyebrow="About"
            title="ByteBlitz Technologies"
            description="A digital solutions company based in Quetta, Balochistan, building reliable technology for businesses, schools, NGOs, and organizations."
          />
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#FF6A00]">
              Who We Are
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-[#071B3A] sm:text-4xl">
              Modern, reliable, and affordable technology from {site.shortLocation}
            </h2>
          </Reveal>
          <Reveal className="rounded-lg border border-[#071B3A]/10 bg-white p-7 shadow-xl shadow-[#071B3A]/10">
            <p className="text-base leading-8 text-[#071B3A]/70">
              <strong className="text-[#071B3A]">ByteBlitz Technologies</strong>{" "}
              is a digital solutions company based in{" "}
              <strong className="text-[#071B3A]">Quetta, Balochistan</strong>,
              providing professional websites, POS systems, dashboards, mobile
              apps, branding, and software solutions.
            </p>
            <p className="mt-5 text-base leading-8 text-[#071B3A]/70">
              We help businesses, schools, NGOs, and organizations build a
              strong digital presence with practical tools, clean design, and
              long-term support.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Our Focus"
            title="Built around trust, clarity, and business value"
          />
          <StaggerContainer className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {trustPoints.map((point) => {
              const Icon = point.icon;
              return (
                <StaggerItem key={point.title}>
                  <div className="h-full rounded-lg bg-[#F5F7FB] p-6">
                    <Icon className="h-6 w-6 text-[#007BFF]" />
                    <h3 className="mt-4 text-lg font-black text-[#071B3A]">
                      {point.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-[#071B3A]/65">
                      {point.description}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      <AnimatedStats />

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Why Choose Us?"
            title="A helpful tech team for your business"
          />
          <StaggerContainer className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((item) => {
              const Icon = item.icon;
              return (
                <StaggerItem key={item.title}>
                  <div className="h-full rounded-lg border border-[#071B3A]/10 bg-white p-6 shadow-xl shadow-[#071B3A]/10">
                    <Icon className="h-6 w-6 text-[#FF6A00]" />
                    <h3 className="mt-4 text-lg font-black text-[#071B3A]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-[#071B3A]/65">
                      {item.description}
                    </p>
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
