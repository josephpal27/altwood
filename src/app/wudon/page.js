import WudonBanner from "@/components/wudon/WudonBanner";
import WudonHighlights from "@/components/wudon/WudonHighlights";
import WudonProductApplications from "@/components/wudon/WudonProductApplications";
import WudonProductFeatures from "@/components/wudon/WudonProductFeatures";

export default function Wudon() {
  return (
    <>
      <WudonBanner />
      <WudonHighlights />
      <WudonProductFeatures />
      <WudonProductApplications />
    </>
  );
}