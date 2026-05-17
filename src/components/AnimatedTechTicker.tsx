import {
  BarChart3,
  Code2,
  MonitorSmartphone,
  Palette,
  ReceiptText,
  Smartphone,
} from "lucide-react";

const tickerItems = [
  { label: "Websites", icon: MonitorSmartphone },
  { label: "POS Systems", icon: ReceiptText },
  { label: "Dashboards", icon: BarChart3 },
  { label: "Mobile Apps", icon: Smartphone },
  { label: "Branding", icon: Palette },
  { label: "Software", icon: Code2 },
];

export function AnimatedTechTicker() {
  const items = [...tickerItems, ...tickerItems];

  return (
    <section className="overflow-hidden bg-white py-5">
      <div className="ticker-track flex w-max">
        {items.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={`${item.label}-${index}`}
              className="mx-2 flex items-center gap-3 rounded-full border border-[#071B3A]/10 bg-[#F5F7FB] px-5 py-3 text-sm font-black text-[#071B3A]"
            >
              <Icon className="h-4 w-4 text-[#007BFF]" />
              {item.label}
            </div>
          );
        })}
      </div>
    </section>
  );
}
