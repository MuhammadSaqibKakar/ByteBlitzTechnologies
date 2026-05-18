"use client";

import { Menu, MessageCircle, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BrandMark } from "@/components/BrandMark";
import { PrintProjectsButton } from "@/components/PrintProjectsButton";
import {
  defaultWhatsAppMessage,
  emailUrl,
  navLinks,
  site,
  whatsappUrl,
} from "@/lib/site";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="nav-pro sticky top-0 z-50 border-b border-[#071B3A]/10 bg-white/95">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="focus-ring group flex items-center gap-3 rounded-lg"
          aria-label="ByteBlitz Technologies home"
        >
          <BrandMark priority />
          <span className="leading-tight">
            <span className="block text-base font-black tracking-tight text-[#071B3A] sm:text-lg">
              ByteBlitz
            </span>
            <span className="block text-xs font-bold uppercase tracking-[0.18em] text-[#FF6A00]">
              Technologies
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const active =
              link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link-pro focus-ring rounded-lg px-3 py-2 text-sm font-bold transition hover:bg-[#007BFF]/10 hover:text-[#007BFF] ${
                  active ? "is-active bg-[#007BFF]/10 text-[#007BFF]" : "text-[#071B3A]/75"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <PrintProjectsButton
            compact
            className="focus-ring inline-flex items-center gap-2 rounded-full border border-[#071B3A]/10 bg-white px-4 py-3 text-sm font-black text-[#071B3A] shadow-sm transition hover:-translate-y-0.5 hover:border-[#007BFF]/30 hover:text-[#007BFF]"
          />
          <a
            href={emailUrl()}
            target="_blank"
            rel="noreferrer"
            className="focus-ring hidden rounded-lg px-3 py-2 text-sm font-semibold text-[#071B3A]/70 transition hover:text-[#007BFF] xl:inline-flex"
          >
            {site.email}
          </a>
          <a
            href={whatsappUrl(defaultWhatsAppMessage)}
            target="_blank"
            rel="noreferrer"
            className="button-pro focus-ring inline-flex items-center gap-2 rounded-full bg-[#FF6A00] px-5 py-3 text-sm font-black text-white shadow-lg shadow-[#FF6A00]/25 transition hover:-translate-y-0.5 hover:bg-[#e95f00]"
          >
            <MessageCircle className="h-4 w-4" />
            Get Price
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[#071B3A]/10 bg-white text-[#071B3A] lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open ? (
        <div className="mobile-menu-panel overflow-hidden border-t border-[#071B3A]/10 bg-white lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-2 px-4 py-4 sm:px-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="focus-ring rounded-lg px-3 py-3 text-sm font-black text-[#071B3A] transition hover:bg-[#007BFF]/10 hover:text-[#007BFF]"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={whatsappUrl(defaultWhatsAppMessage)}
              target="_blank"
              rel="noreferrer"
              className="button-pro focus-ring mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[#FF6A00] px-5 py-3 text-sm font-black text-white"
            >
              <MessageCircle className="h-4 w-4" />
              Get Price
            </a>
            <PrintProjectsButton
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-[#071B3A]/10 bg-white px-5 py-3 text-sm font-black text-[#071B3A]"
            />
          </div>
        </div>
      ) : null}
    </header>
  );
}
