import { ArrowUpRight, MessageCircle } from "lucide-react";
import { StaggerItem } from "@/components/Reveal";
import type { Service } from "@/lib/site";
import { whatsappUrl } from "@/lib/site";

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;

  return (
    <StaggerItem>
      <article className="hover-sheen group flex h-full flex-col rounded-lg border border-[#071B3A]/10 bg-white p-6 shadow-xl shadow-[#071B3A]/10 transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#007BFF]/15">
        <div className="flex items-start justify-between gap-4">
          <div className="soft-float flex h-12 w-12 items-center justify-center rounded-lg bg-[#007BFF]/10 text-[#007BFF] transition group-hover:bg-[#007BFF] group-hover:text-white">
            <Icon className="h-6 w-6" />
          </div>
          <ArrowUpRight className="h-5 w-5 text-[#071B3A]/30 transition group-hover:text-[#FF6A00]" />
        </div>
        <h2 className="mt-5 text-xl font-black text-[#071B3A]">
          {service.title}
        </h2>
        <p className="mt-3 text-sm leading-7 text-[#071B3A]/70">
          {service.description}
        </p>
        <ul className="mt-5 grid gap-2 text-sm text-[#071B3A]/75">
          {service.bullets.slice(0, 4).map((bullet) => (
            <li key={bullet} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FF6A00]" />
              {bullet}
            </li>
          ))}
        </ul>
        <a
          href={whatsappUrl(service.message)}
          target="_blank"
          rel="noreferrer"
          className="focus-ring mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-[#071B3A] px-4 py-3 text-sm font-black text-white transition hover:bg-[#FF6A00]"
        >
          <MessageCircle className="h-4 w-4" />
          Get Price
        </a>
      </article>
    </StaggerItem>
  );
}
