import About from "@/Components/About/About";
import PageHero from "@/Components/Shared/PagesHero";
import { aboutData } from "@/Data/about";

export default function AboutPage() {
  return (
    <>
      <PageHero />
      <div className=" overflow-hidden">
        <div className="relative z-10 text-black mt-8">
          {aboutData.map((section) => (
            <About key={section.id} data={section} />
          ))}
        </div>

      </div>
    </>
  );
}