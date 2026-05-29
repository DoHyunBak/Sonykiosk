import { useNavigate } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Weight, ChevronRight } from "lucide-react";
import sonyA7C from "../../imports/sony_a7c.png";
import sonyA7C2 from "../../imports/sony_a7c2.png";
import sonyA7CR from "../../imports/sony_a7cr.png";
import sonyA7M4 from "../../imports/sony_a7m4.png";
import sonyA7M5 from "../../imports/sony_a7m5.png";
import sonyA7R5 from "../../imports/sony_a7r5.png";

function getTagStyle(useCase: string) {
  switch (useCase) {
    case "여행":
      return { bg: "rgba(14, 165, 233, 0.12)", border: "rgba(14, 165, 233, 0.25)", color: "#38bdf8" }; // Sky Blue
    case "일상":
      return { bg: "rgba(16, 185, 129, 0.12)", border: "rgba(16, 185, 129, 0.25)", color: "#34d399" }; // Emerald Green
    case "입문":
      return { bg: "rgba(139, 92, 246, 0.12)", border: "rgba(139, 92, 246, 0.25)", color: "#a78bfa" }; // Purple
    case "브이로그":
    case "영상":
      return { bg: "rgba(245, 158, 11, 0.12)", border: "rgba(245, 158, 11, 0.25)", color: "#fbbf24" }; // Orange/Amber
    default:
      return { bg: "rgba(255, 255, 255, 0.06)", border: "rgba(255, 255, 255, 0.1)", color: "rgba(255, 255, 255, 0.6)" };
  }
}

