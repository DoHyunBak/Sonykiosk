import { WfLayout, WfTopBar, WfSection } from "../../components/wireframe/WireframeKit";

export function WireframeHomePage() {
  return (
    <WfLayout title="Wireframe - Home">
      <WfTopBar />
      <WfSection label="HERO / INTRO" height={320} />
      <WfSection label="MAIN CONTENT BLOCK" height={240} />
      <WfSection label="ACTION BUTTONS" height={80} />
    </WfLayout>
  );
}