import Image from "next/image";

type BrandMarkProps = {
  className?: string;
  imageClassName?: string;
  priority?: boolean;
};

export function BrandMark({
  className = "",
  imageClassName = "h-9 w-9",
  priority = false,
}: BrandMarkProps) {
  return (
    <span
      className={`brand-mark flex h-11 w-11 items-center justify-center rounded-lg border border-[#071B3A]/10 bg-white shadow-lg shadow-[#071B3A]/15 ${className}`}
    >
      <Image
        src="/icon.png"
        alt=""
        width={128}
        height={128}
        priority={priority}
        sizes="44px"
        className={`relative z-10 object-contain ${imageClassName}`}
        draggable="false"
      />
    </span>
  );
}
