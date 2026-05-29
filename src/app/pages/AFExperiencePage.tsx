import { useState } from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Play, Pause, AlertCircle, CheckCircle, Eye, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const scenarios = [
  {
    name: "아이",
    image:
      "https://images.unsplash.com/photo-1774688169127-116828465174?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    problem: "아이가 계속 움직여서 초점이 안 맞아요",
    beginnerFail: "셔터를 누를 때마다 초점을 다시 잡아야 합니다",
    sonySolution:
      "소니 AI 눈 AF는 아이의 눈을 자동으로 인식하고 계속 추적합니다",
    recommendedCamera: "α7C II, α7 IV",
    description: "빠르게 움직이는 아이의 눈을 정확히 추적합니다",
  },
  {
    name: "반려동물",
    image:
      "https://images.unsplash.com/photo-1762814305990-712bcd48f2ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    problem: "강아지가 너무 빨라서 흔들린 사진만 나와요",
    beginnerFail: "동물이 갑자기 움직이면 초점이 배경으로 빠집니다",
    sonySolution: "동물 눈 인식 AF로 개와 고양이의 눈을 자동 추적합니다",
    recommendedCamera: "α7 IV, α7R V",
    description: "예측 불가능한 반려동물의 움직임도 놓치지 않습니다",
  },
  {
    name: "공연",
    image:
      "https://images.unsplash.com/photo-1765224747170-be7b97010052?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    problem: "어두운 무대에서 초점이 계속 헤매요",
    beginnerFail: "조명이 바뀔 때마다 초점이 흔들립니다",
    sonySolution:
      "최대 -4EV 저조도 AF로 어두운 환경에서도 빠르고 정확합니다",
    recommendedCamera: "α7 IV, α7R V",
    description: "어두운 무대에서도 정확한 초점을 유지합니다",
  },
  {
    name: "야간 거리",
    image:
      "https://images.unsplash.com/photo-1696798637345-6e58432ca556?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    problem: "밤에는 초점이 아예 안 잡혀요",
    beginnerFail: "어두우면 AF가 작동하지 않거나 느립니다",
    sonySolution: "693개 위상차 AF 포인트가 화면 전체를 커버합니다",
    recommendedCamera: "α7C II, α7 IV, α7R V",
    description: "어두운 밤거리에서도 빠른 초점을 제공합니다",
  },
];

