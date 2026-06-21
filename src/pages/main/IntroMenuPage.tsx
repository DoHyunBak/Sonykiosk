import { useNavigate } from "react-router";
import {
  Camera,
  User,
  ChevronRight,
  Aperture,
  Award,
  Crosshair,
  Lightbulb,
} from "lucide-react";
import { ScrollToTop } from "../../components/ScrollToTop";
import { TopLogo } from "../../components/TopLogo";
import { MenuCard } from "../../components/MenuCard";
import heroBgImage from "../../assets/images/17783066980361.png";

const row1 = { title: "라인업", icon: Camera, path: "/lineup" };

const row2 = [
  { title: "렌즈호환성", icon: Aperture, path: "/lens" },
  { title: "소니 장점", icon: Award, path: "/why-sony" },
  { title: "초점 기능", icon: Crosshair, path: "/af" },
];

const row3 = { title: "추천받기", icon: Lightbulb, path: "/recommendation" };

export function IntroMenuPage() {
  const navigate = useNavigate();

  return (
    <>
      <ScrollToTop />
      <div
        className="flex flex-col text-white relative overflow-hidden"
        style={{
          width: "100%",
          height: "1920px",
          background: "#1A1A1F",
        }}
      >
        <TopLogo />

        {/* Hero Area Container (Spans from Logo to Buttons) */}
        <div className="relative flex-1 flex flex-col justify-between w-full overflow-hidden">
          {/* Background Image */}
          <div className="absolute top-0 left-0 w-full h-[88%]">
            <img
              src={heroBgImage}
              alt="Sony Alpha Camera"
              className="w-full h-full object-cover"
              style={{ objectPosition: "65% 50%" }}
            />
            {/* Gradient overlays to blend smoothly at top and bottom */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `
                  linear-gradient(to top, #1A1A1F 0%, #1A1A1F 8%, rgba(26,26,31,0.9) 20%, rgba(26,26,31,0.6) 35%, rgba(26,26,31,0.2) 50%, rgba(26,26,31,0) 65%),
                  linear-gradient(to bottom, #1A1A1F 0%, rgba(26,26,31,0.5) 10%, rgba(26,26,31,0) 25%)
                `,
              }}
            />
          </div>

          {/* Header Text Section */}
          <div className="relative z-10 px-[24px] pt-[48px]">
            <h1
              style={{
                fontSize: "56px",
                fontWeight: "700",
                lineHeight: "1.3",
                letterSpacing: "-0.02em",
                color: "#ffffff",
                fontFamily: "var(--font-headline)",
                textShadow: "0 4px 20px rgba(0,0,0,0.5)",
              }}
            >
              어떤 방식으로
              <br />
              소니 알파를 만나볼까요?
            </h1>
          </div>

          {/* One-line Intro */}
          <div className="relative z-10 px-[24px] pb-[40px] flex flex-col items-start">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-[32px] h-[3px] bg-[#E75300]" />
              <span className="text-[#E75300] font-bold tracking-[0.2em] text-[16px] uppercase font-[var(--font-headline)] drop-shadow-md">
                Sony Alpha
              </span>
            </div>
            <p
              style={{
                fontSize: "36px",
                fontWeight: "400",
                color: "rgba(255,255,255,0.85)",
                fontFamily: "var(--font-headline)",
                lineHeight: "1.45",
                letterSpacing: "-0.02em",
                textShadow: "0 4px 20px rgba(0,0,0,0.8)",
              }}
            >모든 순간을 완벽한 작품으로 만드는<br /><strong style={{ fontWeight: "700", color: "#ffffff" }}>소니 알파 미러리스 카메라</strong></p>
          </div>
        </div>

        {/* Menu Items - 3 Row Layout */}
        <div className="relative z-10 flex flex-col px-[24px] pb-[40px] flex-shrink-0" style={{ gap: "24px" }}>
          {/* Row 1: 라인업 (Full Width) */}
          <button
            onClick={() => navigate(row1.path)}
            className="group w-full rounded-[28px] flex items-center justify-between transition-all duration-300 hover:scale-[1.01]"
            style={{
              height: "188px",
              background: "#080511",
              border: "1px solid rgba(255,255,255,0.07)",
              padding: "0 40px",
              flexShrink: 0,
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background =
                "#0d0a1a";
              (e.currentTarget as HTMLButtonElement).style.borderColor =
                "rgba(231,83,0,0.3)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background =
                "#080511";
              (e.currentTarget as HTMLButtonElement).style.borderColor =
                "rgba(255,255,255,0.07)";
            }}
          >
            <div className="flex items-center gap-7">
              <div
                className="rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{
                  width: "72px",
                  height: "72px",
                  background: "rgba(231,83,0,0.15)",
                  border: "1px solid rgba(231,83,0,0.3)",
                }}
              >
                <row1.icon
                  style={{ width: "34px", height: "34px", color: "#E75300" }}
                />
              </div>
              <h2
                style={{
                  fontSize: "44px",
                  fontWeight: "700",
                  lineHeight: "1.3",
                  letterSpacing: "-0.02em",
                  color: "#ffffff",
                  fontFamily: "var(--font-headline)",
                }}
              >
                {row1.title}
              </h2>
            </div>
            <ChevronRight
              style={{ width: "40px", height: "40px", color: "rgba(255,255,255,0.3)" }}
            />
          </button>

          {/* Row 2: 렌즈 · 소니 장점 · 초점 기능 */}
          <div className="flex" style={{ gap: "24px", flexShrink: 0 }}>
            {row2.map((item, index) => (
              <MenuCard
                key={index}
                title={item.title}
                icon={item.icon}
                onClick={() => navigate(item.path)}
              />
            ))}
          </div>

          {/* Row 3: 추천받기 (Full Width - Primary CTA) */}
          <button
            onClick={() => navigate(row3.path)}
            className="group w-full rounded-[32px] flex items-center justify-between transition-all duration-300 hover:scale-[1.01]"
            style={{
              height: "420px",
              background: "linear-gradient(163deg, #E75300 0%, #5B36F4 100%)",
              border: "none",
              padding: "0 56px",
              flexShrink: 0,
            }}
          >
            <div className="flex items-center gap-8">
              <div
                className="rounded-[20px] flex items-center justify-center flex-shrink-0"
                style={{
                  width: "96px",
                  height: "96px",
                  background: "rgba(255,255,255,0.15)",
                  border: "1px solid rgba(255,255,255,0.25)",
                }}
              >
                <row3.icon
                  style={{ width: "46px", height: "46px", color: "#ffffff" }}
                />
              </div>
              <div className="flex flex-col items-start text-left">
                <h2
                  style={{
                    fontSize: "60px",
                    fontWeight: "700",
                    lineHeight: "1.3",
                    letterSpacing: "-0.02em",
                    color: "#ffffff",
                    fontFamily: "var(--font-headline)",
                    marginBottom: "8px",
                  }}
                >
                  {row3.title}
                </h2>
                <p
                  style={{
                    fontSize: "32px",
                    color: "rgba(255,255,255,0.75)",
                    fontFamily: "var(--font-body)",
                    lineHeight: "1.4",
                    fontWeight: "500",
                  }}
                >
                  나에게 딱 맞는 소니를 찾아보세요
                </p>
              </div>
            </div>
            <ChevronRight
              style={{ width: "52px", height: "52px", color: "rgba(255,255,255,0.8)" }}
            />
          </button>
        </div>
      </div>
    </>
  );
}
