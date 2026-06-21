import { WfLayout, WfTopBar, WfSection, WfCard } from "../../components/wireframe/WireframeKit";

export function WireframeLineupPage() {
  return (
    <WfLayout title="Wireframe - Lineup">
      <WfTopBar />
      <WfSection label="CATEGORY / FILTER" height={60} />
      <WfSection label="CARD GRID" gridCols={2}>
        {Array.from({ length: 6 }).map((_, i) => (
          <WfCard key={i} label="ITEM CARD" count={i + 1} />
        ))}
      </WfSection>
      <WfSection label="BOTTOM ACTION" height={80} />
    </WfLayout>
  );
}