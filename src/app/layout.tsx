import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AdminShortcut } from "@/components/AdminShortcut";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { MotionEnhancer } from "@/components/MotionEnhancer";
import { Navbar } from "@/components/Navbar";
import { PageTransition } from "@/components/PageTransition";
import { site } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://byteblitztechnologies.com"),
  title: {
    default:
      "ByteBlitz Technologies | Websites, POS Systems & Digital Solutions in Quetta",
    template: "%s | ByteBlitz Technologies",
  },
  description:
    "ByteBlitz Technologies provides professional websites, POS systems, dashboards, mobile apps, branding, and software solutions for businesses, schools, NGOs, and organizations in Quetta, Balochistan and across Pakistan.",
  keywords: [
    "ByteBlitz Technologies",
    "websites in Quetta",
    "POS system Quetta",
    "software company Quetta",
    "digital solutions Pakistan",
    "business websites",
    "dashboards",
    "mobile apps",
    "branding",
  ],
  openGraph: {
    title:
      "ByteBlitz Technologies | Websites, POS Systems & Digital Solutions in Quetta",
    description:
      "Professional websites, POS systems, dashboards, apps, branding, and software solutions from Quetta, Balochistan.",
    type: "website",
    locale: "en_PK",
    siteName: site.name,
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full scroll-smooth ${inter.variable}`}>
      <body className="min-h-full bg-[#F5F7FB] font-[family-name:var(--font-inter)] text-[#071B3A] antialiased">
        <Navbar />
        <PageTransition>{children}</PageTransition>
        <Footer />
        <FloatingWhatsApp />
        <AdminShortcut />
        <MotionEnhancer />
      </body>
    </html>
  );
}
