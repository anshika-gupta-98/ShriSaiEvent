import Gallery from "@/Components/Gallery/gallery";
import PageHero from "@/Components/Shared/PagesHero";
import { galleryData } from "@/Data/gallery";

export default function GalleryPage() {
  const visibleImages = galleryData.slice(0, 15);

  return (
    <>
      <PageHero />
      <Gallery images={visibleImages} />
    </>
  );
}