import { useState, useEffect } from "react";
import { Eye, Smile, Heart, Music, Moon } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const scenarios = [
  {
    name: "아이",
    icon: Smile,
    video: "/src/imports/videos/kids.mp4",
    poster: "/images/af-child-thumbnail.jpg",
    problem: "아이가 계속 움직여서 초점이 안 맞아요",
    fail: "셔터를 누를 때마다 초점을 다시 잡아야 합니다",
    solution: "소니 AI 눈 AF는 아이의 눈을 자동으로 인식하고 계속 추적합니다",
    // 아이가 좌우로 자연스럽게 움직이는 시뮬레이션 경로
    path: [
      { x: 50, y: 38 },
      { x: 47, y: 37 },
      { x: 44, y: 39 },
      { x: 46, y: 36 },
      { x: 50, y: 35 },
      { x: 53, y: 37 },
      { x: 56, y: 38 },
      { x: 54, y: 40 },
      { x: 51, y: 39 },
      { x: 48, y: 38 },
    ],
  },
  {
    name: "반려동물",
    icon: Heart,
    video: "/src/imports/videos/pet.mp4",
    poster: "/images/af-pet-thumbnail.jpg",
    problem: "강아지가 너무 빨라서 흔들린 사진만 나와요",
    fail: "동물이 갑자기 움직이면 초점이 배경으로 빠집니다",
    solution: "동물 눈 인식 AF로 개와 고양이의 눈을 자동 추적합니다",
    // 반려동물이 빠르게 이리저리 뛰는 시뮬레이션 경로
    path: [
      { x: 50, y: 45 },
      { x: 38, y: 42 },
      { x: 30, y: 48 },
      { x: 42, y: 44 },
      { x: 55, y: 40 },
      { x: 65, y: 46 },
      { x: 58, y: 50 },
      { x: 47, y: 43 },
    ],
  },
  {
    name: "공연",
    icon: Music,
    video: "/src/imports/videos/concert.mp4",
    poster: "/images/af-concert-thumbnail.jpg",
    problem: "어두운 무대에서 초점이 계속 헤매요",
    fail: "조명이 바뀔 때마다 초점이 흔들립니다",
    solution: "최대 -4EV 저조도 AF로 어두운 환경에서도 빠르고 정확합니다",
    // 무대 위 공연자가 좌우로 이동하는 시뮬레이션 경로
    path: [
      { x: 35, y: 40 },
      { x: 38, y: 38 },
      { x: 42, y: 39 },
      { x: 47, y: 37 },
      { x: 52, y: 38 },
      { x: 58, y: 40 },
      { x: 62, y: 39 },
      { x: 57, y: 41 },
      { x: 50, y: 40 },
      { x: 43, y: 39 },
    ],
  },
  {
    name: "야간 거리",
    icon: Moon,
    video: "/src/imports/videos/night.mp4",
    poster: "/images/af-night-thumbnail.jpg",
    problem: "밤에는 초점이 아예 안 잡혀요",
    fail: "어두우면 AF가 작동하지 않거나 느립니다",
    solution: "693개 위상차 AF 포인트가 화면 전체를 커버합니다",
    // 야간 거리에서 천천히 드리프트하는 시뮬레이션 경로
    path: [
      { x: 50, y: 42 },
      { x: 51, y: 41 },
      { x: 52, y: 40 },
      { x: 51, y: 39 },
      { x: 50, y: 40 },
      { x: 49, y: 41 },
      { x: 48, y: 40 },
      { x: 49, y: 39 },
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
    }, 900);
    return () => clearInterval(id);
  }, [activeTab, scene.path.length]);

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
      {/* 풀스크린 비디오 백그라운드 (배경으로 직접 동작) */}
      <div className="absolute inset-0 w-full h-full z-0">
        <AnimatePresence mode="wait">
          <motion.video
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
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
      </div>

      {/* 짙은 오버레이 (상하단 텍스트 및 탭 가독성 확보) */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background: "linear-gradient(to bottom, rgba(5,3,9,0.85) 0%, rgba(5,3,9,0.4) 20%, rgba(5,3,9,0.05) 50%, rgba(5,3,9,0.3) 80%, rgba(5,3,9,0.7) 100%)",
        }}
      />

      {/* 대화형 부모 컨테이너: 이벤트는 비디오 영역으로 통과시키고 컨트롤 영역만 포인터 이벤트 허용 */}
      <div
        className="h-full flex flex-col justify-start overflow-hidden relative z-20 pointer-events-none"
        style={{ padding: "56px 40px 32px" }}
      >
        <div className="pointer-events-auto w-full flex flex-col items-center">
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
            어떤 상황에서 가장 초점을 맞추기 어려우셨나요?
          </h2>

          {/* Tab Buttons (Glassmorphic Styled) */}
          <div className="grid grid-cols-4 gap-3 mb-6 w-full">
            {scenarios.map((s, idx) => {
              const Icon = s.icon;
              const isActive = activeTab === idx;
              return (
                <motion.button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
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
                    {s.name}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Status badge & AF Tracking Frame — positioned relative to the full screen viewport */}
        <div className="absolute inset-0 pointer-events-none w-full h-full">
          {/* Status badge */}
          <div
            className="absolute rounded-xl flex items-center gap-3"
            style={{
              top: "220px",
              left: "40px",
              background: "rgba(0,0,0,0.65)",
              backdropFilter: "blur(12px)",
              padding: "10px 18px",
              border: "1px solid rgba(255,255,255,0.12)",
              boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
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
            className="absolute"
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
                boxShadow: "0 4px 10px rgba(0,0,0,0.35)",
              }}
            >
              눈 인식 중
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
