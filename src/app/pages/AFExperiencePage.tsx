import { useState, useEffect } from "react";
import { AlertCircle, CheckCircle, Eye } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const scenarios = [
  {
    name: "아이",
    video:
      "https://videos.pexels.com/video-files/3048208/3048208-hd_1280_720_25fps.mp4",
    poster:
      "https://images.unsplash.com/photo-1774688169127-116828465174?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    problem: "아이가 계속 움직여서 초점이 안 맞아요",
    fail: "셔터를 누를 때마다 초점을 다시 잡아야 합니다",
    solution: "소니 AI 눈 AF는 아이의 눈을 자동으로 인식하고 계속 추적합니다",
    path: [
      { x: 44, y: 36 },
      { x: 53, y: 30 },
      { x: 38, y: 43 },
      { x: 57, y: 34 },
      { x: 42, y: 27 },
    ],
  },
  {
    name: "반려동물",
    video:
      "https://videos.pexels.com/video-files/4373038/4373038-hd_1280_720_30fps.mp4",
    poster:
      "https://images.unsplash.com/photo-1762814305990-712bcd48f2ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    problem: "강아지가 너무 빨라서 흔들린 사진만 나와요",
    fail: "동물이 갑자기 움직이면 초점이 배경으로 빠집니다",
    solution: "동물 눈 인식 AF로 개와 고양이의 눈을 자동 추적합니다",
    path: [
      { x: 34, y: 44 },
      { x: 60, y: 38 },
      { x: 42, y: 30 },
      { x: 63, y: 46 },
      { x: 35, y: 50 },
    ],
  },
  {
    name: "공연",
    video:
      "https://videos.pexels.com/video-files/2792369/2792369-hd_1280_720_30fps.mp4",
    poster:
      "https://images.unsplash.com/photo-1765224747170-be7b97010052?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    problem: "어두운 무대에서 초점이 계속 헤매요",
    fail: "조명이 바뀔 때마다 초점이 흔들립니다",
    solution: "최대 -4EV 저조도 AF로 어두운 환경에서도 빠르고 정확합니다",
    path: [
      { x: 50, y: 40 },
      { x: 44, y: 35 },
      { x: 57, y: 43 },
      { x: 48, y: 33 },
    ],
  },
  {
    name: "야간 거리",
    video:
      "https://videos.pexels.com/video-files/3168752/3168752-hd_1280_720_30fps.mp4",
    poster:
      "https://images.unsplash.com/photo-1696798637345-6e58432ca556?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    problem: "밤에는 초점이 아예 안 잡혀요",
    fail: "어두우면 AF가 작동하지 않거나 느립니다",
    solution: "693개 위상차 AF 포인트가 화면 전체를 커버합니다",
    path: [
      { x: 38, y: 42 },
      { x: 55, y: 36 },
      { x: 46, y: 46 },
      { x: 59, y: 40 },
    ],
  },
];

