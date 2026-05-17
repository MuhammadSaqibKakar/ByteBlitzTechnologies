import { MessageCircle } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { Reveal } from "@/components/Reveal";
import { defaultWhatsAppMessage, whatsappUrl } from "@/lib/site";

export function CTASection({
  title = "Ready to Grow Your Business Digitally?",
  subtext = "Contact ByteBlitz Technologies today and get a professional digital solution for your business.",
  message = defaultWhatsAppMessage,
}: {
  title?: string;
  subtext?: string;
  message?: string;
}) {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <Reveal className="mx-auto max-w-7xl overflow-hidden rounded-lg bg-[#071B3A]">
        <div className="digital-grid animated-gradient relative bg-[linear-gradient(135deg,#071B3A,#0B3269,#007BFF)] px-6 py-12 text-center sm:px-10">
          <div className="circuit-lines" />
          <div className="relative z-10 mx-auto max-w-3xl">
            <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
              {title}
            </h2>
            <p className="mt-4 text-base leading-8 text-white/75">{subtext}</p>
            <div className="mt-8">
              <ButtonLink
                href={whatsappUrl(message)}
                external
                icon={MessageCircle}
                variant="primary"
              >
                Contact on WhatsApp
              </ButtonLink>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
