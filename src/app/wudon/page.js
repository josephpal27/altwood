import WudonBanner from "@/components/wudon/WudonBanner";
import WudonHighlights from "@/components/wudon/WudonHighlights";
import WudonProductApplications from "@/components/wudon/WudonProductApplications";
import WudonProductFeatures from "@/components/wudon/WudonProductFeatures";
import Compliances from "@/components/home/Compliances";

import { mdfFeaturesData } from "@/data/mdfFeaturesData";
import { hdhmrFeaturesData } from "@/data/hdhmrFeaturesData";
import { mdfApplicationsData } from "@/data/mdfApplicationsData";
import { hdhmrApplicationsData } from "@/data/hdhmrApplicationsData";

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