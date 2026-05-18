import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  BarChart3,
  Boxes,
  BriefcaseBusiness,
  Code2,
  Gauge,
  Globe2,
  Headset,
  HeartHandshake,
  LayoutDashboard,
  Mail,
  MapPin,
  MessageCircle,
  MonitorSmartphone,
  Palette,
  ReceiptText,
  School,
  Share2,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Store,
  Timer,
  WalletCards,
  Wrench,
  Zap,
} from "lucide-react";

export const site = {
  name: "ByteBlitz Technologies",
  location: "Quetta, Balochistan, Pakistan",
  shortLocation: "Quetta, Balochistan",
  whatsappDisplay: "03353039320",
  whatsappNumber: "923353039320",
  email: "byteblitzpk@gmail.com",
};

export const defaultWhatsAppMessage =
  "Assalamualaikum, I want to know the price for my project from ByteBlitz Technologies.";

export const posWhatsAppMessage =
  "Assalamualaikum, I want to know more about ByteBlitz POS System starting from PKR 20,000.";

export function whatsappUrl(message = defaultWhatsAppMessage) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function emailUrl(
  subject = "Project inquiry for ByteBlitz Technologies",
  body = "Assalamualaikum ByteBlitz Technologies,\n\nI want to discuss my project.",
) {
  const params = new URLSearchParams({
    view: "cm",
    fs: "1",
    to: site.email,
    su: subject,
    body,
  });

  return `https://mail.google.com/mail/?${params.toString()}`;
}

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "POS Systems", href: "/pos-systems" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export type Service = {
  title: string;
  description: string;
  bullets: string[];
  icon: LucideIcon;
  message: string;
};

export const services: Service[] = [
  {
    title: "Websites",
    description:
      "Responsive, SEO-friendly websites for businesses, schools, NGOs, portfolios, and growing brands.",
    bullets: [
      "Business websites",
      "School websites",
      "NGO websites",
      "Portfolio websites",
      "Responsive and SEO-friendly",
    ],
    icon: MonitorSmartphone,
    message:
      "Assalamualaikum, I want to know the price for a professional website from ByteBlitz Technologies.",
  },
  {
    title: "POS Systems",
    description:
      "Online and offline POS software with billing, stock control, reports, and business support.",
    bullets: [
      "Online and offline POS",
      "Billing and invoicing",
      "Inventory management",
      "Sales reports",
      "Starting from PKR 20,000",
    ],
    icon: ReceiptText,
    message:
      "Assalamualaikum, I want to know more about ByteBlitz POS System starting from PKR 20,000.",
  },
  {
    title: "Dashboards",
    description:
      "Smart dashboards that turn projects, operations, and business numbers into clear decisions.",
    bullets: [
      "Business dashboards",
      "Project tracking dashboards",
      "Reports and analytics",
      "Charts and visual insights",
    ],
    icon: BarChart3,
    message:
      "Assalamualaikum, I want to know the price for a dashboard from ByteBlitz Technologies.",
  },
  {
    title: "Mobile Apps",
    description:
      "Custom Android, iOS, and business apps built around your daily tasks.",
    bullets: [
      "Android apps",
      "iOS apps",
      "Business apps",
      "Custom app solutions",
    ],
    icon: Smartphone,
    message:
      "Assalamualaikum, I want to know the price for a mobile app from ByteBlitz Technologies.",
  },
  {
    title: "Graphic Design & Branding",
    description:
      "Brand visuals that look clean, consistent, and ready for social and print use.",
    bullets: ["Logos", "Posters", "Social media posts", "Brand identity"],
    icon: Palette,
    message:
      "Assalamualaikum, I want to know the price for branding design from ByteBlitz Technologies.",
  },
  {
    title: "Social Media Management",
    description:
      "Setup, content, and growth-focused posts for Facebook, Instagram, and business pages.",
    bullets: [
      "Facebook page setup",
      "Instagram content",
      "Business branding",
      "Growth-focused posts",
    ],
    icon: Share2,
    message:
      "Assalamualaikum, I want to know the price for social media management from ByteBlitz Technologies.",
  },
  {
    title: "Software Solutions",
    description:
      "Admin panels, automation systems, office tools, and custom business software.",
    bullets: [
      "Custom software",
      "Admin panels",
      "Automation systems",
      "Office management systems",
    ],
    icon: Code2,
    message:
      "Assalamualaikum, I want to know the price for custom software from ByteBlitz Technologies.",
  },
];

