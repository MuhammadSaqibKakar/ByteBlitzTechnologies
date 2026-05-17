import type { Metadata } from "next";
import { MessageCircle, ReceiptText } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { CTASection } from "@/components/CTASection";
import { HeroMotionLayer } from "@/components/HeroMotionLayer";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/Reveal";
import { posFeatures, posWhatsAppMessage, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "POS Systems",
  description:
    "Online and offline POS systems for shops, stores, restaurants, pharmacies, supermarkets, and growing businesses. Starting from PKR 20,000.",
};

export default function PosSystemsPage() {
  return (
    <>
      <section className="hero-wash relative overflow-hidden px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="digital-grid absolute inset-0 opacity-20" />
        <div className="circuit-lines" />
        <HeroMotionLayer />
        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_0.95fr]">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#FF6A00] px-4 py-2 text-sm font-black text-white shadow-lg shadow-[#FF6A00]/25">
              <ReceiptText className="h-4 w-4" />
              Starting from PKR 20,000
            </span>
            <h1 className="mt-7 text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Online & Offline POS Systems for Smart Businesses
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
              Modern POS software for shops, stores, restaurants, pharmacies,
              supermarkets, and growing businesses.
            </p>
            <div className="mt-8">
              <ButtonLink
                href={whatsappUrl(posWhatsAppMessage)}
                external
                icon={MessageCircle}
              >
                Order Your POS System Today
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal className="glass-panel rounded-lg p-5">
            <div className="rounded-lg bg-white p-5 text-[#071B3A]">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-black text-[#007BFF]">
                    Live POS Preview
                  </p>
                  <h2 className="mt-1 text-2xl font-black">Counter Billing</h2>
                </div>
                <span className="rounded-full bg-[#F5F7FB] px-3 py-2 text-xs font-black">
                  Offline Ready
                </span>
              </div>
              <div className="mt-6 grid gap-3">
                {["Product scan", "Invoice print", "Inventory sync"].map(
                  (item, index) => (
                    <div
                      key={item}
                      className="flex items-center justify-between rounded-lg bg-[#F5F7FB] p-4"
                    >
                      <span className="font-bold">{item}</span>
                      <span className="rounded-full bg-white px-3 py-1 text-sm font-black text-[#FF6A00]">
                        {index === 0 ? "Fast" : index === 1 ? "Ready" : "Auto"}
                      </span>
                    </div>
                  ),
                )}
              </div>
              <div className="mt-5 rounded-lg bg-[#071B3A] p-5 text-white">
                <p className="text-sm font-bold text-white/60">Today sales</p>
                <p className="mt-2 text-4xl font-black">PKR 86,450</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#FF6A00]">
              Features
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-[#071B3A] sm:text-4xl">
              Everything your business needs at the counter
            </h2>
          </div>
          <StaggerContainer className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {posFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <StaggerItem key={feature.title}>
                  <div className="h-full rounded-lg border border-[#071B3A]/10 bg-white p-5 shadow-xl shadow-[#071B3A]/10 transition hover:-translate-y-1">
                    <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#007BFF]/10 text-[#007BFF]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-5 text-lg font-black text-[#071B3A]">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-[#071B3A]/65">
                      {feature.description}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3">
          {[
            {
              title: "Retail & Shops",
              text: "Billing, product stock, barcode-ready tasks, and sales summaries.",
            },
            {
              title: "Restaurants",
              text: "Order billing, table-friendly operations, receipts, and daily reports.",
            },
            {
              title: "Pharmacies & Markets",
              text: "Inventory control, product management, staff access, and customer records.",
            },
          ].map((item) => (
            <Reveal key={item.title}>
              <div className="h-full rounded-lg bg-[#F5F7FB] p-7">
                <h3 className="text-xl font-black text-[#071B3A]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#071B3A]/70">
                  {item.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection
        title="Order Your POS System Today"
        subtext="Start with a modern POS package from PKR 20,000 and get business-ready support."
        message={posWhatsAppMessage}
      />
    </>
  );
}
