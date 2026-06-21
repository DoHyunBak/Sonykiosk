import { useParams } from "react-router";
import { WfLayout, WfTopBar, WfSection, WfBox, WfButton } from "../../components/wireframe/WireframeKit";

export function WireframeProductPage() {
  const { modelId } = useParams();
  
  return (
    <WfLayout title="Wireframe - Product">
      <WfTopBar label={`PRODUCT TOP BAR [${modelId || "ID"}]`} />
      <WfSection label="PRODUCT TITLE" height={60} />
      <div style={{ display: "flex", justifyContent: "center", margin: "16px" }}>
        <WfBox label="PRODUCT IMAGE" w={320} h={240} />
      </div>
      <WfSection label="PRODUCT INFO" height={140} />
      <WfSection label="DESCRIPTION" height={120} />
      <WfSection label="CATEGORY / TAGS" height={48} />
      <div style={{ display: "flex", justifyContent: "center", margin: "16px" }}>
        <WfButton label="MAIN CTA" />
      </div>
      <WfSection label="RELATED / NAV" height={80} />
    </WfLayout>
  );
}