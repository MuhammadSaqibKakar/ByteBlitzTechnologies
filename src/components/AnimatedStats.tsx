import type { CSSProperties } from "react";
import { stats } from "@/lib/site";

export function AnimatedStats() {
  return (
    <section className="relative z-10 -mt-10 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-4 rounded-lg border border-[#071B3A]/10 bg-white p-4 shadow-2xl shadow-[#071B3A]/10 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={item.label}
              className="stagger-item-lite rounded-lg bg-[#F5F7FB] p-5"
              style={{ "--stagger-index": index } as CSSProperties}
            >
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#007BFF]/10 text-[#007BFF]">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-2xl font-black text-[#071B3A]">
                    {"value" in item && typeof item.value === "number" ? (
                      `${item.value}${item.suffix ?? ""}`
                    ) : (
                      item.text
                    )}
                  </p>
                  <p className="text-sm font-bold text-[#071B3A]/65">
                    {item.label}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
