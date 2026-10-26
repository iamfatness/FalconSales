import ServiceView from "../../components/ServicePage.tsx";
import { site } from "../../content/site.ts";

export default function Page() {
  const service = site.services.find((item) => item.slug === "warehouse-layout");
  if (!service) {
    throw new Error("Unknown slug: warehouse-layout");
  }
  return <ServiceView service={service} />;
}