export function LineupPage() {
  const navigate = useNavigate();

  const lineup = [
    {
      id: "a7c",
      name: "α7C",
      identity: "소니 입문, 가볍게 시작",
      weight: "509g",
      useCases: ["여행", "일상", "입문", "브이로그"],
      hasAI: false,
      image: sonyA7C,
      description: "가장 가벼운 풀프레임 입문기",
      location: "A-1구역",
      locationDetail: "메인 입구 왼쪽 첫 번째 체험대 (A-1)",
      mapPosition: { x: 115, y: 120 },
    },
    {
      id: "a7c2",
      name: "α7C II",
      identity: "가볍게 시작하는 풀프레임",
      weight: "514g",
      useCases: ["여행", "일상", "브이로그", "인물"],
      hasAI: true,
      image: sonyA7C2,
      description: "컴팩트한 바디에 강력한 AI AF",
      location: "A-2구역",
      locationDetail: "메인 입구 왼쪽 두 번째 체험대 (A-2)",
      mapPosition: { x: 115, y: 215 },
    },
    {
      id: "a7cr",
      name: "α7CR",
      identity: "작고 강한 고화질 선택",
      weight: "515g",
      useCases: ["인물", "풍경", "고화질", "여행"],
      hasAI: true,
      image: sonyA7CR,
      description: "61MP 고해상도를 컴팩트 바디에",
      location: "B-1구역",
      locationDetail: "매장 중앙 메인 체험존 앞쪽 (B-1)",
      mapPosition: { x: 315, y: 120 },
    },
    {
      id: "a7m4",
      name: "α7 IV",
      identity: "가장 균형 잡힌 올라운드",
      weight: "658g",
      useCases: ["일상", "인물", "사진+영상", "여행"],
      hasAI: false,
      image: sonyA7M4,
      description: "모든 분야에서 뛰어난 성능",
      location: "B-2구역",
      locationDetail: "매장 중앙 메인 체험존 뒤쪽 (B-2)",
      mapPosition: { x: 315, y: 215 },
    },
    {
      id: "a7m5",
      name: "α7 V",
      identity: "최신 AI 프로세서 탑재",
      weight: "659g",
      useCases: ["영상", "인물", "AI 추적", "프로"],
      hasAI: true,
      image: sonyA7M5,
      description: "차세대 AI 성능의 정점",
      location: "C-1구역",
      locationDetail: "우측 프리미엄존 앞쪽 체험대 (C-1)",
      mapPosition: { x: 515, y: 120 },
    },
    {
      id: "a7r5",
      name: "α7R V",
      identity: "최고 성능의 고화질 선택",
      weight: "723g",
      useCases: ["전문가", "고화질", "상업", "풍경"],
      hasAI: true,
      image: sonyA7R5,
      description: "61MP 고해상도 프로페셔널",
      location: "C-2구역",
      locationDetail: "우측 프리미엄존 뒤쪽 체험대 (C-2)",
      mapPosition: { x: 515, y: 215 },
    },
  ];

  return (
    <div
      className="text-white w-full h-full flex flex-col overflow-hidden"
      style={{ position: "relative", background: "#050309" }}
    >

      <div
        className="flex-1 w-full px-[24px] pb-[32px] flex flex-col justify-start items-center relative z-10"
        style={{ padding: "56px 40px 32px" }}
      >
        {/* Page Title / Question */}
        <h2
          style={{
            fontSize: "36px",
            fontWeight: "700",
            color: "#ffffff",
            fontFamily: "var(--font-headline)",
            letterSpacing: "-0.02em",
            marginBottom: "24px",
            textAlign: "center",
            textShadow: "0 2px 10px rgba(0,0,0,0.85)",
          }}
        >
          어떤 카메라를 가장 먼저 탐색해볼까요?
        </h2>

        {/* 2×3 Grid */}
        <div className="grid grid-cols-2 gap-x-[24px] gap-y-[20px] w-[1032px] place-items-center">
          {lineup.map((model) => (
            <div
              key={model.id}
              onClick={() => navigate(`/product/${model.id}`)}
              className="flex flex-col rounded-[16px] overflow-hidden cursor-pointer hover:opacity-95 transition-opacity"
              style={{
                background: "#080511",
                border: "0.667px solid rgba(255,255,255,0.5)",
                width: "504px",
                height: "450px"
              }}
            >
              {/* Product Image */}
              <div
                className="relative overflow-hidden flex items-center justify-center flex-shrink-0"
                style={{
                  background: "linear-gradient(180deg, #2c2c2c 50%, rgba(25,24,24,0.6) 100%)",
                  height: "270px",
                  width: "100%"
                }}
              >
                <ImageWithFallback
                  src={model.image}
                  alt={model.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-[rgba(97,119,180,0.1)] pointer-events-none" />
                {/* AI Badge */}
                {model.hasAI && (
                  <div
                    className="absolute top-4 right-4 px-4 py-2 rounded-xl"
                    style={{
                      background: "linear-gradient(135deg, #E75300 0%, #5B36F4 100%)",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "14px",
                        fontWeight: "700",
                        color: "#ffffff",
                        letterSpacing: "0.5px",
                      }}
                    >
                      AI AF
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div
                className="relative flex flex-col flex-shrink-0"
                style={{ padding: "14px 16px", height: "180px", width: "100%" }}
              >
                {/* Name & Weight & Arrow */}
                <div className="flex items-center justify-between h-[43px]">
                  <div className="flex items-center gap-[16px]">
                     <h2
                      style={{
                        fontSize: "36px",
                        fontWeight: "800",
                        letterSpacing: "-0.72px",
                        color: "#ffffff",
                        fontFamily: "var(--font-headline)",
                        lineHeight: "43.2px",
                        margin: 0,
                      }}
                    >
                      {model.name}
                    </h2>
                    <div
                      className="inline-flex items-center justify-center gap-[4px]"
                      style={{
                        border: "0.667px solid rgba(255,255,255,0.2)",
                        borderRadius: "20px",
                        padding: "0 12px",
                        height: "38px"
                      }}
                    >
                      <Weight
                        style={{
                          width: "14px",
                          height: "14px",
                          color: "rgba(255,255,255,0.6)",
                        }}
                      />
                      <span
                        style={{
                          fontSize: "24px",
                          color: "rgba(255,255,255,0.7)",
                          fontWeight: "600",
                          fontFamily: "var(--font-body)",
                          lineHeight: "24px",
                        }}
                      >
                        {model.weight}
                      </span>
                    </div>
                  </div>
                  <ChevronRight
                    style={{
                      width: "36px",
                      height: "36px",
                      color: "white",
                    }}
                    strokeWidth={1.5}
                  />
                </div>

                {/* Subtitle */}
                <p
                  style={{
                    fontSize: "26px",
                    color: "#e75300",
                    fontWeight: "600",
                    lineHeight: "26px",
                    marginTop: "13px",
                    fontFamily: "var(--font-body)",
                    marginBottom: 0,
                  }}
                >
                  {model.identity}
                </p>

                {/* Use Cases */}
                <div className="flex items-center gap-[12px] mt-[13px]">
                  {model.useCases.map((useCase, idx) => {
                    const tagStyle = getTagStyle(useCase);
                    return (
                      <div
                        key={idx}
                        className="flex items-center justify-center"
                        style={{
                          height: "36px",
                          background: tagStyle.bg,
                          border: `1px solid ${tagStyle.border}`,
                          borderRadius: "34px",
                          padding: "0 20px",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "22px",
                            fontWeight: "600",
                            color: tagStyle.color,
                            fontFamily: "var(--font-body)",
                            lineHeight: "33px",
                          }}
                        >
                          {useCase}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}