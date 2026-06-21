import { useState } from "react";
import type { ElementType } from "react";
import { ImageComparisonSlider } from "../../../components/ImageComparisonSlider";
import { SensorSizeComparison } from "../../../components/SensorSizeComparison";
import { Sparkles, Maximize } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

type TabId = "quality" | "sensor";

const tabs: Array<{ id: TabId; label: string; icon: ElementType }> = [
  { id: "quality", label: "화질", icon: Sparkles },
  { id: "sensor", label: "센서 크기", icon: Maximize },
];

const tabData: Record<
  TabId,
  {
    tagline: string;
    image?: string;
    beforeImage?: string;
    beforeLabel?: string;
    afterLabel?: string;
    beforeFilter?: string;
    afterFilter?: string;
  }
> = {
  quality: {
    tagline: "최대 6,100만 화소 · BSI CMOS 센서",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
    beforeImage:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=72&w=720",
    beforeLabel: "스마트폰",
    afterLabel: "소니 α7",
    beforeFilter: "saturate(0.85) contrast(0.95) brightness(0.96)",
    afterFilter: "saturate(1.15) contrast(1.06) brightness(1.01)",
  },
  sensor: {
    tagline: "풀프레임 센서 · 스마트폰 대비 약 30배 수광 면적",
  },
};

export function WhySonyPage() {
  const [activeTab, setActiveTab] = useState<TabId>("quality");
  const data = tabData[activeTab];

  return (
    <div
      className="text-white w-full h-full"
      style={{
        height: "100%",
        position: "relative",
        overflow: "hidden",
        background: "#050309",
      }}
    >
      {/* 풀스크린 비교 이미지 슬라이더 (배경으로 직접 동작) */}
      <div className="absolute inset-0 w-full h-full z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab + "_slider"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="w-full h-full"
          >
            {activeTab === "sensor" ? (
              <div
                className="w-full h-full"
                style={{
                  background:
                    "radial-gradient(circle at 50% 38%, rgba(231,83,0,0.10), transparent 55%), radial-gradient(circle at 50% 100%, rgba(91,54,244,0.10), transparent 60%), #050309",
                }}
              />
            ) : (
              <ImageComparisonSlider
                beforeImage={data.beforeImage ?? data.image!}
                afterImage={data.image!}
                beforeLabel={data.beforeLabel!}
                afterLabel={data.afterLabel!}
                beforeFilter={data.beforeFilter}
                afterFilter={data.afterFilter}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 짙은 오버레이 (상하단 텍스트 및 탭 가독성 확보) */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background: "linear-gradient(to bottom, rgba(5,3,9,0.85) 0%, rgba(5,3,9,0.4) 20%, rgba(5,3,9,0.05) 50%, rgba(5,3,9,0.3) 80%, rgba(5,3,9,0.7) 100%)",
        }}
      />

      {/* 대화형 부모 컨테이너: 이벤트는 슬라이더로 통과시키고 컨트롤 영역만 포인터 이벤트 허용 */}
      <div
        className="h-full flex flex-col justify-start overflow-hidden relative z-20 pointer-events-none"
        style={{ padding: "56px 40px 32px" }}
      >
        <div className="pointer-events-none w-full flex flex-col items-center flex-1 min-h-0">
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
            어떤 차이를 가장 먼저 비교해볼까요?
          </h2>

          {/* Tab Buttons */}
          <div className="pointer-events-auto grid grid-cols-2 gap-3 mb-6 w-full">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  whileTap={{ scale: 0.96 }}
                  className="flex items-center justify-center gap-3 rounded-2xl transition-colors duration-200"
                  style={{
                    padding: "16px",
                    background: isActive ? "#E75300" : "rgba(5,3,9,0.65)",
                    border: isActive ? "none" : "1px solid rgba(255,255,255,0.08)",
                    backdropFilter: "blur(12px)",
                    color: isActive ? "#ffffff" : "rgba(255,255,255,0.7)",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
                  }}
                >
                  <Icon
                    style={{
                      width: "22px",
                      height: "22px",
                      color: isActive ? "#ffffff" : "rgba(255,255,255,0.7)",
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
                </motion.button>
              );
            })}
          </div>

          {/* 센서 크기 인터랙티브 비교 (바 없이 시각화 카드) */}
          {activeTab === "sensor" && (
            <div className="pointer-events-auto w-full flex-1 min-h-0">
              <SensorSizeComparison />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
