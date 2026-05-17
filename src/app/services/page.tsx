import type { Metadata } from "next";
import { MessageCircle } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { CTASection } from "@/components/CTASection";
import { HeroMotionLayer } from "@/components/HeroMotionLayer";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceGrid } from "@/components/ServiceGrid";
import { defaultWhatsAppMessage, services, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore ByteBlitz Technologies services including websites, POS systems, dashboards, mobile apps, branding, social media, and software solutions.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="hero-wash relative overflow-hidden px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="digital-grid absolute inset-0 opacity-20" />
        <HeroMotionLayer />
        <div className="relative z-10 mx-auto max-w-7xl">
          <SectionHeading
            as="h1"
            light
            eyebrow="Our Services"
            title="Professional digital services for growing organizations"
            description="Websites, POS systems, dashboards, apps, branding, social media, and custom software from one focused team."
          />
          <div className="mt-8 text-center">
            <ButtonLink
              href={whatsappUrl(defaultWhatsAppMessage)}
              external
              icon={MessageCircle}
            >
              Ask for Price
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <ServiceGrid />
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#FF6A00]">
              Simple Process
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-[#071B3A] sm:text-4xl">
              From idea to launch with clear communication
            </h2>
            <p className="mt-5 text-base leading-8 text-[#071B3A]/70">
              Send your details on WhatsApp, get a clear package, review
              the design, and launch with support.
            </p>
          </Reveal>
          <StaggerContainer className="grid gap-4 md:grid-cols-2">
            {[
              "Discuss requirements",
              "Confirm package",
              "Design and development",
              "Testing and launch",
            ].map((step, index) => (
              <StaggerItem key={step}>
                <div className="rounded-lg border border-[#071B3A]/10 bg-[#F5F7FB] p-6">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#007BFF] text-sm font-black text-white">
                    {index + 1}
                  </span>
                  <h3 className="mt-5 text-lg font-black text-[#071B3A]">
                    {step}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-[#071B3A]/65">
                    {index === 0
                      ? "Tell us your business, goal, preferred service, and deadline."
                      : index === 1
                        ? "We share price, time, and what is included."
                        : index === 2
                          ? "Your solution is built with responsive design and clean code."
                          : "We verify pages, forms, WhatsApp links, and mobile views."}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-lg border border-[#071B3A]/10 bg-white p-6 shadow-xl shadow-[#071B3A]/10">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#FF6A00]">
            Popular Requests
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            {services.map((service) => (
              <a
                key={service.title}
                href={whatsappUrl(service.message)}
                target="_blank"
                rel="noreferrer"
                className="focus-ring rounded-full border border-[#071B3A]/10 bg-[#F5F7FB] px-4 py-2 text-sm font-bold text-[#071B3A] transition hover:border-[#007BFF]/40 hover:text-[#007BFF]"
              >
                {service.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
