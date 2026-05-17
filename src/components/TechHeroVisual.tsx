"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  Braces,
  ChartNoAxesColumnIncreasing,
  ReceiptText,
  Smartphone,
} from "lucide-react";

const floating = [
  { icon: Braces, label: "Code", className: "left-4 top-8", delay: 0 },
  { icon: ReceiptText, label: "POS", className: "right-8 top-16", delay: 0.4 },
  {
    icon: BarChart3,
    label: "Reports",
    className: "bottom-16 left-2",
    delay: 0.8,
  },
  {
    icon: ChartNoAxesColumnIncreasing,
    label: "Growth",
    className: "bottom-8 right-10",
    delay: 1.1,
  },
];

export function TechHeroVisual() {
  return (
    <div className="relative mx-auto min-h-[500px] w-full max-w-2xl">
      <div className="circuit-lines rounded-lg" />

      {floating.map((item) => {
        const Icon = item.icon;
        return (
          <motion.div
            key={item.label}
            animate={{ y: [0, -12, 0], rotate: [0, 2, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              delay: item.delay,
              ease: "easeInOut",
            }}
            className={`absolute z-20 hidden rounded-lg border border-white/20 bg-white/15 p-3 text-white shadow-xl backdrop-blur-md sm:block ${item.className}`}
            aria-label={item.label}
          >
            <Icon className="h-5 w-5" />
          </motion.div>
        );
      })}

      <div
        className="hover-sheen absolute left-0 top-8 w-[92%] rounded-lg border border-white/25 bg-[#071B3A]/88 p-3 shadow-2xl shadow-black/30 backdrop-blur"
      >
        <div className="rounded-md bg-[#F5F7FB] p-3">
          <div className="mb-3 flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#FF6A00]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#00AEEF]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#007BFF]" />
          </div>
          <div className="grid gap-3 sm:grid-cols-[1fr_0.8fr]">
            <div className="rounded-md bg-white p-4 shadow-sm">
              <div className="h-3 w-24 rounded-full bg-[#071B3A]/15" />
              <div className="mt-5 grid grid-cols-4 items-end gap-2">
                {[62, 86, 72, 102].map((height, index) => (
                  <span
                    key={height}
                    style={{
                      height,
                      animationDelay: `${index * 0.22}s`,
                    }}
                    className="rounded-t-md bg-gradient-to-t from-[#007BFF] to-[#00AEEF]"
                  />
                ))}
              </div>
              <div className="mt-5 grid grid-cols-3 gap-2">
                <span className="h-12 rounded-md bg-[#007BFF]/10" />
                <span className="h-12 rounded-md bg-[#FF6A00]/10" />
                <span className="h-12 rounded-md bg-[#00AEEF]/10" />
              </div>
            </div>
            <div className="grid gap-3">
              <div className="rounded-md bg-[#071B3A] p-4 text-white">
                <div className="flex items-center justify-between">
                  <ReceiptText className="h-5 w-5 text-[#FF6A00]" />
                  <span className="rounded-full bg-white/15 px-2 py-1 text-[10px] font-black">
                    POS
                  </span>
                </div>
                <div className="mt-5 h-2 w-full rounded-full bg-white/15" />
                <div className="mt-2 h-2 w-2/3 rounded-full bg-white/15" />
              </div>
              <div className="rounded-md bg-white p-4 shadow-sm">
                <div className="flex items-center gap-2">
                  <span className="h-8 w-8 rounded-lg bg-[#FF6A00]/15" />
                  <span className="h-3 flex-1 rounded-full bg-[#071B3A]/15" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-20 left-8 hidden w-56 rounded-lg border border-white/20 bg-white/14 p-4 text-white shadow-xl backdrop-blur-md sm:block">
        <p className="text-xs font-black uppercase tracking-[0.18em] text-[#00AEEF]">
          Live Orders
        </p>
        <div className="mt-4 flex items-end justify-between gap-3">
          <div>
            <p className="text-3xl font-black">24</p>
            <p className="text-xs font-bold text-white/65">this week</p>
          </div>
          <div className="grid h-14 grid-cols-4 items-end gap-1">
            {[24, 42, 34, 52].map((height) => (
              <span
                key={height}
                style={{ height }}
                className="w-3 rounded-t bg-[#FF6A00]"
              />
            ))}
          </div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 right-2 z-30 w-36 rounded-[2rem] border-4 border-white bg-white p-2 shadow-2xl sm:right-8"
      >
        <div className="rounded-[1.35rem] bg-[#071B3A] p-3 text-white">
          <div className="flex items-center justify-between">
            <Smartphone className="h-4 w-4 text-[#00AEEF]" />
            <span className="h-2 w-8 rounded-full bg-white/20" />
          </div>
          <div className="mt-6 space-y-2">
            <span className="block h-2 rounded-full bg-white/20" />
            <span className="block h-2 w-3/4 rounded-full bg-white/20" />
            <span className="block h-8 rounded-md bg-[#FF6A00]" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
