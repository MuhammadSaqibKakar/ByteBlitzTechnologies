import { Mail, MapPin, MessageCircle } from "lucide-react";
import Link from "next/link";
import {
  defaultWhatsAppMessage,
  emailUrl,
  navLinks,
  services,
  site,
  whatsappUrl,
} from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-[#071B3A] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_0.9fr_1.1fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-white text-lg font-black text-[#071B3A]">
              BB
            </span>
            <div>
              <p className="text-lg font-black">{site.name}</p>
              <p className="text-sm font-semibold text-[#00AEEF]">
                {site.shortLocation}
              </p>
            </div>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-7 text-white/75">
            Professional websites, POS systems, dashboards, apps, branding, and
            digital solutions.
          </p>
          <a
            href={whatsappUrl(defaultWhatsAppMessage)}
            target="_blank"
            rel="noreferrer"
            className="focus-ring mt-6 inline-flex items-center gap-2 rounded-full bg-[#FF6A00] px-5 py-3 text-sm font-black text-white transition hover:bg-[#e95f00]"
          >
            <MessageCircle className="h-4 w-4" />
            Contact on WhatsApp
          </a>
        </div>

        <div>
          <h2 className="text-sm font-black uppercase tracking-[0.18em] text-[#00AEEF]">
            Quick Links
          </h2>
          <div className="mt-5 grid gap-3">
            {navLinks
              .filter((link) => link.label !== "About")
              .map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-semibold text-white/75 transition hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-black uppercase tracking-[0.18em] text-[#00AEEF]">
            Services
          </h2>
          <div className="mt-5 grid gap-3">
            {services
              .filter((service) =>
                [
                  "Websites",
                  "POS Systems",
                  "Dashboards",
                  "Mobile Apps",
                  "Graphic Design & Branding",
                  "Software Solutions",
                ].includes(service.title),
              )
              .map((service) => (
                <Link
                  key={service.title}
                  href="/services"
                  className="text-sm font-semibold text-white/75 transition hover:text-white"
                >
                  {service.title === "Graphic Design & Branding"
                    ? "Branding"
                    : service.title}
                </Link>
              ))}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-black uppercase tracking-[0.18em] text-[#00AEEF]">
            Contact
          </h2>
          <div className="mt-5 grid gap-4 text-sm text-white/75">
            <a
              href={whatsappUrl(defaultWhatsAppMessage)}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 transition hover:text-white"
            >
              <MessageCircle className="h-4 w-4 text-[#FF6A00]" />
              WhatsApp: {site.whatsappDisplay}
            </a>
            <a
              href={emailUrl()}
              className="flex items-center gap-3 transition hover:text-white"
            >
              <Mail className="h-4 w-4 text-[#FF6A00]" />
              Email: {site.email}
            </a>
            <p className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-[#FF6A00]" />
              Location: {site.shortLocation}
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-xs font-semibold text-white/60">
        &copy; 2026 ByteBlitz Technologies. All rights reserved.
      </div>
    </footer>
  );
}
