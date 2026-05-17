import { MessageCircle } from "lucide-react";
import type { ComponentType } from "react";
import { StaggerItem } from "@/components/Reveal";
import { whatsappUrl } from "@/lib/site";

type PortfolioItem = {
  title: string;
  category: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
  tone: string;
};

const toneStyles: Record<string, string> = {
  blue: "from-[#007BFF] to-[#00AEEF]",
  sky: "from-[#00AEEF] to-[#57d7ff]",
  orange: "from-[#FF6A00] to-[#ffad66]",
  navy: "from-[#071B3A] to-[#0b3269]",
};

export function PortfolioCard({ item }: { item: PortfolioItem }) {
  const Icon = item.icon;
  const message = `Assalamualaikum, I want to request a similar project: ${item.title}.`;

  return (
    <StaggerItem>
      <article className="hover-sheen group overflow-hidden rounded-lg border border-[#071B3A]/10 bg-white shadow-xl shadow-[#071B3A]/10 transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#007BFF]/15">
        <div
          className={`relative h-56 bg-gradient-to-br ${
            toneStyles[item.tone] ?? toneStyles.blue
          } p-5`}
        >
          <div className="digital-grid absolute inset-0 opacity-30" />
          <div className="relative h-full rounded-lg border border-white/20 bg-white/20 p-4 backdrop-blur-md">
            <div className="flex items-center justify-between">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-white text-[#071B3A]">
                <Icon className="h-5 w-5" />
              </span>
              <span className="rounded-full bg-white/25 px-3 py-1 text-xs font-black text-white">
                {item.category}
              </span>
            </div>
            <div className="mt-8 grid gap-2">
              <span className="h-3 rounded-full bg-white/70" />
              <span className="h-3 w-4/5 rounded-full bg-white/50" />
              <span className="h-3 w-2/3 rounded-full bg-white/35" />
            </div>
            <div className="absolute bottom-4 left-4 right-4 grid grid-cols-3 gap-2">
              <span className="h-12 rounded-md bg-white/25" />
              <span className="h-12 rounded-md bg-white/20" />
              <span className="h-12 rounded-md bg-white/25" />
            </div>
          </div>
        </div>
        <div className="p-6">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-[#FF6A00]">
            {item.category}
          </p>
          <h2 className="mt-2 text-xl font-black text-[#071B3A]">
            {item.title}
          </h2>
          <p className="mt-3 text-sm leading-7 text-[#071B3A]/70">
            {item.description}
          </p>
          <a
            href={whatsappUrl(message)}
            target="_blank"
            rel="noreferrer"
            className="focus-ring mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-[#071B3A] px-4 py-3 text-sm font-black text-white transition hover:bg-[#FF6A00]"
          >
            <MessageCircle className="h-4 w-4" />
            Request Similar Project
          </a>
        </div>
      </article>
    </StaggerItem>
  );
}
