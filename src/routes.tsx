import { createBrowserRouter, Navigate } from "react-router";
import { Layout } from "./components/Layout";
import { IntroLandingPage } from "./pages/landing/IntroLandingPage";
import { IntroMenuPage } from "./pages/main/IntroMenuPage";
import { LandingPage } from "./pages/sub/depth1/LandingPage";
import { WhySonyPage } from "./pages/sub/depth1/WhySonyPage";
import { LineupPage } from "./pages/sub/depth1/LineupPage";
import { ProductDetailPage } from "./pages/sub/depth2/ProductDetailPage";
import { AFExperiencePage } from "./pages/sub/depth1/AFExperiencePage";
import { LensPage } from "./pages/sub/depth1/LensPage";
import { RecommendationQuizPage } from "./pages/sub/depth1/RecommendationQuizPage";
import { RecommendationResultPage } from "./pages/sub/depth2/RecommendationResultPage";

import { WireframeIndexPage } from "./pages/wireframe/WireframeIndexPage";
import { WireframeHomePage } from "./pages/wireframe/WireframeHomePage";
import { WireframeMainPage } from "./pages/wireframe/WireframeMainPage";
import { WireframeLineupPage } from "./pages/wireframe/WireframeLineupPage";
import { WireframeProductPage } from "./pages/wireframe/WireframeProductPage";
import { WireframeLandingPage } from "./pages/wireframe/WireframeLandingPage";

function RedirectToMain() {
  return <Navigate to="/main" replace />;
}

function RedirectToLanding() {
  return <Navigate to="/landing" replace />;
}

export const router = createBrowserRouter([
  {
    path: "/",
    Component: IntroLandingPage,
  },
  {
    path: "/main",
    Component: IntroMenuPage,
  },
  {
    path: "/intro-menu",
    Component: RedirectToMain,
  },
  {
    path: "/home",
    Component: RedirectToLanding,
  },
  {
    Component: Layout,
    children: [
      { path: "landing", Component: LandingPage },
      { path: "lineup", Component: LineupPage },
      { path: "why-sony", Component: WhySonyPage },
      { path: "product/:modelId", Component: ProductDetailPage },
      { path: "af", Component: AFExperiencePage },
      { path: "lens", Component: LensPage },
      { path: "recommendation", Component: RecommendationQuizPage },
      { path: "result", Component: RecommendationResultPage },
    ],
  },
  { path: "/wireframe", Component: WireframeIndexPage },
  { path: "/wireframe/home", Component: WireframeHomePage },
  { path: "/wireframe/landing", Component: WireframeLandingPage },
  { path: "/wireframe/main", Component: WireframeMainPage },
  { path: "/wireframe/lineup", Component: WireframeLineupPage },
  { path: "/wireframe/product/:modelId", Component: WireframeProductPage },
]);
