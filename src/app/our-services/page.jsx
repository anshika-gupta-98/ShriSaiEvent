import ServicesSection from "@/Components/OurServices/OurServices";
import PageHero from "@/Components/Shared/PagesHero";
import { servicesData } from "@/Data/services";

export default function OurServicesPage({ searchParams }) {
  const category = searchParams.category;

  let filteredServices = category
    ? servicesData.filter((s) => s.category === category)
    : servicesData;

  // 🔥 keep your same logic (IMPORTANT)
  if (category && filteredServices.length > 0) {
    while (filteredServices.length < 14) {
      filteredServices = [...filteredServices, ...filteredServices];
    }
  }

  return (
    <>
      <PageHero />
      <ServicesSection services={filteredServices.slice(0, 14)} />
    </>
  );
}