import { MessageCircle } from "lucide-react";
import { defaultWhatsAppMessage, whatsappUrl } from "@/lib/site";

export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappUrl(defaultWhatsAppMessage)}
      target="_blank"
      rel="noreferrer"
      className="focus-ring fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-[#071B3A]/25 transition hover:-translate-y-1 sm:h-16 sm:w-16"
      aria-label="Contact ByteBlitz Technologies on WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