export function AFExperiencePage() {
  const [activeTab, setActiveTab] = useState(0);
  const [trackIdx, setTrackIdx] = useState(0);

  const scene = scenarios[activeTab];
  const pos = scene.path[trackIdx];

  useEffect(() => {
    setTrackIdx(0);
    const id = setInterval(() => {
      setTrackIdx((p) => (p + 1) % scene.path.length);
    }, 1800);
    return () => clearInterval(id);
  }, [activeTab, scene.path.length]);

  return (
    <div
      className="text-white overflow-hidden"
      style={{ height: "100%", background: "#1A1A1F" }}
    >
      <div
        className="h-full flex flex-col overflow-hidden"
        style={{ padding: "4px 36px 32px" }}
      >
        {/* Tabs */}
        <div className="grid grid-cols-4 gap-3 mb-5 flex-shrink-0">
          {scenarios.map((s, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
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
              {s.name}
            </button>
          ))}
        </div>

        <div className="flex flex-col flex-1 overflow-hidden gap-4">
          {/* Video with AF tracking */}
          <div
            className="w-full relative rounded-2xl overflow-hidden flex-shrink-0"
            style={{ height: "420px" }}
          >
            <AnimatePresence mode="wait">
              <motion.video
                key={activeTab}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
                autoPlay
                muted
                loop
                playsInline
                poster={scene.poster}
                className="w-full h-full object-cover"
                style={{ display: "block" }}
              >
                <source src={scene.video} type="video/mp4" />
              </motion.video>
            </AnimatePresence>

            {/* Status badge */}
            <div
              className="absolute top-5 left-5 rounded-xl flex items-center gap-3"
              style={{
                background: "rgba(0,0,0,0.6)",
                backdropFilter: "blur(10px)",
                padding: "10px 18px",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              <Eye style={{ width: "18px", height: "18px", color: "#E75300" }} />
              <span
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#ffffff",
                  fontFamily: "var(--font-body)",
                }}
              >
                AI Eye Tracking AF
              </span>
              <motion.div
                animate={{ opacity: [1, 0.15, 1] }}
                transition={{ duration: 1.1, repeat: Infinity }}
                style={{
                  width: "7px",
                  height: "7px",
                  borderRadius: "50%",
                  background: "#E75300",
                  flexShrink: 0,
                }}
              />
            </div>

            {/* Animated AF tracking box */}
            <motion.div
              animate={{ left: `${pos.x}%`, top: `${pos.y}%` }}
              transition={{ type: "spring", stiffness: 90, damping: 18 }}
              className="absolute pointer-events-none"
              style={{
                width: "130px",
                height: "130px",
                marginLeft: "-65px",
                marginTop: "-65px",
              }}
            >
              {/* Corner marks */}
              {[
                { top: 0, left: 0, borderTop: "2px solid #E75300", borderLeft: "2px solid #E75300" },
                { top: 0, right: 0, borderTop: "2px solid #E75300", borderRight: "2px solid #E75300" },
                { bottom: 0, left: 0, borderBottom: "2px solid #E75300", borderLeft: "2px solid #E75300" },
                { bottom: 0, right: 0, borderBottom: "2px solid #E75300", borderRight: "2px solid #E75300" },
              ].map((c, i) => (
                <div
                  key={i}
                  className="absolute"
                  style={{ ...c, width: "18px", height: "18px" }}
                />
              ))}

              {/* Center crosshair dot */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
                style={{ width: "5px", height: "5px", background: "#E75300" }}
              />

              {/* Label */}
              <div
                className="absolute -bottom-7 left-1/2 -translate-x-1/2 rounded-md whitespace-nowrap"
                style={{
                  background: "#E75300",
                  color: "#ffffff",
                  padding: "3px 10px",
                  fontSize: "12px",
                  fontWeight: "700",
                  fontFamily: "var(--font-body)",
                }}
              >
                눈 인식 중
              </div>
            </motion.div>
          </div>

          {/* Problem / Solution cards */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex gap-4 flex-1"
            >
              {/* Problem */}
              <div
                className="flex-1 rounded-2xl flex flex-col gap-3"
                style={{
                  background: "rgba(212,24,61,0.07)",
                  border: "1px solid rgba(212,24,61,0.18)",
                  padding: "24px",
                }}
              >
                <div className="flex items-center gap-3">
                  <AlertCircle
                    style={{
                      width: "20px",
                      height: "20px",
                      color: "#ff6b6b",
                      flexShrink: 0,
                    }}
                  />
                  <h3
                    style={{
                      fontSize: "18px",
                      fontWeight: "700",
                      color: "#ff9999",
                      fontFamily: "var(--font-headline)",
                    }}
                  >
                    일반적인 문제
                  </h3>
                </div>
                <p
                  style={{
                    fontSize: "20px",
                    color: "rgba(255,255,255,0.85)",
                    lineHeight: "1.6",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  {scene.problem}
                </p>
                <p
                  style={{
                    fontSize: "17px",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: "1.5",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  {scene.fail}
                </p>
              </div>

              {/* Solution */}
              <div
                className="flex-1 rounded-2xl flex flex-col gap-3"
                style={{
                  background: "rgba(34,197,94,0.07)",
                  border: "1px solid rgba(34,197,94,0.18)",
                  padding: "24px",
                }}
              >
                <div className="flex items-center gap-3">
                  <CheckCircle
                    style={{
                      width: "20px",
                      height: "20px",
                      color: "#4ade80",
                      flexShrink: 0,
                    }}
                  />
                  <h3
                    style={{
                      fontSize: "18px",
                      fontWeight: "700",
                      color: "#86efac",
                      fontFamily: "var(--font-headline)",
                    }}
                  >
                    소니 α7 시리즈
                  </h3>
                </div>
                <p
                  style={{
                    fontSize: "20px",
                    color: "rgba(255,255,255,0.85)",
                    lineHeight: "1.6",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  {scene.solution}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
