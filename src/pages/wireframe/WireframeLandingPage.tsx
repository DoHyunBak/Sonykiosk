import { WfLayout, WfTopBar, WfSection, WfBox, WfButton } from "../../components/wireframe/WireframeKit";

export function WireframeLandingPage() {
  return (
    <WfLayout title="Wireframe - Landing">
      <WfTopBar label="LANDING PAGE" />
      <WfSection label="SPLIT SCREEN VISUAL COMPARISON" height={400} gridCols={2}>
        <WfBox label="SMARTPHONE (BLURRY / LEFT)" h={320} />
        <WfBox label="SONY ALPHA (CLEAR / RIGHT)" h={320} />
      </WfSection>
      <WfSection label="BOTTOM CTA AREA" height={120}>
        <WfButton label="TOUCH TO START (PULSING CTA)" />
      </WfSection>
    </WfLayout>
  );
}