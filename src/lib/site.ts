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
  body = "Assalamualaikum ByteBlitz Technologies,%0D%0A%0D%0AI want to discuss my project.",
) {
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${body}`;
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
  { title: "Online & Offline POS", icon: ReceiptText },
  { title: "Inventory Management", icon: Boxes },
  { title: "Billing & Invoicing", icon: WalletCards },
  { title: "Sales Reports", icon: BarChart3 },
  { title: "User Friendly Interface", icon: Gauge },
  { title: "Customer Management", icon: HeartHandshake },
  { title: "Product Management", icon: Store },
  { title: "Business Support", icon: Headset },
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
  { title: "Professional Design", icon: Sparkles },
  { title: "Affordable Packages", icon: WalletCards },
  { title: "Fast Delivery", icon: Timer },
  { title: "Business Support", icon: Headset },
  { title: "Modern Technology", icon: Zap },
  { title: "Quetta Based, Serving Everywhere", icon: MapPin },
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
  { title: "Clean design", icon: Sparkles },
  { title: "Reliable development", icon: ShieldCheck },
  { title: "Business-focused solutions", icon: BriefcaseBusiness },
  { title: "Long-term support", icon: Headset },
  { title: "Honest and professional service", icon: BadgeCheck },
  { title: "Modern tools", icon: Globe2 },
];
