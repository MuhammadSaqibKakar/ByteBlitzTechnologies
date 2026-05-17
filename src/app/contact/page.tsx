import type { Metadata } from "next";
import { Mail, MessageCircle } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { ContactForm } from "@/components/ContactForm";
import { HeroMotionLayer } from "@/components/HeroMotionLayer";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import {
  contactCards,
  defaultWhatsAppMessage,
  emailUrl,
  whatsappUrl,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact ByteBlitz Technologies on WhatsApp or email for websites, POS systems, dashboards, apps, branding, and software solutions.",
};

export default function ContactPage() {
  return (
    <>
      <section className="hero-wash relative overflow-hidden px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="digital-grid absolute inset-0 opacity-20" />
        <HeroMotionLayer />
        <div className="relative z-10 mx-auto max-w-7xl">
          <SectionHeading
            as="h1"
            light
            eyebrow="Contact"
            title="Let's Build Something Great Together"
            description="Send your project details and ByteBlitz Technologies will respond on WhatsApp with a clear next step."
          />
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ButtonLink
              href={whatsappUrl(defaultWhatsAppMessage)}
              external
              icon={MessageCircle}
            >
              WhatsApp Now
            </ButtonLink>
            <ButtonLink
              href={emailUrl()}
              external
              icon={Mail}
              variant="light"
            >
              Email Us
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <ContactForm />
          </Reveal>

          <div>
            <Reveal>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#FF6A00]">
                Contact Details
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-[#071B3A] sm:text-4xl">
                Fast WhatsApp chat for orders and prices
              </h2>
            </Reveal>
            <StaggerContainer className="mt-8 grid gap-4">
              {contactCards.map((card) => {
                const Icon = card.icon;
                const content =
                  card.title === "WhatsApp" ? (
                    <a
                      href={whatsappUrl(defaultWhatsAppMessage)}
                      target="_blank"
                      rel="noreferrer"
                      className="font-black text-[#071B3A] transition hover:text-[#007BFF]"
                    >
                      {card.value}
                    </a>
                  ) : card.title === "Email" ? (
                    <a
                      href={emailUrl()}
                      className="font-black text-[#071B3A] transition hover:text-[#007BFF]"
                    >
                      {card.value}
                    </a>
                  ) : (
                    <p className="font-black text-[#071B3A]">{card.value}</p>
                  );

                return (
                  <StaggerItem key={card.title}>
                    <div className="rounded-lg border border-[#071B3A]/10 bg-white p-5 shadow-xl shadow-[#071B3A]/10">
                      <div className="flex items-center gap-4">
                        <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#007BFF]/10 text-[#007BFF]">
                          <Icon className="h-5 w-5" />
                        </span>
                        <div>
                          <p className="text-sm font-bold text-[#071B3A]/55">
                            {card.title}
                          </p>
                          {content}
                        </div>
                      </div>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </div>
      </section>
    </>
  );
}
