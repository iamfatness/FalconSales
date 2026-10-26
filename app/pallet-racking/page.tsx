import ServiceView from "../../components/ServicePage.tsx";
import { site } from "../../content/site.ts";

export default function Page() {
  const service = site.services.find((item) => item.slug === "pallet-racking");
  if (!service) {
    throw new Error("Unknown slug: pallet-racking");
  }
  return <ServiceView service={service} />;
}
