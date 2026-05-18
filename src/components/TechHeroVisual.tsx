import { BarChart3, ReceiptText, Smartphone } from "lucide-react";

export function TechHeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[22rem] py-2 sm:max-w-xl">
      <div className="circuit-lines rounded-lg" />

      <div className="hover-sheen relative z-10 rounded-lg border border-white/25 bg-[#071B3A]/90 p-3 shadow-2xl shadow-black/30">
        <div className="rounded-md bg-[#F5F7FB] p-3">
          <div className="mb-3 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#FF6A00]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#00AEEF]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#007BFF]" />
            </div>
            <span className="rounded-full bg-[#071B3A]/8 px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-[#071B3A]/55">
              Dashboard
            </span>
          </div>

          <div className="grid gap-3 sm:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-md bg-white p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="h-3 w-24 rounded-full bg-[#071B3A]/15" />
                <BarChart3 className="h-5 w-5 text-[#007BFF]" />
              </div>
              <div className="mt-4 grid grid-cols-4 items-end gap-2">
                {[46, 68, 56, 78].map((height) => (
                  <span
                    key={height}
                    style={{ height }}
                    className="rounded-t-md bg-gradient-to-t from-[#007BFF] to-[#00AEEF]"
                  />
                ))}
              </div>
              <div className="mt-4 grid grid-cols-3 gap-2">
                <span className="h-9 rounded-md bg-[#007BFF]/10" />
                <span className="h-9 rounded-md bg-[#FF6A00]/10" />
                <span className="h-9 rounded-md bg-[#00AEEF]/10" />
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
                <div className="mt-5 h-2 w-full rounded-full bg-white/18" />
                <div className="mt-2 h-2 w-2/3 rounded-full bg-white/18" />
              </div>
              <div className="rounded-md bg-white p-4 shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="h-8 w-8 rounded-lg bg-[#FF6A00]/15" />
                  <span className="h-3 flex-1 rounded-full bg-[#071B3A]/15" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-20 mt-4 grid gap-4 sm:grid-cols-[1fr_8rem]">
        <div className="rounded-lg border border-white/20 bg-white/14 p-4 text-white shadow-xl">
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

        <div className="soft-float mx-auto w-28 rounded-[1.75rem] border-4 border-white bg-white p-2 shadow-2xl sm:w-full">
          <div className="rounded-[1.15rem] bg-[#071B3A] p-3 text-white">
            <div className="flex items-center justify-between">
              <Smartphone className="h-4 w-4 text-[#00AEEF]" />
              <span className="h-2 w-8 rounded-full bg-white/20" />
            </div>
            <div className="mt-5 space-y-2">
              <span className="block h-2 rounded-full bg-white/20" />
              <span className="block h-2 w-3/4 rounded-full bg-white/20" />
              <span className="block h-7 rounded-md bg-[#FF6A00]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
