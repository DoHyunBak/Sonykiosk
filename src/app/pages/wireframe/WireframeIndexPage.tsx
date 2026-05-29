import { useNavigate } from "react-router";
import { WfLayout, WfTopBar, WfSection, WfButton } from "../../components/wireframe/WireframeKit";

export function WireframeIndexPage() {
  const navigate = useNavigate();

  return (
    <WfLayout title="Wireframe - Index">
      <WfTopBar label="WIREFRAME MENU" />
      <WfSection label="NAVIGATION" height={360}>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", alignItems: "center" }}>
          <WfButton label="1. HOME WIREFRAME" onClick={() => navigate("/wireframe/home")} />
          <WfButton label="2. LANDING WIREFRAME" onClick={() => navigate("/wireframe/landing")} />
          <WfButton label="3. MAIN WIREFRAME" onClick={() => navigate("/wireframe/main")} />
          <WfButton label="4. LINEUP WIREFRAME" onClick={() => navigate("/wireframe/lineup")} />
          <WfButton label="5. PRODUCT WIREFRAME" onClick={() => navigate("/wireframe/product/1")} />
        </div>
      </WfSection>
    </WfLayout>
  );
}