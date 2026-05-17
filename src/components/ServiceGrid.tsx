import { ServiceCard } from "@/components/ServiceCard";
import { StaggerContainer } from "@/components/Reveal";
import { services } from "@/lib/site";

export function ServiceGrid({ limit }: { limit?: number }) {
  const items = typeof limit === "number" ? services.slice(0, limit) : services;

  return (
    <StaggerContainer className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {items.map((service) => (
        <ServiceCard key={service.title} service={service} />
      ))}
    </StaggerContainer>
  );
}
