import Advantage from "@/components/home/Advantage";
import HomeBanner from "@/components/home/HomeBanner";
import OurStory from "@/components/home/OurStory";
import ProductShowcase from "@/components/home/ProductShowcase";

export default function Home() {
  return (
    <>
      <HomeBanner />
      <OurStory />
      <Advantage />
      <ProductShowcase />
    </>
  );
}