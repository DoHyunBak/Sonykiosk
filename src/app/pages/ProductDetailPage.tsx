import { useParams, useNavigate } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Users, Weight, Zap, MapPin, X } from "lucide-react";
import { useState } from "react";

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

export function ProductDetailPage() {
  const { modelId } = useParams();
  const navigate = useNavigate();
  const [showLocationModal, setShowLocationModal] = useState(false);

  const productData: Record<string, any> = {
    a7c: {
      name: "α7C",
      identity: "소니 입문, 가볍게 시작",
      hasAI: false,
      image:
        "https://images.unsplash.com/photo-1722842179085-5423886195ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      lifestyleImage:
        "https://images.unsplash.com/photo-1733515671287-68f8118c4fed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      useCases: ["여행", "일상", "입문", "브이로그"],
      location: "A-1구역",
      locationDetail: "메인 입구 왼쪽 첫 번째 체험대 (A-1)",
      mapPosition: { x: 115, y: 120 },
      infoCards: [
        {
          title: "이런 분께 추천해요",
          content:
            "처음으로 풀프레임 카메라를 경험하고 싶은 분들에게 이상적입니다. 가볍고 사용하기 쉬우면서도 본격적인 화질을 제공합니다.",
        },
        {
          title: "왜 입문용일까요?",
          content:
            "509g의 최경량 풀프레임 바디로, 부담 없이 시작할 수 있습니다. 직관적인 인터페이스로 초보자도 쉽게 배울 수 있습니다.",
        },
        {
          title: "이럴 때 특히 좋아요",
          content:
            "여행이나 일상 순간을 기록하기에 완벽합니다. 오토 모드가 뛰어나 복잡한 설정 없이도 좋은 결과물을 얻을 수 있습니다.",
        },
      ],
    },
    a7c2: {
      name: "α7C II",
      identity: "가볍게 시작하는 풀프레임",
      hasAI: true,
      image:
        "https://images.unsplash.com/photo-1758613655205-d9bcdba2404d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      lifestyleImage:
        "https://images.unsplash.com/photo-1733515671287-68f8118c4fed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      useCases: ["여행", "일상", "브이로그", "인물"],
      location: "A-2구역",
      locationDetail: "메인 입구 왼쪽 두 번째 체험대 (A-2)",
      mapPosition: { x: 115, y: 215 },
      infoCards: [
        {
          title: "이런 분께 추천해요",
          content:
            "카메라를 처음 시작하거나, 가볍게 들고 다니면서 좋은 화질을 원하는 분들에게 완벽합니다. 여행, 일상 기록, 브이로그 촬영에 최적화되어 있습니다.",
        },
        {
          title: "왜 가벼울까요?",
          content:
            "514g의 초경량 바디에 AI 프로세서를 탑재했습니다. 하루 종일 목에 걸고 다녀도 부담이 없으며, 작은 가방에도 쉽게 들어갑니다.",
        },
        {
          title: "이럴 때 특히 좋아요",
          content:
            "AI 오토포커스가 사람과 동물의 눈을 자동으로 추적합니다. 움직이는 피사체도 놓치지 않아 일상의 소중한 순간을 실패 없이 담을 수 있습니다.",
        },
      ],
    },
    a7cr: {
      name: "α7CR",
      identity: "작고 강한 고화질 선택",
      hasAI: true,
      image:
        "https://images.unsplash.com/photo-1758613655205-d9bcdba2404d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      lifestyleImage:
        "https://images.unsplash.com/photo-1728413704912-55beeee843ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      useCases: ["인물", "풍경", "고화질", "여행"],
      location: "B-1구역",
      locationDetail: "매장 중앙 메인 체험존 앞쪽 (B-1)",
      mapPosition: { x: 315, y: 120 },
      infoCards: [
        {
          title: "이런 분께 추천해요",
          content:
            "고해상도 이미지가 필요하지만 무거운 카메라는 부담스러운 분들에게 완벽합니다. 세밀한 디테일이 중요한 인물 및 풍경 사진가에게 이상적입니다.",
        },
        {
          title: "왜 특별할까요?",
          content:
            "61MP 고해상도 센서를 515g 초경량 바디에 담았습니다. α7C II와 같은 크기에 더욱 강력한 화질을 제공합니다.",
        },
        {
          title: "이럴 때 특히 좋아요",
          content:
            "인물의 미세한 표정, 풍경의 디테일까지 놓치지 않습니다. 크롭해도 충분한 화질을 유지해 다양한 용도로 활용 가능합니다.",
        },
      ],
    },
    a7m4: {
      name: "α7 IV",
      identity: "가장 균형 잡힌 올라운드",
      hasAI: false,
      image:
        "https://images.unsplash.com/photo-1761896895290-c2a2b5f4c862?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      lifestyleImage:
        "https://images.unsplash.com/photo-1773397298290-05856f1dbfd2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      useCases: ["일상", "인물", "사진+영상", "여행"],
      location: "B-2구역",
      locationDetail: "매장 중앙 메인 체험존 뒤쪽 (B-2)",
      mapPosition: { x: 315, y: 215 },
      infoCards: [
        {
          title: "이런 분께 추천해요",
          content:
            "사진과 영상을 모두 중요하게 생각하는 분들에게 이상적입니다. 취미 사진가부터 준전문가까지 폭넓게 사용할 수 있습니다.",
        },
        {
          title: "왜 균형잡혔을까요?",
          content:
            "33MP 해상도, 4K 60p 영상, 뛰어난 배터리 수명까지. 어떤 상황에서도 안정적인 성능을 발휘합니다.",
        },
        {
          title: "이럴 때 특히 좋아요",
          content:
            "인물 촬영부터 풍경, 영상까지 모든 분야에서 뛰어납니다. 특히 사진과 영상을 번갈아 촬영하는 크리에이터에게 최적입니다.",
        },
      ],
    },
    a7m5: {
      name: "α7 V",
      identity: "최신 AI 프로세서 탑재",
      hasAI: true,
      image:
        "https://images.unsplash.com/photo-1761896895290-c2a2b5f4c862?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      lifestyleImage:
        "https://images.unsplash.com/photo-1773397298290-05856f1dbfd2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      useCases: ["영상", "인물", "AI 추적", "프로"],
      location: "C-1구역",
      locationDetail: "우측 프리미엄존 앞쪽 체험대 (C-1)",
      mapPosition: { x: 515, y: 120 },
      infoCards: [
        {
          title: "이런 분께 추천해요",
          content:
            "최신 AI 기술과 뛰어난 영상 성능을 원하는 크리에이터에게 완벽합니다. 사진과 영상 모두 프로페셔널한 결과물이 필요한 분들에게 이상적입니다.",
        },
        {
          title: "왜 최신일까요?",
          content:
            "차세대 AI 프로세서로 더욱 정확한 피사체 인식과 추적이 가능합니다. 8K 영상 촬영과 향상된 손떨림 보정이 특징입니다.",
        },
        {
          title: "이럴 때 특히 좋아요",
          content:
            "빠르게 움직이는 피사체, 복잡한 구도에서도 AI가 자동으로 최적의 설정을 제공합니다. 영상 제작자에게 최고의 선택입니다.",
        },
      ],
    },
    a7r5: {
      name: "α7R V",
      identity: "최고 성능의 고화질 선택",
      hasAI: true,
      image:
        "https://images.unsplash.com/photo-1758613655205-d9bcdba2404d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      lifestyleImage:
        "https://images.unsplash.com/photo-1728413704912-55beeee843ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      useCases: ["전문가", "고화질", "상업", "풍경"],
      location: "C-2구역",
      locationDetail: "우측 프리미엄존 뒤쪽 체험대 (C-2)",
      mapPosition: { x: 515, y: 215 },
      infoCards: [
        {
          title: "이런 분께 추천해요",
          content:
            "전문 사진가나 상업 촬영을 하는 분들에게 최적입니다. 최고 수준의 화질과 디테일이 필요한 모든 작업에 완벽합니다.",
        },
        {
          title: "왜 프로페셔널일까요?",
          content:
            "61MP 고해상도 센서와 AI 기반 오토포커스로 어떤 상황에서도 완벽한 결과물을 보장합니다. 8단 손떨림 보정이 추가되었습니다.",
        },
        {
          title: "이럴 때 특히 좋아요",
          content:
            "풍경, 인물, 상품 촬영 등 모든 전문 분야에서 최고의 성능을 발휘합니다. 인쇄나 대형 출력에도 완벽한 화질을 제공합니다.",
        },
      ],
    },
  };

  const product = productData[modelId || "a7c2"];

  if (!product) {
    return (
      <div
        className="flex items-center justify-center text-white"
        style={{ height: "100%", background: "#1A1A1F" }}
      >
        <p style={{ fontSize: "20px", color: "rgba(255,255,255,0.5)" }}>
          제품을 찾을 수 없습니다
        </p>
      </div>
    );
  }

  const infoIcons = [Users, Weight, Zap];

  return (
    <div
      className="text-white overflow-y-auto"
      style={{ height: "100%", background: "#050309", position: "relative" }}
    >
      {/* 풀스크린 라이프스타일 배경 이미지 */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <ImageWithFallback
          src={product.lifestyleImage}
          alt="Lifestyle Background"
          className="w-full h-full object-cover"
          style={{ opacity: 0.35 }}
        />
        {/* 짙은 그라데이션 오버레이 */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(5,3,9,0.9) 0%, rgba(5,3,9,0.6) 35%, rgba(5,3,9,0.85) 100%)",
          }}
        />
      </div>

      <div className="flex flex-col relative z-10 w-full" style={{ minHeight: "100%" }}>
        {/* ── Hero Section (Transparent overlay) ── */}
        <div
          className="relative flex-shrink-0 flex items-end"
          style={{ padding: "56px 40px 24px" }}
        >
          <div className="flex items-end gap-10 w-full">
            {/* Product image */}
            <div
              className="rounded-3xl flex items-center justify-center flex-shrink-0"
              style={{
                width: "240px",
                height: "240px",
                background: "rgba(255,255,255,0.92)",
                padding: "20px",
                boxShadow: "0 24px 60px rgba(0,0,0,0.5)",
              }}
            >
              <ImageWithFallback
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Text info */}
            <div style={{ paddingBottom: "4px", flex: 1 }}>
              <div className="flex items-center gap-4 mb-3">
                <h1
                  style={{
                    fontSize: "72px",
                    fontWeight: "700",
                    letterSpacing: "-0.02em",
                    color: "#ffffff",
                    fontFamily: "var(--font-headline)",
                    lineHeight: "1.0",
                    margin: 0,
                  }}
                >
                  {product.name}
                </h1>
                {product.hasAI && (
                  <span
                    className="rounded-xl flex items-center justify-center"
                    style={{
                      background:
                        "linear-gradient(135deg, #E75300 0%, #5B36F4 100%)",
                      color: "#ffffff",
                      fontSize: "20px",
                      fontWeight: "700",
                      padding: "8px 16px",
                      letterSpacing: "0.5px",
                      flexShrink: 0,
                    }}
                  >
                    AI AF
                  </span>
                )}
              </div>
              <p
                style={{
                  fontSize: "28px",
                  color: "#E75300",
                  fontWeight: "600",
                  marginBottom: "20px",
                  fontFamily: "var(--font-body)",
                  lineHeight: "1.4",
                }}
              >
                {product.identity}
              </p>
              <div className="flex flex-wrap gap-3">
                {product.useCases.map((useCase: string, idx: number) => {
                  const tagStyle = getTagStyle(useCase);
                  return (
                    <span
                      key={idx}
                      className="rounded-full flex items-center justify-center"
                      style={{
                        background: tagStyle.bg,
                        border: `1px solid ${tagStyle.border}`,
                        color: tagStyle.color,
                        fontSize: "20px",
                        fontWeight: "500",
                        padding: "0 20px",
                        height: "40px",
                        fontFamily: "var(--font-body)",
                        backdropFilter: "blur(8px)",
                      }}
                    >
                      {useCase}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* ── Info Cards + Actions ── */}
        <div
          className="flex-1 flex flex-col"
          style={{ padding: "24px 40px 40px" }}
        >
          {/* Info Cards */}
          <div className="flex flex-col gap-[16px] mb-8">
            {product.infoCards.map((card: any, idx: number) => {
              const Icon = infoIcons[idx];
              return (
                <div
                  key={idx}
                  className="rounded-3xl flex items-center gap-[28px]"
                  style={{
                    background: "#080511",
                    border: "1px solid rgba(255,255,255,0.12)",
                    padding: "28px 36px",
                  }}
                >
                  <div
                    className="rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{
                      width: "64px",
                      height: "64px",
                      background: "rgba(231,83,0,0.12)",
                      border: "1px solid rgba(231,83,0,0.2)",
                    }}
                  >
                    <Icon
                      style={{
                        width: "30px",
                        height: "30px",
                        color: "#E75300",
                      }}
                    />
                  </div>
                  <div className="flex-1">
                    <h3
                      style={{
                        fontSize: "28px",
                        fontWeight: "700",
                        color: "#ffffff",
                        fontFamily: "var(--font-headline)",
                        lineHeight: "1.3",
                        marginBottom: "10px",
                      }}
                    >
                      {card.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "22px",
                        color: "rgba(255,255,255,0.6)",
                        lineHeight: "1.6",
                        fontFamily: "var(--font-body)",
                      }}
                    >
                      {card.content}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-[24px]">
            <button
              onClick={() => navigate("/lineup")}
              className="flex items-center justify-center gap-[16px] rounded-[32px] transition-all hover:bg-white/10 flex-1"
              style={{
                height: "104px",
                fontSize: "30px",
                fontWeight: "600",
                border: "2px solid rgba(255,255,255,0.2)",
                color: "#ffffff",
                padding: "0 40px",
                fontFamily: "var(--font-body)",
                background: "transparent",
              }}
            >
              다른 모델 보기
            </button>
            <button
              onClick={() => setShowLocationModal(true)}
              className="flex items-center justify-center gap-[16px] rounded-[32px] transition-all hover:opacity-90 flex-1"
              style={{
                height: "104px",
                fontSize: "32px",
                fontWeight: "700",
                background: "#E75300",
                color: "#ffffff",
                padding: "0 40px",
                fontFamily: "var(--font-headline)",
                border: "none",
              }}
            >
              <MapPin style={{ width: "36px", height: "36px" }} />
              체험해보기
            </button>
          </div>
        </div>
      </div>

      {/* ── Location Modal ── */}
      {showLocationModal && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50"
          style={{ background: "rgba(0,0,0,0.85)" }}
          onClick={() => setShowLocationModal(false)}
        >
          <div
            className="rounded-3xl relative"
            style={{
              background: "#080511",
              border: "1px solid rgba(255,255,255,0.12)",
              maxWidth: "680px",
              width: "calc(100% - 64px)",
              padding: "48px",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setShowLocationModal(false)}
              className="absolute top-5 right-5 flex items-center justify-center rounded-full"
              style={{
                width: "40px",
                height: "40px",
                background: "rgba(255,255,255,0.08)",
                color: "rgba(255,255,255,0.6)",
              }}
            >
              <X style={{ width: "18px", height: "18px" }} />
            </button>

            {/* Header */}
            <div className="flex items-center gap-5 mb-8">
              <div
                className="flex items-center justify-center rounded-2xl flex-shrink-0"
                style={{
                  width: "64px",
                  height: "64px",
                  background: "#E75300",
                }}
              >
                <MapPin
                  style={{ width: "28px", height: "28px", color: "#ffffff" }}
                />
              </div>
              <div>
                <h2
                  style={{
                    fontSize: "32px",
                    fontWeight: "700",
                    letterSpacing: "-0.02em",
                    color: "#ffffff",
                    fontFamily: "var(--font-headline)",
                    lineHeight: "1.2",
                  }}
                >
                  {product.name} 체험 위치
                </h2>
                <p
                  style={{
                    fontSize: "18px",
                    color: "#E75300",
                    fontWeight: "600",
                  }}
                >
                  팝업스토어 내 체험존 안내
                </p>
              </div>
            </div>

            {/* Location Info */}
            <div
              className="rounded-2xl mb-6"
              style={{
                background: "rgba(231,83,0,0.08)",
                border: "1px solid rgba(231,83,0,0.2)",
                padding: "24px",
              }}
            >
              <div className="flex items-center gap-3 mb-3">
                <span style={{ fontSize: "20px" }}>📍</span>
                <h3
                  style={{
                    fontSize: "28px",
                    fontWeight: "700",
                    color: "#ffffff",
                    fontFamily: "var(--font-headline)",
                  }}
                >
                  {product.location}
                </h3>
              </div>
              <p
                style={{
                  fontSize: "18px",
                  color: "rgba(255,255,255,0.7)",
                  lineHeight: "1.6",
                  marginBottom: "20px",
                }}
              >
                {product.locationDetail}
              </p>

              {/* Store Map */}
              <div
                className="rounded-xl"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  padding: "16px",
                }}
              >
                <p
                  className="text-center mb-3"
                  style={{
                    fontSize: "12px",
                    color: "rgba(255,255,255,0.35)",
                  }}
                >
                  팝업스토어 매장 안내도
                </p>
                <svg viewBox="0 0 600 280" className="w-full h-auto">
                  <rect
                    x="0"
                    y="0"
                    width="600"
                    height="280"
                    fill="#0D0A1A"
                    rx="8"
                  />
                  <rect x="250" y="0" width="100" height="4" fill="#E75300" />
                  <text
                    x="300"
                    y="24"
                    textAnchor="middle"
                    fill="#E75300"
                    fontSize="14"
                    fontWeight="bold"
                  >
                    입구
                  </text>
                  {[
                    { x: 30, labels: ["A-1", "A-2"] },
                    { x: 230, labels: ["B-1", "B-2"] },
                    { x: 430, labels: ["C-1", "C-2"] },
                  ].map((zone) => (
                    <g key={zone.x}>
                      <rect
                        x={zone.x}
                        y="60"
                        width="140"
                        height="190"
                        fill="#1A1525"
                        stroke="rgba(255,255,255,0.1)"
                        strokeWidth="1"
                        rx="6"
                      />
                      <line
                        x1={zone.x}
                        y1="155"
                        x2={zone.x + 140}
                        y2="155"
                        stroke="rgba(255,255,255,0.06)"
                        strokeWidth="1"
                        strokeDasharray="4"
                      />
                      <text
                        x={zone.x + 16}
                        y="94"
                        fill="rgba(255,255,255,0.4)"
                        fontSize="14"
                        fontWeight="600"
                      >
                        {zone.labels[0]}
                      </text>
                      <text
                        x={zone.x + 16}
                        y="183"
                        fill="rgba(255,255,255,0.4)"
                        fontSize="14"
                        fontWeight="600"
                      >
                        {zone.labels[1]}
                      </text>
                    </g>
                  ))}
                  {Object.entries(productData).map(
                    ([id, prod]: [string, any]) => {
                      const isCurrentProduct = id === modelId;
                      return (
                        <g key={id}>
                          <circle
                            cx={prod.mapPosition.x}
                            cy={prod.mapPosition.y}
                            r={isCurrentProduct ? "14" : "9"}
                            fill={
                              isCurrentProduct
                                ? "#E75300"
                                : "rgba(255,255,255,0.15)"
                            }
                            stroke={isCurrentProduct ? "#ffffff" : "none"}
                            strokeWidth={isCurrentProduct ? "2" : "0"}
                          />
                          <text
                            x={prod.mapPosition.x}
                            y={prod.mapPosition.y + 26}
                            textAnchor="middle"
                            fill={
                              isCurrentProduct
                                ? "#ffffff"
                                : "rgba(255,255,255,0.35)"
                            }
                            fontSize={isCurrentProduct ? "12" : "10"}
                            fontWeight={isCurrentProduct ? "bold" : "normal"}
                          >
                            {prod.name}
                          </text>
                        </g>
                      );
                    }
                  )}
                </svg>
              </div>
            </div>

            <button
              onClick={() => setShowLocationModal(false)}
              className="w-full rounded-2xl transition-all hover:opacity-90"
              style={{
                height: "60px",
                fontSize: "18px",
                fontWeight: "600",
                background: "#E75300",
                color: "#ffffff",
                fontFamily: "var(--font-body)",
              }}
            >
              확인
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
