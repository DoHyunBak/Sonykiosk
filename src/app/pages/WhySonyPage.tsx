import { useState } from "react";
import type { ElementType } from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { ImageComparisonSlider } from "../components/ImageComparisonSlider";
import { Focus, Sparkles, Maximize, Feather } from "lucide-react";

type TabId = "bokeh" | "quality" | "sensor" | "weight";

const tabs: Array<{ id: TabId; label: string; icon: ElementType }> = [
  { id: "bokeh", label: "배경흐림", icon: Focus },
  { id: "quality", label: "화질", icon: Sparkles },
  { id: "sensor", label: "센서 크기", icon: Maximize },
  { id: "weight", label: "가볍고 강력", icon: Feather },
];

const staticComparisons: Record<
  "quality" | "sensor" | "weight",
  {
    icon: ElementType;
    title: string;
    description: string;
    smartphoneImage: string;
    cameraImage: string;
    leftLabel: string;
    rightLabel: string;
    leftNote: string;
    rightNote: string;
  }
> = {
  quality: {
    icon: Sparkles,
    title: "화질(해상도)의 차이",
    description: "크게 확대해도 깨지지 않아요",
    smartphoneImage:
      "https://images.unsplash.com/photo-1763888450540-9b59abff803b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    cameraImage:
      "https://images.unsplash.com/photo-1746588118658-c7cbbc463558?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    leftLabel: "스마트폰",
    rightLabel: "소니 α7",
    leftNote: "확대하면 화질이 떨어져요",
    rightNote: "선명하고 생생해요",
  },
  sensor: {
    icon: Maximize,
    title: "센서 크기의 차이",
    description: "빛을 받아들이는 양이 달라요",
    smartphoneImage:
      "https://images.unsplash.com/photo-1564931349395-2d1845a3a934?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    cameraImage:
      "https://images.unsplash.com/photo-1560181375-f64ca484cb1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    leftLabel: "스마트폰",
    rightLabel: "소니 α7",
    leftNote: "어두운 곳에서 노이즈 발생",
    rightNote: "어두운 곳도 깨끗해요",
  },
  weight: {
    icon: Feather,
    title: "가볍지만 화질은 최고급",
    description: "들고 다니기 편하고 사진도 좋아요",
    smartphoneImage:
      "https://images.unsplash.com/photo-1722842179085-5423886195ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    cameraImage:
      "https://images.unsplash.com/photo-1722842179085-5423886195ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    leftLabel: "일반 카메라",
    rightLabel: "소니 α7",
    leftNote: "복잡하고 어려워요",
    rightNote: "쉽고 강력해요",
  },
};

