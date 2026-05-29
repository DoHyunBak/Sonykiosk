import { useState } from "react";
import type { ElementType } from "react";
import { ImageComparisonSlider } from "../components/ImageComparisonSlider";
import { Focus, Sparkles, Maximize, Feather } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

type TabId = "bokeh" | "quality" | "sensor" | "weight";

const tabs: Array<{ id: TabId; label: string; icon: ElementType }> = [
  { id: "bokeh", label: "배경흐림", icon: Focus },
  { id: "quality", label: "화질", icon: Sparkles },
  { id: "sensor", label: "센서 크기", icon: Maximize },
  { id: "weight", label: "가볍고 강력", icon: Feather },
];

const tabData: Record<
  TabId,
  {
    tagline: string;
    image?: string;
    beforeLabel?: string;
    afterLabel?: string;
    beforeFilter?: string;
    afterFilter?: string;
    bokeh?: boolean;
  }
> = {
  bokeh: {
    tagline: "대구경 렌즈 + 풀프레임 센서",
    bokeh: true,
  },
  quality: {
    tagline: "최대 6,100만 화소 · BSI CMOS 센서",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
    beforeLabel: "스마트폰",
    afterLabel: "소니 α7",
    beforeFilter: "blur(1px) saturate(0.82) contrast(0.92) brightness(0.95)",
    afterFilter: "saturate(1.15) contrast(1.06) brightness(1.01)",
  },
  sensor: {
    tagline: "풀프레임 센서 · 스마트폰 대비 약 30배 수광 면적",
    image:
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
    beforeLabel: "스마트폰",
    afterLabel: "소니 α7",
    beforeFilter: "brightness(0.78) saturate(0.7) contrast(1.08)",
    afterFilter: "brightness(1.08) saturate(1.15) contrast(1.03)",
  },
  weight: {
    tagline: "약 514g · 소형 바디 · 타협 없는 성능",
    image:
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
    beforeLabel: "일반 DSLR",
    afterLabel: "소니 α7",
    beforeFilter: "saturate(0.75) contrast(0.9) brightness(0.88) hue-rotate(5deg)",
    afterFilter: "saturate(1.2) contrast(1.07) brightness(1.03)",
  },
};

export function WhySonyPage() {
  const [activeTab, setActiveTab] = useState<TabId>("bokeh");
  const data = tabData[activeTab];

  return (
    <div
      className="text-white overflow-hidden"
      style={{ height: "100%", background: "#1A1A1F" }}
    >
      <div
        className="h-full flex flex-col justify-center overflow-hidden"
        style={{ padding: "8px 40px 32px" }}
      >
        {/* Tab Buttons */}
        <div className="grid grid-cols-4 gap-3 mb-4 flex-shrink-0">
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
              </motion.button>
            );
          })}
        </div>

        {/* Technical description — animates on tab change */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab + "_desc"}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.22 }}
            className="flex-shrink-0 mb-5"
          >
            <p
              style={{
                fontSize: "22px",
                fontWeight: "700",
                color: "#E75300",
                fontFamily: "var(--font-body)",
                letterSpacing: "0.02em",
              }}
            >
              {data.tagline}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Tab Content — slider animates on tab change */}
        <div className="overflow-hidden flex-shrink-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab + "_slider"}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="rounded-2xl overflow-hidden"
              style={{
                background: "#080511",
                border: "1px solid rgba(255,255,255,0.12)",
                padding: "20px",
                height: "530px",
              }}
            >
              <div className="rounded-xl overflow-hidden h-full">
                {data.bokeh ? (
                  <ImageComparisonSlider
                    beforeImage="https://images.unsplash.com/photo-1606794875400-320d1b5ed437?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
                    afterImage="https://images.unsplash.com/photo-1606794875400-320d1b5ed437?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
                    beforeLabel="스마트폰"
                    afterLabel="소니 α7"
                  />
                ) : (
                  <ImageComparisonSlider
                    beforeImage={data.image!}
                    afterImage={data.image!}
                    beforeLabel={data.beforeLabel!}
                    afterLabel={data.afterLabel!}
                    beforeFilter={data.beforeFilter}
                    afterFilter={data.afterFilter}
                  />
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

