import WudonBanner from "@/components/wudon/WudonBanner";
import WudonHighlights from "@/components/wudon/WudonHighlights";
import WudonProductApplications from "@/components/wudon/WudonProductApplications";
import WudonProductFeatures from "@/components/wudon/WudonProductFeatures";
import Compliances from "@/components/home/Compliances";

import { mdfFeaturesData } from "@/data/mdfFeaturesData";
import { hdhmrFeaturesData } from "@/data/hdhmrFeaturesData";
import { mdfApplicationsData } from "@/data/mdfApplicationsData";
import { hdhmrApplicationsData } from "@/data/hdhmrApplicationsData";

export const metadata = {
  title: "Wudon - A Vision to Deliver World-Class Engineered Wood Solutions for Modern India",
  description: "Wudon embodies a vision to deliver world-class engineered wood solutions for modern India. From our early beginnings, we rapidly built a strong presence across multiple states, driven by quality, technology, and consistent performance.",
};

export default function Wudon() {
  return (
    <>
      <WudonBanner />
      <WudonHighlights />
      <WudonProductFeatures data={mdfFeaturesData} />
      <WudonProductApplications data={mdfApplicationsData} />
      <WudonProductFeatures data={hdhmrFeaturesData} reverse={true} />
      <WudonProductApplications data={hdhmrApplicationsData} />
      <Compliances />
    </>
  );
}