export function AFExperiencePage() {
  const [activeTab, setActiveTab] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [isTracking, setIsTracking] = useState(false);

  const currentScenario = scenarios[activeTab];

  const handleTabChange = (idx: number) => {
    setActiveTab(idx);
    setShowExplanation(false);
    setIsTracking(false);
  };

  return (
    <div
      className="text-white overflow-hidden"
      style={{ height: "100%", background: "#1A1A1F" }}
    >
      <div
        className="h-full flex flex-col overflow-hidden"
        style={{ padding: "4px 36px 32px" }}
      >
        {/* Hero Feature Banner */}
        <div
          className="rounded-2xl flex items-start gap-6 mb-5 flex-shrink-0"
          style={{
            background: "#080511",
            border: "1px solid rgba(91,54,244,0.3)",
            padding: "24px 28px",
          }}
        >
          <div
            className="rounded-2xl flex items-center justify-center flex-shrink-0"
            style={{
              width: "64px",
              height: "64px",
              background: "rgba(91,54,244,0.15)",
              border: "1px solid rgba(91,54,244,0.3)",
            }}
          >
            <Eye style={{ width: "30px", height: "30px", color: "#5B36F4" }} />
          </div>
          <div>
            <h2
              style={{
                fontSize: "28px",
                fontWeight: "700",
                letterSpacing: "-0.02em",
                color: "#ffffff",
                fontFamily: "var(--font-headline)",
                lineHeight: "1.3",
                marginBottom: "8px",
              }}
            >
              눈 추적 자동초점 (Eye Tracking AF)
            </h2>
            <p
              style={{
                fontSize: "20px",
                color: "rgba(255,255,255,0.65)",
                fontFamily: "var(--font-body)",
                lineHeight: "1.5",
              }}
            >
              피사체의 눈을 실시간으로 감지하고 추적하여 항상 눈에 정확한
              초점을 유지합니다
            </p>
          </div>
        </div>

        {/* Scenario Tabs */}
        <div className="grid grid-cols-4 gap-3 mb-5 flex-shrink-0">
          {scenarios.map((scenario, idx) => (
            <button
              key={idx}
              onClick={() => handleTabChange(idx)}
              className="rounded-2xl transition-all duration-200"
              style={{
                padding: "16px 20px",
                fontSize: "20px",
                fontWeight: activeTab === idx ? "700" : "500",
                fontFamily: "var(--font-body)",
                background:
                  activeTab === idx ? "#E75300" : "rgba(255,255,255,0.07)",
                color: activeTab === idx ? "#ffffff" : "rgba(255,255,255,0.6)",
              }}
            >
              {scenario.name}
            </button>
          ))}
        </div>

        <div className="flex flex-col flex-1 overflow-hidden gap-5">
          {/* Scene Image */}
          <div
            className="w-full relative rounded-2xl overflow-hidden flex-shrink-0"
            style={{ height: "420px" }}
          >
            <ImageWithFallback
              src={currentScenario.image}
              alt={currentScenario.name}
              className="w-full h-full object-cover"
            />

            {/* Label overlay */}
            <div
              className="absolute top-5 left-5 rounded-xl flex items-center gap-3"
              style={{
                background: "rgba(0,0,0,0.65)",
                backdropFilter: "blur(8px)",
                padding: "10px 20px",
                border: "1px solid rgba(255,255,255,0.15)",
              }}
            >
              <Eye
                style={{ width: "20px", height: "20px", color: "#5B36F4" }}
              />
              <span
                style={{
                  fontSize: "18px",
                  fontWeight: "600",
                  color: "#ffffff",
                  fontFamily: "var(--font-body)",
                }}
              >
                눈 추적 자동초점
              </span>
            </div>

            {/* Hotspot overlay */}
            {!showExplanation && (
              <button
                onClick={() => setShowExplanation(true)}
                className="absolute inset-0 flex items-center justify-center transition-all"
                style={{ background: "rgba(0,0,0,0.35)" }}
              >
                <div
                  className="flex items-center gap-4 rounded-2xl"
                  style={{
                    background: "rgba(255,255,255,0.95)",
                    color: "#080511",
                    padding: "20px 36px",
                    fontSize: "22px",
                    fontWeight: "700",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  <AlertCircle style={{ width: "24px", height: "24px" }} />
                  이런 상황에서는?
                </div>
              </button>
            )}

            {/* AF Tracking Overlay */}
            {isTracking && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="relative"
                  style={{
                    width: "220px",
                    height: "220px",
                    border: "3px solid #E75300",
                    borderRadius: "16px",
                  }}
                >
                  {[
                    { top: -6, left: -6 },
                    { top: -6, right: -6 },
                    { bottom: -6, left: -6 },
                    { bottom: -6, right: -6 },
                  ].map((pos, i) => (
                    <div
                      key={i}
                      className="absolute"
                      style={{
                        ...pos,
                        width: "16px",
                        height: "16px",
                        background: "#E75300",
                      }}
                    />
                  ))}
                  <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl"
                    style={{
                      background: "#E75300",
                      color: "#ffffff",
                      padding: "10px 20px",
                      fontSize: "16px",
                      fontWeight: "700",
                      whiteSpace: "nowrap",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    눈 AF 추적 중
                  </div>
                </motion.div>
              </div>
            )}
          </div>

          {/* Info Panel */}
          <div className="flex-1 overflow-hidden">
            <AnimatePresence mode="wait">
              {!showExplanation ? (
                <motion.div
                  key="initial"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="h-full flex items-center justify-center rounded-2xl"
                  style={{
                    background: "#080511",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  <div className="text-center">
                    <p
                      style={{
                        fontSize: "22px",
                        color: "rgba(255,255,255,0.4)",
                        fontFamily: "var(--font-body)",
                      }}
                    >
                      장면을 선택하고 위 이미지를 눌러보세요
                    </p>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="explanation"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col gap-4 h-full overflow-y-auto"
                >
                  {/* Close button */}
                  <button
                    onClick={() => {
                      setShowExplanation(false);
                      setIsTracking(false);
                    }}
                    className="self-end flex items-center gap-2 rounded-xl transition-all"
                    style={{
                      padding: "10px 20px",
                      background: "rgba(255,255,255,0.07)",
                      color: "rgba(255,255,255,0.5)",
                      fontSize: "18px",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    <X style={{ width: "16px", height: "16px" }} />
                    닫기
                  </button>

                  {/* Problem */}
                  <div
                    className="rounded-2xl flex items-start gap-5"
                    style={{
                      background: "rgba(212,24,61,0.08)",
                      border: "1px solid rgba(212,24,61,0.2)",
                      padding: "24px",
                    }}
                  >
                    <AlertCircle
                      style={{
                        width: "26px",
                        height: "26px",
                        color: "#ff6b6b",
                        flexShrink: 0,
                        marginTop: "2px",
                      }}
                    />
                    <div>
                      <h3
                        style={{
                          fontSize: "22px",
                          fontWeight: "700",
                          color: "#ff9999",
                          fontFamily: "var(--font-headline)",
                          marginBottom: "8px",
                        }}
                      >
                        문제 상황
                      </h3>
                      <p
                        style={{
                          fontSize: "20px",
                          color: "rgba(255,255,255,0.85)",
                          lineHeight: "1.6",
                          fontFamily: "var(--font-body)",
                        }}
                      >
                        {currentScenario.problem}
                      </p>
                    </div>
                  </div>

                  {/* Beginner Fail */}
                  <div
                    className="rounded-2xl"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      padding: "24px",
                    }}
                  >
                    <h3
                      style={{
                        fontSize: "22px",
                        fontWeight: "700",
                        color: "rgba(255,255,255,0.45)",
                        fontFamily: "var(--font-headline)",
                        marginBottom: "8px",
                      }}
                    >
                      일반 카메라는
                    </h3>
                    <p
                      style={{
                        fontSize: "20px",
                        color: "rgba(255,255,255,0.8)",
                        lineHeight: "1.6",
                        fontFamily: "var(--font-body)",
                      }}
                    >
                      {currentScenario.beginnerFail}
                    </p>
                  </div>

                  {/* Sony Solution */}
                  <div
                    className="rounded-2xl flex items-start gap-5"
                    style={{
                      background: "rgba(34,197,94,0.08)",
                      border: "1px solid rgba(34,197,94,0.2)",
                      padding: "24px",
                    }}
                  >
                    <CheckCircle
                      style={{
                        width: "26px",
                        height: "26px",
                        color: "#4ade80",
                        flexShrink: 0,
                        marginTop: "2px",
                      }}
                    />
                    <div>
                      <h3
                        style={{
                          fontSize: "22px",
                          fontWeight: "700",
                          color: "#86efac",
                          fontFamily: "var(--font-headline)",
                          marginBottom: "8px",
                        }}
                      >
                        소니 α7 시리즈
                      </h3>
                      <p
                        style={{
                          fontSize: "20px",
                          color: "rgba(255,255,255,0.85)",
                          lineHeight: "1.6",
                          fontFamily: "var(--font-body)",
                        }}
                      >
                        {currentScenario.sonySolution}
                      </p>
                    </div>
                  </div>

                  {/* CTA */}
                  <button
                    onClick={() => setIsTracking(!isTracking)}
                    className="w-full rounded-2xl flex items-center justify-center gap-4 transition-all"
                    style={{
                      height: "88px",
                      fontSize: "24px",
                      fontWeight: "700",
                      fontFamily: "var(--font-body)",
                      background: isTracking
                        ? "rgba(212,24,61,0.8)"
                        : "linear-gradient(135deg, #E75300 0%, #5B36F4 100%)",
                      color: "#ffffff",
                      border: "none",
                    }}
                  >
                    {isTracking ? (
                      <>
                        <Pause style={{ width: "24px", height: "24px" }} />
                        추적 중지
                      </>
                    ) : (
                      <>
                        <Play style={{ width: "24px", height: "24px" }} />
                        AI AF 체험
                      </>
                    )}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
