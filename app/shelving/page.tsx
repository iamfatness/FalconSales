import ServiceView from "../../components/ServicePage.tsx";
import { site } from "../../content/site.ts";

export default function Page() {
  const service = site.services.find((item) => item.slug === "shelving");
  if (!service) {
    throw new Error("Unknown slug: shelving");
  }
  return <ServiceView service={service} />;
}
