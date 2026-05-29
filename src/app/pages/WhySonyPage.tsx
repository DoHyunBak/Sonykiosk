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
    rightLabel: "카메라",
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
    rightLabel: "카메라",
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

export function WhySonyPage() {
  const [activeTab, setActiveTab] = useState<TabId>("bokeh");

  const renderContent = () => {
    if (activeTab === "bokeh") {
      return (
        <div
          className="rounded-3xl flex flex-col overflow-hidden"
          style={{
            background: "#080511",
            border: "1px solid rgba(255,255,255,0.12)",
            padding: "32px",
            height: "100%",
          }}
        >
          <div className="flex items-center gap-5 mb-6 flex-shrink-0">
            <div
              className="rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{
                width: "60px",
                height: "60px",
                background: "rgba(231,83,0,0.15)",
                border: "1px solid rgba(231,83,0,0.3)",
              }}
            >
              <Focus
                style={{ width: "28px", height: "28px", color: "#E75300" }}
              />
            </div>
            <div>
              <h2
                style={{
                  fontSize: "28px",
                  fontWeight: "700",
                  color: "#ffffff",
                  fontFamily: "var(--font-headline)",
                  lineHeight: "1.3",
                  marginBottom: "6px",
                }}
              >
                배경흐림(아웃포커싱)의 차이
              </h2>
              <p
                style={{
                  fontSize: "20px",
                  color: "rgba(255,255,255,0.55)",
                  fontFamily: "var(--font-body)",
                }}
              >
                슬라이더를 좌우로 드래그하여 차이를 비교해보세요
              </p>
            </div>
          </div>
          <div className="flex-1 overflow-hidden" style={{ minHeight: 0 }}>
            <ImageComparisonSlider
              beforeImage="https://images.unsplash.com/photo-1606794875400-320d1b5ed437?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
              afterImage="https://images.unsplash.com/photo-1606794875400-320d1b5ed437?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
              beforeLabel="스마트폰"
              afterLabel="카메라"
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
        className="rounded-3xl flex flex-col overflow-hidden"
        style={{
          background: "#080511",
          border: "1px solid rgba(255,255,255,0.12)",
          padding: "32px",
          height: "100%",
        }}
      >
        <div className="flex items-center gap-5 mb-6 flex-shrink-0">
          <div
            className="rounded-2xl flex items-center justify-center flex-shrink-0"
            style={{
              width: "60px",
              height: "60px",
              background: "rgba(91,54,244,0.15)",
              border: "1px solid rgba(91,54,244,0.3)",
            }}
          >
            <Icon
              style={{ width: "28px", height: "28px", color: "#5B36F4" }}
            />
          </div>
          <div>
            <h2
              style={{
                fontSize: "28px",
                fontWeight: "700",
                color: "#ffffff",
                fontFamily: "var(--font-headline)",
                lineHeight: "1.3",
                marginBottom: "6px",
              }}
            >
              {data.title}
            </h2>
            <p
              style={{
                fontSize: "20px",
                color: "#E75300",
                fontFamily: "var(--font-body)",
                fontWeight: "600",
              }}
            >
              {data.description}
            </p>
          </div>
        </div>

        <div
          className="grid grid-cols-2 gap-5 flex-1 overflow-hidden"
          style={{ minHeight: 0 }}
        >
          {/* Left panel */}
          <div
            className="rounded-2xl flex flex-col overflow-hidden"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              padding: "24px",
            }}
          >
            <div className="mb-4 flex-shrink-0">
              <span
                className="inline-block rounded-xl"
                style={{
                  background: "rgba(255,255,255,0.1)",
                  color: "rgba(255,255,255,0.7)",
                  padding: "10px 20px",
                  fontSize: "20px",
                  fontWeight: "600",
                  fontFamily: "var(--font-body)",
                }}
              >
                {data.leftLabel}
              </span>
            </div>
            <div
              className="flex-1 rounded-xl overflow-hidden"
              style={{ minHeight: 0 }}
            >
              <ImageWithFallback
                src={data.smartphoneImage}
                alt={data.leftLabel}
                className="w-full h-full object-cover"
                style={{
                  opacity: 0.6,
                  filter: "saturate(0.7) contrast(0.9)",
                }}
              />
            </div>
            <p
              className="mt-4 text-center flex-shrink-0"
              style={{
                fontSize: "20px",
                color: "rgba(255,255,255,0.4)",
                fontFamily: "var(--font-body)",
              }}
            >
              {data.leftNote}
            </p>
          </div>

          {/* Right panel */}
          <div
            className="rounded-2xl flex flex-col overflow-hidden"
            style={{ background: "#ffffff", padding: "24px" }}
          >
            <div className="mb-4 flex items-center gap-3 flex-shrink-0">
              <span
                className="inline-block rounded-xl"
                style={{
                  background: "#080511",
                  color: "#ffffff",
                  padding: "10px 20px",
                  fontSize: "20px",
                  fontWeight: "600",
                  fontFamily: "var(--font-body)",
                }}
              >
                {data.rightLabel}
              </span>
              <span
                style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  background: "linear-gradient(90deg, #E75300, #5B36F4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontFamily: "var(--font-body)",
                }}
              >
                압도적
              </span>
            </div>
            <div
              className="flex-1 rounded-xl overflow-hidden"
              style={{ minHeight: 0 }}
            >
              <ImageWithFallback
                src={data.cameraImage}
                alt={data.rightLabel}
                className="w-full h-full object-cover"
              />
            </div>
            <p
              className="mt-4 text-center flex-shrink-0"
              style={{
                fontSize: "20px",
                color: "#080511",
                fontWeight: "600",
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
        style={{ padding: "36px 40px 32px" }}
      >
        {/* Header */}
        <div className="flex-shrink-0 mb-6">
          <h1
            style={{
              fontSize: "48px",
              fontWeight: "800",
              letterSpacing: "-0.02em",
              color: "#ffffff",
              fontFamily: "var(--font-headline)",
              lineHeight: "1.2",
              marginBottom: "8px",
            }}
          >
            왜 소니 알파인가요?
          </h1>
          <p
            style={{
              fontSize: "22px",
              color: "#E75300",
              fontFamily: "var(--font-body)",
              fontWeight: "600",
              lineHeight: "1.5",
            }}
          >
            스마트폰과의 차이를 직접 비교해보세요
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="grid grid-cols-4 gap-3 mb-6 flex-shrink-0">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="flex items-center justify-center gap-3 rounded-2xl transition-all duration-200"
                style={{
                  padding: "18px 16px",
                  background: isActive ? "#E75300" : "#080511",
                  border: isActive
                    ? "none"
                    : "1px solid rgba(255,255,255,0.1)",
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
                    fontWeight: isActive ? "700" : "500",
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
