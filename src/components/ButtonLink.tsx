import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  icon?: LucideIcon;
  variant?: "primary" | "secondary" | "light" | "outline";
  external?: boolean;
  className?: string;
};

const variants = {
  primary:
    "bg-[#FF6A00] text-white shadow-lg shadow-[#FF6A00]/25 hover:bg-[#e95f00]",
  secondary:
    "bg-[#007BFF] text-white shadow-lg shadow-[#007BFF]/25 hover:bg-[#006ee6]",
  light:
    "bg-white text-[#071B3A] shadow-lg shadow-[#071B3A]/15 hover:bg-[#F5F7FB]",
  outline:
    "border border-[#071B3A]/15 bg-white text-[#071B3A] hover:border-[#007BFF]/40 hover:text-[#007BFF]",
};

export function ButtonLink({
  href,
  children,
  icon: Icon,
  variant = "primary",
  external = false,
  className = "",
}: ButtonLinkProps) {
  const classes = `focus-ring button-pro inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-black transition hover:-translate-y-0.5 ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={classes}
      >
        {Icon ? <Icon className="h-4 w-4" /> : null}
        {children}
      </a>
    );
  }

  if (href.startsWith("#")) {
    return (
      <a href={href} className={classes}>
        {Icon ? <Icon className="h-4 w-4" /> : null}
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {Icon ? <Icon className="h-4 w-4" /> : null}
      {children}
    </Link>
  );
}
