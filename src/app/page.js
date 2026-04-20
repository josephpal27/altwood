import Advantage from "@/components/home/Advantage";
import HomeBanner from "@/components/home/HomeBanner";
import OurStory from "@/components/home/OurStory";
import Services from "@/components/home/Services";

export default function Home() {
  return (
    <>
      <HomeBanner />
      <OurStory />
      <Advantage />
      <Services />
    </>
  );
}