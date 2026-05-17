import { Reveal } from "@/components/Reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  as?: "h1" | "h2";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
  as: Tag = "h2",
}: SectionHeadingProps) {
  return (
    <Reveal
      className={`mx-auto max-w-3xl ${
        align === "center" ? "text-center" : "mx-0 text-left"
      }`}
    >
      {eyebrow ? (
        <p
          className={`text-sm font-black uppercase tracking-[0.18em] ${
            light ? "text-[#00AEEF]" : "text-[#FF6A00]"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <Tag
        className={`mt-3 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl ${
          light ? "text-white" : "text-[#071B3A]"
        }`}
      >
        {title}
      </Tag>
      {description ? (
        <p
          className={`mt-5 text-base leading-8 sm:text-lg ${
            light ? "text-white/75" : "text-[#071B3A]/70"
          }`}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
