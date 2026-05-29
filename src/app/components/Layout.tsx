import { Outlet, useNavigate, useLocation } from "react-router";
import {
  Award,
  LayoutGrid,
  Crosshair,
  Aperture,
  Lightbulb,
  ChevronLeft,
} from "lucide-react";
import { ScrollToTop } from "./ScrollToTop";
import { TopLogo } from "./TopLogo";

const navItems = [
  { label: "라인업", path: "/lineup", icon: LayoutGrid },
  { label: "소니 장점", path: "/why-sony", icon: Award },
  { label: "렌즈", path: "/lens", icon: Aperture },
  { label: "초점 기능", path: "/af", icon: Crosshair },
  { label: "추천받기", path: "/recommendation", icon: Lightbulb },
];

export function Layout() {
  const navigate = useNavigate();
  const location = useLocation();
  const canGoBack = window.history.length > 1;

  return (
    <>
      <ScrollToTop />
      <div
        className="flex flex-col h-full relative"
        style={{ background: "#1A1A1F", width: "1080px", height: "1920px" }}
      >
        <TopLogo />

        {/* ── Main Content ── */}
        <main
          className="flex-1 overflow-hidden relative"
          style={{ background: "#1A1A1F", paddingTop: "90px" }}
        >
          <Outlet />
        </main>

        {/* ── Bottom Navigation ── */}
        <nav
          className="flex flex-shrink-0"
          style={{
            height: "140px",
            background: "#03010F",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            width: "1080px",
          }}
        >
          {/* Nav Items */}
          <div className="flex flex-1 items-stretch">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;

              return (
                <button
                  key={item.path}
                  onClick={() => navigate(item.path)}
                  className="flex flex-col items-center justify-center gap-2 flex-1 transition-all duration-200 relative"
                  style={{
                    borderTop: isActive
                      ? "4px solid #E75300"
                      : "4px solid transparent",
                    background: isActive
                      ? "rgba(231,83,0,0.12)"
                      : "transparent",
                    color: isActive ? "#ffffff" : "rgba(255,255,255,0.45)",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      (e.currentTarget as HTMLButtonElement).style.background =
                        "rgba(255,255,255,0.04)";
                      (e.currentTarget as HTMLButtonElement).style.color =
                        "rgba(255,255,255,0.75)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      (e.currentTarget as HTMLButtonElement).style.background =
                        "transparent";
                      (e.currentTarget as HTMLButtonElement).style.color =
                        "rgba(255,255,255,0.45)";
                    }
                  }}
                >
                  <Icon
                    style={{
                      width: "32px",
                      height: "32px",
                      color: isActive ? "#E75300" : "inherit",
                      flexShrink: 0,
                    }}
                  />
                  <span
                    style={{
                      fontSize: "14px",
                      fontWeight: isActive ? "600" : "400",
                      lineHeight: "1.4",
                      fontFamily: "var(--font-body)",
                      textAlign: "center",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Back Button */}
          <div
            className="flex items-stretch justify-center"
            style={{
              borderLeft: "1px solid rgba(255,255,255,0.08)",
              width: "160px",
              flexShrink: 0,
            }}
          >
            <button
              onClick={() => canGoBack && navigate(-1)}
              disabled={!canGoBack}
              className="flex flex-col items-center justify-center gap-2 w-full h-full transition-all duration-200"
              style={{
                color: canGoBack
                  ? "rgba(255,255,255,0.4)"
                  : "rgba(255,255,255,0.15)",
                cursor: canGoBack ? "pointer" : "not-allowed",
                background: "transparent",
              }}
              onMouseEnter={(e) => {
                if (canGoBack)
                  (e.currentTarget as HTMLButtonElement).style.background =
                    "rgba(255,255,255,0.05)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background =
                  "transparent";
              }}
            >
              <ChevronLeft
                style={{
                  width: "32px",
                  height: "32px",
                  flexShrink: 0,
                  color: canGoBack
                    ? "rgba(255,255,255,0.4)"
                    : "rgba(255,255,255,0.15)",
                }}
              />
              <span
                style={{
                  fontSize: "14px",
                  fontFamily: "var(--font-body)",
                  fontWeight: "400",
                }}
              >
                뒤로
              </span>
            </button>
          </div>
        </nav>
      </div>
    </>
  );
}
