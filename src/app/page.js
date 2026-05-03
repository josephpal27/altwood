import Advantage from "@/components/home/Advantage";
import Compliances from "@/components/home/Compliances";
import HomeBanner from "@/components/home/HomeBanner";
import OurStory from "@/components/home/OurStory";
import BuiltOnTrust from "@/components/home/BuiltOnTrust";
import Collection from "@/components/home/Collection";

export default function Home() {
  return (
    <>
      <HomeBanner />
      <OurStory />
      <Advantage />
      <Collection />
      <BuiltOnTrust />
      <Compliances />
    </>
  );
}