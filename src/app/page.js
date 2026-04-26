import Advantage from "@/components/home/Advantage";
import Compliances from "@/components/home/Compliances";
import HomeBanner from "@/components/home/HomeBanner";
import OurStory from "@/components/home/OurStory";
import ProductShowcase from "@/components/home/ProductShowcase";
import TenSteps from "@/components/home/TenSteps";

export default function Home() {
  return (
    <>
      <HomeBanner />
      <OurStory />
      <Advantage />
      <ProductShowcase />
      <TenSteps />
      <Compliances />
    </>
  );
}