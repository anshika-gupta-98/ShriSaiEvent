import Contact from "@/Components/Contact/Contact";
import PageHero from "@/Components/Shared/PagesHero";
import { data } from "@/Data/global-content";

export default function ContactPage() {
  return <>
  <PageHero/>
  <Contact data={data} />;
  </>
}