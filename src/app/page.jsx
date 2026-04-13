import HomeIntro from "@/Components/Home/HomeIntro";
import HomeServices from "@/Components/Home/Services";
import Stats from "@/Components/Home/Stats";
import Testimonials from "@/Components/Home/Testimonials";
import HomeHero from "@/Components/Shared/HomeHero";
import { heroData } from "@/Data/hero";
import { homeData } from "@/Data/home";
import { servicesData } from "@/Data/services";


export default function Home() {
  const limitedServices = servicesData.slice(0, 6);

  return (
    <main >


    <HomeHero data={heroData} />;
    <HomeIntro data={homeData.intro} />
      <HomeServices services={limitedServices} />
      <div className="mt-6">
        <Stats data={homeData.stats} />
      </div>

      <div className="mt-24 mb-10">
        <Testimonials data={homeData.testimonials} />
      </div>

    </main>
  );
}