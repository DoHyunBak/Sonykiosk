import { WfLayout, WfTopBar, WfSection } from "../../components/wireframe/WireframeKit";

export function WireframeMainPage() {
  return (
    <WfLayout title="Wireframe - Main">
      <WfTopBar />
      <WfSection label="MAIN VISUAL" height={280} />
      <WfSection label="PRIMARY ACTIONS" height={120} />
      <WfSection label="CONTENT BLOCKS" height={200} />
    </WfLayout>
  );
}