// Shared card header: smaller icon + tighter spacing
function CardHeader({
  icon: Icon,
  iconColor,
  iconBg,
  iconBorder,
  title,
  description,
}: {
  icon: ElementType;
  iconColor: string;
  iconBg: string;
  iconBorder: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-center gap-3 mb-4 flex-shrink-0">
      <div
        className="rounded-xl flex items-center justify-center flex-shrink-0"
        style={{
          width: "36px",
          height: "36px",
          background: iconBg,
          border: `1px solid ${iconBorder}`,
        }}
      >
        <Icon style={{ width: "18px", height: "18px", color: iconColor }} />
      </div>
      <div>
        <h2
          style={{
            fontSize: "26px",
            fontWeight: "700",
            color: "#ffffff",
            fontFamily: "var(--font-headline)",
            lineHeight: "1.2",
          }}
        >
          {title}
        </h2>
        <p
          style={{
            fontSize: "18px",
            fontWeight: "500",
            color: "rgba(255,255,255,0.5)",
            fontFamily: "var(--font-body)",
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

export function WhySonyPage() {
  const [activeTab, setActiveTab] = useState<TabId>("bokeh");

  const renderContent = () => {
    if (activeTab === "bokeh") {
      return (
        <div
          className="rounded-2xl flex flex-col overflow-hidden"
          style={{
            background: "#080511",
            border: "1px solid rgba(255,255,255,0.12)",
            padding: "24px",
            height: "100%",
          }}
        >
          <CardHeader
            icon={Focus}
            iconColor="#E75300"
            iconBg="rgba(231,83,0,0.15)"
            iconBorder="rgba(231,83,0,0.3)"
            title="배경흐림(아웃포커싱)의 차이"
            description="슬라이더를 좌우로 드래그하여 차이를 비교해보세요"
          />
          {/* Fixed-height slider area */}
          <div
            className="rounded-xl overflow-hidden flex-shrink-0"
            style={{ height: "560px" }}
          >
            <ImageComparisonSlider
              beforeImage="https://images.unsplash.com/photo-1606794875400-320d1b5ed437?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
              afterImage="https://images.unsplash.com/photo-1606794875400-320d1b5ed437?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
              beforeLabel="스마트폰"
              afterLabel="소니 α7"
            />
          </div>
        </div>
      );
    }

    const data =
      staticComparisons[activeTab as "quality" | "sensor" | "weight"];
    const Icon = data.icon;

    return (
      <div
        className="rounded-2xl flex flex-col overflow-hidden"
        style={{
          background: "#080511",
          border: "1px solid rgba(255,255,255,0.12)",
          padding: "24px",
          height: "100%",
        }}
      >
        <CardHeader
          icon={Icon}
          iconColor="#5B36F4"
          iconBg="rgba(91,54,244,0.15)"
          iconBorder="rgba(91,54,244,0.3)"
          title={data.title}
          description={data.description}
        />

        {/* Fixed-height comparison grid — no flex-1, no dead space */}
        <div
          className="grid grid-cols-2 gap-4 flex-shrink-0"
          style={{ height: "560px" }}
        >
          {/* Left: Smartphone panel (dark) */}
          <div
            className="rounded-2xl flex flex-col overflow-hidden"
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.1)",
              padding: "20px",
            }}
          >
            {/* Label */}
            <div className="mb-3 flex-shrink-0">
              <span
                className="inline-block rounded-xl"
                style={{
                  background: "rgba(255,255,255,0.1)",
                  color: "rgba(255,255,255,0.75)",
                  padding: "6px 16px",
                  fontSize: "16px",
                  fontWeight: "600",
                  fontFamily: "var(--font-body)",
                }}
              >
                {data.leftLabel}
              </span>
            </div>
            {/* Image */}
            <div className="flex-1 rounded-xl overflow-hidden" style={{ minHeight: 0 }}>
              <ImageWithFallback
                src={data.smartphoneImage}
                alt={data.leftLabel}
                className="w-full h-full object-cover"
                style={{ opacity: 0.55, filter: "saturate(0.6) contrast(0.85)" }}
              />
            </div>
            {/* Caption */}
            <p
              className="mt-3 text-center flex-shrink-0"
              style={{
                fontSize: "18px",
                fontWeight: "500",
                color: "rgba(255,255,255,0.5)",
                fontFamily: "var(--font-body)",
              }}
            >
              {data.leftNote}
            </p>
          </div>

          {/* Right: Sony panel (dark with orange tint) */}
          <div
            className="rounded-2xl flex flex-col overflow-hidden"
            style={{
              background: "rgba(231,83,0,0.08)",
              border: "1px solid rgba(231,83,0,0.25)",
              padding: "20px",
            }}
          >
            {/* Labels row */}
            <div className="mb-3 flex items-center gap-3 flex-shrink-0">
              <span
                className="inline-block rounded-xl"
                style={{
                  background: "rgba(231,83,0,0.18)",
                  color: "#E75300",
                  padding: "6px 16px",
                  fontSize: "16px",
                  fontWeight: "700",
                  fontFamily: "var(--font-body)",
                }}
              >
                {data.rightLabel}
              </span>
              <span
                style={{
                  fontSize: "18px",
                  fontWeight: "700",
                  background: "linear-gradient(90deg, #E75300, #5B36F4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  color: "transparent",
                  fontFamily: "var(--font-body)",
                }}
              >
                압도적
              </span>
            </div>
            {/* Image */}
            <div className="flex-1 rounded-xl overflow-hidden" style={{ minHeight: 0 }}>
              <ImageWithFallback
                src={data.cameraImage}
                alt={data.rightLabel}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Caption */}
            <p
              className="mt-3 text-center flex-shrink-0"
              style={{
                fontSize: "18px",
                fontWeight: "700",
                color: "#E75300",
                fontFamily: "var(--font-body)",
              }}
            >
              {data.rightNote}
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div
      className="text-white overflow-hidden"
      style={{ height: "100%", background: "#1A1A1F" }}
    >
      <div
        className="h-full flex flex-col overflow-hidden"
        style={{ padding: "8px 40px 32px" }}
      >
        {/* Tab Buttons */}
        <div className="grid grid-cols-4 gap-3 mb-5 flex-shrink-0">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="flex items-center justify-center gap-3 rounded-2xl transition-all duration-200"
                style={{
                  padding: "16px",
                  background: isActive ? "#E75300" : "rgba(255,255,255,0.07)",
                  border: "none",
                  color: isActive ? "#ffffff" : "rgba(255,255,255,0.5)",
                }}
              >
                <Icon
                  style={{
                    width: "22px",
                    height: "22px",
                    color: isActive ? "#ffffff" : "rgba(255,255,255,0.5)",
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontSize: "20px",
                    fontWeight: isActive ? "700" : "600",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <div className="flex-1 overflow-hidden" style={{ minHeight: 0 }}>
          {renderContent()}
        </div>
      </div>
    </div>
  );
}
