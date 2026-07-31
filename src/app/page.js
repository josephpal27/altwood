import Advantage from "@/components/home/Advantage";
import Compliances from "@/components/home/Compliances";
import HomeBanner from "@/components/home/HomeBanner";
import OurStory from "@/components/home/OurStory";
import BuiltOnTrust from "@/components/home/BuiltOnTrust";
import Collection from "@/components/home/Collection";

export const metadata = {
  title: "Altwood - The Best Plywood Manufacturer in India",
  description: "Altwood's shuttering plywood is top-notch! Strong, durable, and built to last through countless uses. Perfect for anyone who values quality and reliability.",
};

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