export const posFeatures = [
  { title: "Online & Offline POS", description: "Works with or without internet for uninterrupted service.", icon: ReceiptText },
  { title: "Inventory Management", description: "Track stock levels and get alerts before items run out.", icon: Boxes },
  { title: "Billing & Invoicing", description: "Generate fast, accurate invoices and receipts at the counter.", icon: WalletCards },
  { title: "Sales Reports", description: "Daily, weekly, and monthly summaries at a glance.", icon: BarChart3 },
  { title: "User Friendly Interface", description: "Simple to learn, fast to use — even for non-technical staff.", icon: Gauge },
  { title: "Customer Management", description: "Keep customer records and build long-term relationships.", icon: HeartHandshake },
  { title: "Product Management", description: "Organize products, prices, and categories with ease.", icon: Store },
  { title: "Business Support", description: "Dedicated help and guidance whenever your team needs it.", icon: Headset },
];

export const portfolioItems = [
  {
    title: "Business Website",
    category: "Website",
    description: "Modern responsive website for a local business.",
    icon: BriefcaseBusiness,
    tone: "blue",
  },
  {
    title: "School Website",
    category: "Education",
    description: "Professional school website with pages and admission info.",
    icon: School,
    tone: "sky",
  },
  {
    title: "NGO Website",
    category: "Organization",
    description: "Clean website for organization profile and projects.",
    icon: HeartHandshake,
    tone: "orange",
  },
  {
    title: "POS System",
    category: "Software",
    description: "Billing, inventory, sales reports, and dashboard.",
    icon: ReceiptText,
    tone: "navy",
  },
  {
    title: "Project Dashboard",
    category: "Analytics",
    description: "Progress tracking and analytics dashboard.",
    icon: LayoutDashboard,
    tone: "blue",
  },
  {
    title: "Branding Design",
    category: "Branding",
    description: "Logo, social media posts, and brand kit.",
    icon: Palette,
    tone: "orange",
  },
];

export const whyChooseUs = [
  { title: "Professional Design", description: "Clean, modern visuals that make your brand stand out and build real trust.", icon: Sparkles },
  { title: "Affordable Packages", description: "Flexible pricing built for businesses of every size and budget.", icon: WalletCards },
  { title: "Fast Delivery", description: "Quick turnaround without compromising quality or attention to detail.", icon: Timer },
  { title: "Business Support", description: "Ongoing help and guidance well after your project launches.", icon: Headset },
  { title: "Modern Technology", description: "Built with up-to-date tools that are reliable, scalable, and secure.", icon: Zap },
  { title: "Quetta Based, Serving Everywhere", description: "Local roots with the expertise to serve clients across Pakistan.", icon: MapPin },
];

export const stats = [
  {
    label: "Digital Services",
    value: 20,
    suffix: "+",
    icon: Wrench,
  },
  {
    label: "Fast Delivery",
    text: "Fast",
    icon: Zap,
  },
  {
    label: "Affordable Packages",
    text: "Smart",
    icon: BadgeCheck,
  },
  {
    label: "Quetta Based",
    text: "Local",
    icon: MapPin,
  },
];

export const contactCards = [
  { title: "WhatsApp", value: site.whatsappDisplay, icon: MessageCircle },
  { title: "Email", value: site.email, icon: Mail },
  { title: "Location", value: site.location, icon: MapPin },
];

export const trustPoints = [
  { title: "Clean design", description: "Every project is crafted with clarity, consistency, and visual quality.", icon: Sparkles },
  { title: "Reliable development", description: "Code built for the real world — stable, tested, and easy to maintain.", icon: ShieldCheck },
  { title: "Business-focused solutions", description: "Technology that solves real problems and creates measurable value.", icon: BriefcaseBusiness },
  { title: "Long-term support", description: "We stay available after launch for updates, fixes, and improvements.", icon: Headset },
  { title: "Honest and professional service", description: "Transparent communication, clear pricing, and no hidden surprises.", icon: BadgeCheck },
  { title: "Modern tools", description: "Built on proven, current technologies for performance and longevity.", icon: Globe2 },
];
