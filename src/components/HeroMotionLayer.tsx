export function HeroMotionLayer() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <span className="scan-beam absolute left-0 top-[22%] h-px w-full" />
      <span className="scan-beam absolute left-0 top-[61%] h-px w-full [animation-delay:2.2s]" />
      <span className="pulse-node absolute left-[12%] top-[28%] h-2 w-2 rounded-full bg-[#00AEEF]" />
      <span className="pulse-node absolute right-[18%] top-[34%] h-2 w-2 rounded-full bg-[#FF6A00] [animation-delay:1s]" />
      <span className="pulse-node absolute bottom-[22%] left-[45%] h-2 w-2 rounded-full bg-white [animation-delay:1.8s]" />
    </div>
  );
}
