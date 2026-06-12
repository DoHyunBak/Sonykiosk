import { useState } from "react";
import { useNavigate } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import {
  Aperture,
  Plane,
  Image as ImageIcon,
  Video,
  QrCode,
  Download,
  ChevronRight,
  Sparkles,
  Check,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

import sonyA7C from "../../imports/sony_a7c.png";
import sonyA7C2 from "../../imports/sony_a7c2.png";
import sonyA7CR from "../../imports/sony_a7cr.png";
import sonyA7M4 from "../../imports/sony_a7m4.png";
import sonyA7M5 from "../../imports/sony_a7m5.png";
import sonyA7R5 from "../../imports/sony_a7r5.png";

type ProfileType = "여행형" | "일상기록형" | "영상입문형" | null;

const profiles = [
  {
    type: "여행형" as ProfileType,
    icon: Plane,
    description: "가볍게 들고 다니며 여행지를 기록하고 싶어요",
    color: "#E75300",
    bgGradient: "linear-gradient(135deg, #E75300, #ff7a40)",
  },
  {
    type: "일상기록형" as ProfileType,
    icon: ImageIcon,
    description: "일상의 순간들을 자연스럽게 남기고 싶어요",
    color: "#5B36F4",
    bgGradient: "linear-gradient(135deg, #5B36F4, #7c5cf7)",
  },
  {
    type: "영상입문형" as ProfileType,
    icon: Video,
    description: "브이로그나 영상 콘텐츠를 시작하고 싶어요",
    color: "#E75300",
    bgGradient: "linear-gradient(135deg, #E75300 0%, #5B36F4 100%)",
  },
];

const models: Record<string, any> = {
  a7c: {
    name: "α7C",
    identity: "소니 입문, 가볍게 시작",
    image: sonyA7C,
    reasons: [
      "가장 가벼운 풀프레임",
      "직관적인 초보자 인터페이스",
      "여행에 최적화된 크기",
    ],
    lens: "FE 28-60mm F4-5.6",
    mbti: { type: "ISFP", nick: "자유로운 여행자", desc: "가볍게 떠나 순간을 감성적으로 담아내는 타입" },
  },
  a7c2: {
    name: "α7C II",
    identity: "가볍게 시작하는 풀프레임",
    image: sonyA7C2,
    reasons: [
      "가볍게 들고 다니기 좋음",
      "AI 눈 AF로 초점 실패 방지",
      "입문자도 쉽게 좋은 결과",
    ],
    lens: "FE 28-60mm F4-5.6",
    mbti: { type: "ENFP", nick: "감성 브이로거", desc: "어디서든 즐겁게, AI가 알아서 초점을 잡아주는 타입" },
  },
  a7cr: {
    name: "α7CR",
    identity: "작고 강한 고화질 선택",
    image: sonyA7CR,
    reasons: [
      "61MP 고해상도 이미지",
      "컴팩트 바디에 최고 화질",
      "크롭해도 충분한 디테일",
    ],
    lens: "FE 24-70mm F2.8 GM II",
    mbti: { type: "INTJ", nick: "디테일 완벽주의자", desc: "작은 바디에 6,100만 화소, 완벽한 디테일을 추구하는 타입" },
  },
  a7m4: {
    name: "α7 IV",
    identity: "가장 균형 잡힌 올라운드",
    image: sonyA7M4,
    reasons: ["사진과 영상 모두 강력함", "33MP 고해상도", "4K 60p 영상 촬영 가능"],
    lens: "FE 24-70mm F2.8 GM II",
    mbti: { type: "ESTJ", nick: "믿음직한 올라운더", desc: "사진·영상 무엇이든 균형 있게 해내는 만능 타입" },
  },
  a7m5: {
    name: "α7 V",
    identity: "최신 AI 프로세서 탑재",
    image: sonyA7M5,
    reasons: [
      "차세대 AI 피사체 인식",
      "8K 영상 촬영 지원",
      "최신 기술의 집약체",
    ],
    lens: "FE 24-70mm F2.8 GM II",
    mbti: { type: "ENTP", nick: "혁신 얼리어답터", desc: "최신 AI로 한계를 시험하는 도전적인 타입" },
  },
  a7r5: {
    name: "α7R V",
    identity: "최고 성능의 고화질 선택",
    image: sonyA7R5,
    reasons: [
      "61MP 프로페셔널 화질",
      "AI 기반 자동 초점",
      "전문가급 성능과 내구성",
    ],
    lens: "FE 24-70mm F2.8 GM II",
    mbti: { type: "ISTJ", nick: "고화질 장인", desc: "타협 없는 디테일로 프로의 신뢰를 받는 장인 타입" },
  },
};

export function RecommendationQuizPage() {
  const navigate = useNavigate();
  const [selectedProfile, setSelectedProfile] = useState<ProfileType>(null);
  const [portability, setPortability] = useState(5);
  const [showResult, setShowResult] = useState(false);
  const [recommendedModelId, setRecommendedModelId] = useState<string>("a7c2");

  const handleSubmit = () => {
    let modelId = "a7m4";
    if (selectedProfile === "여행형") {
      modelId =
        portability >= 8
          ? "a7c"
          : portability >= 6
          ? "a7c2"
          : portability >= 4
          ? "a7cr"
          : "a7m4";
    } else if (selectedProfile === "일상기록형") {
      modelId =
        portability <= 2
          ? "a7r5"
          : portability <= 4
          ? "a7cr"
          : portability >= 7
          ? "a7c"
          : "a7c2";
    } else if (selectedProfile === "영상입문형") {
      modelId =
        portability >= 7 ? "a7c2" : portability <= 3 ? "a7m5" : "a7m4";
    }
    setRecommendedModelId(modelId);
    setShowResult(true);
  };

  const resetQuiz = () => {
    setSelectedProfile(null);
    setPortability(5);
    setShowResult(false);
  };

  const recommendedModel = models[recommendedModelId];

  const portabilityLabel =
    portability <= 3
      ? "성능 중심"
      : portability >= 6
      ? "휴대성 중심"
      : "균형 중시";

  let activeQuestion = "어떤 사진을 찍고 싶으세요?";
  if (showResult) {
    activeQuestion = "나에게 딱 맞는 소니";
  } else if (selectedProfile) {
    activeQuestion = "어느 쪽이 더 중요한가요?";
  }

  return (
    <div
      className="text-white"
      style={{
        height: "100%",
        position: "relative",
        overflow: "hidden",
        background: "#050309",
      }}
    >
      {/* 배경 이미지 */}
      <ImageWithFallback
        src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1920&q=80"
        alt="추천받기 배경"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: 0.45 }}
      />

      {/* 짙은 오버레이 */}
      <div
        className="absolute inset-0"
        style={{ background: "rgba(5, 3, 9, 0.7)" }}
      />

      <div
        className="h-full flex flex-col justify-start items-center overflow-hidden relative z-10"
        style={{ padding: "56px 40px 32px" }}
      >
        <div className="w-full max-w-[960px] flex flex-col">
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
            {activeQuestion}
          </h2>

          {/* Step Indicator */}
          <div className="flex items-center justify-center gap-5 mb-8 flex-shrink-0">
          {[
            { step: 1, label: "프로필 선택", active: !selectedProfile },
            {
              step: 2,
              label: "세부 조정",
              active: !!selectedProfile && !showResult,
            },
            { step: 3, label: "나의 첫 소니", active: showResult },
          ].map((s, i) => (
            <div key={i} className="flex items-center gap-3">
              <div
                className="flex items-center justify-center rounded-full flex-shrink-0"
                style={{
                  width: "40px",
                  height: "40px",
                  background: s.active ? "#E75300" : "rgba(255,255,255,0.1)",
                  color: s.active ? "#ffffff" : "rgba(255,255,255,0.35)",
                  fontSize: "16px",
                  fontWeight: "700",
                  fontFamily: "var(--font-body)",
                }}
              >
                {s.step}
              </div>
              <span
                style={{
                  fontSize: "18px",
                  color: s.active ? "#ffffff" : "rgba(255,255,255,0.35)",
                  fontFamily: "var(--font-body)",
                  fontWeight: s.active ? "600" : "400",
                }}
              >
                {s.label}
              </span>
              {i < 2 && (
                <ChevronRight
                  style={{
                    width: "18px",
                    height: "18px",
                    color: "rgba(255,255,255,0.2)",
                    marginLeft: "4px",
                  }}
                />
              )}
            </div>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {/* ── Step 1: Profile Selection ── */}
          {!selectedProfile && (
            <motion.div
              key="profile"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col gap-5"
            >
              {profiles.map((profile) => {
                const Icon = profile.icon;
                return (
                  <button
                    key={profile.type as string}
                    onClick={() => setSelectedProfile(profile.type)}
                    className="flex items-center text-left w-full rounded-2xl transition-all duration-200 hover:scale-[1.01]"
                    style={{
                      minHeight: "160px",
                      background: "#080511",
                      border: "1px solid rgba(255,255,255,0.1)",
                      padding: "24px 32px",
                    }}
                    onMouseEnter={(e) => {
                      (
                        e.currentTarget as HTMLButtonElement
                      ).style.borderColor = `${profile.color}50`;
                      (e.currentTarget as HTMLButtonElement).style.background =
                        "#0d0a1a";
                    }}
                    onMouseLeave={(e) => {
                      (
                        e.currentTarget as HTMLButtonElement
                      ).style.borderColor = "rgba(255,255,255,0.1)";
                      (e.currentTarget as HTMLButtonElement).style.background =
                        "#080511";
                    }}
                  >
                    <div
                      className="rounded-2xl flex items-center justify-center flex-shrink-0"
                      style={{
                        width: "80px",
                        height: "80px",
                        background: profile.bgGradient,
                        marginRight: "28px",
                      }}
                    >
                      <Icon
                        style={{
                          width: "38px",
                          height: "38px",
                          color: "#ffffff",
                        }}
                      />
                    </div>
                    <div className="flex-1">
                      <h3
                        style={{
                          fontSize: "34px",
                          fontWeight: "700",
                          color: "#ffffff",
                          fontFamily: "var(--font-headline)",
                          lineHeight: "1.2",
                          marginBottom: "8px",
                        }}
                      >
                        {profile.type}
                      </h3>
                      <p
                        style={{
                          fontSize: "22px",
                          color: "rgba(255,255,255,0.55)",
                          fontFamily: "var(--font-body)",
                          lineHeight: "1.5",
                        }}
                      >
                        {profile.description}
                      </p>
                    </div>
                    <ChevronRight
                      style={{
                        width: "32px",
                        height: "32px",
                        color: "rgba(255,255,255,0.25)",
                        flexShrink: 0,
                      }}
                    />
                  </button>
                );
              })}
            </motion.div>
          )}

          {/* ── Step 2: Portability Preference ── */}
          {selectedProfile && !showResult && (
            <motion.div
              key="preference"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              className="flex flex-col"
            >
              <p
                style={{
                  fontSize: "20px",
                  color: "#E75300",
                  marginBottom: "44px",
                  fontFamily: "var(--font-body)",
                  fontWeight: "600",
                }}
              >
                선택한 프로필:{" "}
                <span style={{ color: "#ffffff" }}>{selectedProfile}</span>
              </p>

              <div
                className="rounded-[20px] mb-8"
                style={{
                  background: "#080511",
                  border: "1px solid rgba(255,255,255,0.1)",
                  padding: "40px",
                }}
              >
                {/* Labels */}
                <div
                  className="flex justify-between mb-8"
                  style={{ fontSize: "30px" }}
                >
                  <span
                    style={{
                      fontWeight: "700",
                      fontFamily: "var(--font-headline)",
                      color:
                        portability <= 3
                          ? "#E75300"
                          : "rgba(255,255,255,0.35)",
                    }}
                  >
                    성능 우선
                  </span>
                  <span
                    style={{
                      fontWeight: "700",
                      fontFamily: "var(--font-headline)",
                      color:
                        portability >= 6
                          ? "#5B36F4"
                          : "rgba(255,255,255,0.35)",
                    }}
                  >
                    휴대성 우선
                  </span>
                </div>

                {/* Slider */}
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={portability}
                  onChange={(e) => setPortability(Number(e.target.value))}
                  className="w-full appearance-none cursor-pointer"
                  style={{
                    height: "8px",
                    borderRadius: "8px",
                    background: `linear-gradient(to right, #E75300 0%, #E75300 ${
                      ((portability - 1) / 9) * 100
                    }%, #5B36F4 ${
                      ((portability - 1) / 9) * 100
                    }%, rgba(255,255,255,0.12) 100%)`,
                    outline: "none",
                  }}
                />

                {/* Numbers */}
                <div
                  className="flex justify-between mt-5"
                  style={{ color: "rgba(255,255,255,0.3)", fontSize: "20px" }}
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                    <span
                      key={num}
                      style={{
                        color:
                          portability === num
                            ? "#ffffff"
                            : "rgba(255,255,255,0.25)",
                        fontWeight: portability === num ? "700" : "400",
                        fontFamily: "var(--font-body)",
                      }}
                    >
                      {num}
                    </span>
                  ))}
                </div>

                <p
                  className="text-center mt-10"
                  style={{
                    fontSize: "34px",
                    fontWeight: "700",
                    fontFamily: "var(--font-headline)",
                    color: "#ffffff",
                  }}
                >
                  현재 선택:{" "}
                  <span style={{ color: portabilityLabel === "휴대성 중심" ? "#5B36F4" : "#E75300" }}>{portabilityLabel}</span>
                </p>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => setSelectedProfile(null)}
                  className="rounded-2xl flex items-center justify-center transition-all hover:bg-white/10"
                  style={{
                    height: "96px",
                    fontSize: "24px",
                    fontWeight: "600",
                    color: "rgba(255,255,255,0.65)",
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    padding: "0 36px",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  프로필 다시 선택
                </button>
                <button
                  onClick={handleSubmit}
                  className="flex-1 rounded-2xl flex items-center justify-center transition-all hover:opacity-90"
                  style={{
                    height: "96px",
                    fontSize: "28px",
                    fontWeight: "700",
                    color: "#ffffff",
                    background: "linear-gradient(135deg, #E75300, #5B36F4)",
                    fontFamily: "var(--font-headline)",
                  }}
                >
                  나의 첫 소니 보기
                </button>
              </div>
            </motion.div>
          )}

          {/* ── Step 3: Result ── */}
          {showResult && (
            <motion.div
              key="result"
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12 }}
              className="flex flex-col items-center"
            >
              <div
                className="relative w-full max-w-[680px] overflow-hidden rounded-[28px]"
                style={{
                  background: "linear-gradient(180deg, #14101e 0%, #0a0712 100%)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  boxShadow:
                    "0 40px 100px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.06)",
                }}
              >
                {/* 상단 액센트 라인 */}
                <div
                  style={{
                    height: "4px",
                    background: "linear-gradient(90deg, #E75300, #5B36F4)",
                  }}
                />

                {/* 헤더 */}
                <div className="px-9 pt-8 pb-1">
                  <div className="flex items-center gap-2 mb-3">
                    <Sparkles style={{ width: "16px", height: "16px", color: "#E75300" }} />
                    <span
                      style={{
                        fontSize: "15px",
                        fontWeight: "700",
                        letterSpacing: "0.06em",
                        color: "#E75300",
                        fontFamily: "var(--font-body)",
                      }}
                    >
                      AI 추천 · {selectedProfile}
                    </span>
                  </div>
                  <div className="flex items-end justify-between">
                    <div>
                      <h3
                        style={{
                          fontSize: "56px",
                          fontWeight: "900",
                          color: "#ffffff",
                          fontFamily: "var(--font-headline)",
                          lineHeight: "1",
                          letterSpacing: "-0.02em",
                        }}
                      >
                        {recommendedModel.name}
                      </h3>
                      <p
                        style={{
                          fontSize: "21px",
                          color: "rgba(255,255,255,0.6)",
                          fontFamily: "var(--font-body)",
                          marginTop: "10px",
                        }}
                      >
                        {recommendedModel.identity}
                      </p>
                    </div>
                    <div className="flex-shrink-0 text-right">
                      <p
                        style={{
                          fontSize: "13px",
                          color: "rgba(255,255,255,0.45)",
                          fontWeight: "700",
                          letterSpacing: "0.05em",
                          fontFamily: "var(--font-body)",
                        }}
                      >
                        추천 적합도
                      </p>
                      <p
                        style={{
                          fontSize: "40px",
                          fontWeight: "900",
                          color: "#ffffff",
                          fontFamily: "var(--font-headline)",
                          lineHeight: "1",
                          marginTop: "2px",
                        }}
                      >
                        100
                        <span style={{ fontSize: "22px", color: "#E75300" }}>%</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* 제품 이미지 */}
                <div
                  className="relative mx-9 mt-6 overflow-hidden rounded-[18px]"
                  style={{
                    height: "420px",
                    background:
                      "radial-gradient(circle at 50% 35%, rgba(231,83,0,0.14), transparent 60%), linear-gradient(180deg, #1a1526 0%, #0d0a16 100%)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="relative mx-auto flex h-full w-full items-center justify-center"
                  >
                    <ImageWithFallback
                      src={recommendedModel.image}
                      alt={recommendedModel.name}
                      className="h-full w-full object-contain drop-shadow-[0_24px_40px_rgba(0,0,0,0.5)]"
                    />
                  </motion.div>

                  {/* 추천 렌즈 칩 */}
                  <div
                    className="absolute bottom-4 left-4 right-4 flex items-center gap-2 rounded-2xl"
                    style={{
                      minHeight: "48px",
                      padding: "0 18px",
                      background: "rgba(5,3,9,0.55)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      backdropFilter: "blur(14px)",
                    }}
                  >
                    <Aperture style={{ width: "18px", height: "18px", color: "#E8B49A" }} />
                    <span
                      style={{
                        fontSize: "14px",
                        color: "rgba(255,255,255,0.5)",
                        fontFamily: "var(--font-body)",
                        fontWeight: "600",
                      }}
                    >
                      추천 렌즈
                    </span>
                    <span
                      className="truncate"
                      style={{
                        fontSize: "17px",
                        color: "#fff",
                        fontFamily: "var(--font-headline)",
                        fontWeight: "800",
                        marginLeft: "auto",
                      }}
                    >
                      {recommendedModel.lens}
                    </span>
                  </div>
                </div>

                {/* 카메라 한 줄 성격 */}
                {recommendedModel.mbti && (
                  <div className="px-9 pt-8">
                    <p
                      style={{
                        fontSize: "15px",
                        fontWeight: "700",
                        color: "rgba(255,255,255,0.45)",
                        letterSpacing: "0.06em",
                        fontFamily: "var(--font-body)",
                        marginBottom: "16px",
                      }}
                    >
                      이 카메라는 이런 성격
                    </p>
                    <div
                      className="rounded-2xl p-6"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(231,83,0,0.14), rgba(91,54,244,0.14))",
                        border: "1px solid rgba(255,255,255,0.1)",
                      }}
                    >
                      <p
                        style={{
                          fontSize: "26px",
                          fontWeight: "800",
                          color: "#ffffff",
                          fontFamily: "var(--font-headline)",
                          lineHeight: "1.2",
                        }}
                      >
                        {recommendedModel.mbti.nick}
                      </p>
                      <p
                        style={{
                          fontSize: "18px",
                          color: "rgba(255,255,255,0.72)",
                          fontFamily: "var(--font-body)",
                          lineHeight: "1.5",
                          marginTop: "8px",
                        }}
                      >
                        {recommendedModel.mbti.desc}
                      </p>
                    </div>
                  </div>
                )}

                {/* 추천 이유 */}
                <div className="px-9 pt-8">
                  <p
                    style={{
                      fontSize: "15px",
                      fontWeight: "700",
                      color: "rgba(255,255,255,0.45)",
                      letterSpacing: "0.06em",
                      fontFamily: "var(--font-body)",
                      marginBottom: "16px",
                    }}
                  >
                    이 카메라를 추천하는 이유
                  </p>
                  <div className="flex flex-col gap-3">
                    {recommendedModel.reasons.map((reason: string, i: number) => (
                      <div key={i} className="flex items-center gap-3">
                        <span
                          className="flex flex-shrink-0 items-center justify-center rounded-full"
                          style={{
                            width: "26px",
                            height: "26px",
                            background: "rgba(231,83,0,0.14)",
                            border: "1px solid rgba(231,83,0,0.4)",
                          }}
                        >
                          <Check style={{ width: "15px", height: "15px", color: "#E75300" }} />
                        </span>
                        <span
                          style={{
                            fontSize: "20px",
                            color: "rgba(255,255,255,0.88)",
                            fontFamily: "var(--font-body)",
                          }}
                        >
                          {reason}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 하단: QR 저장 */}
                <div
                  className="mt-8 flex items-center justify-between gap-4 px-9 py-7"
                  style={{
                    borderTop: "1px solid rgba(255,255,255,0.08)",
                    background: "rgba(255,255,255,0.02)",
                  }}
                >
                  <div className="flex items-center gap-3">
                    <Download style={{ width: "22px", height: "22px", color: "#E75300" }} />
                    <div>
                      <p
                        style={{
                          fontSize: "18px",
                          color: "#fff",
                          fontWeight: "800",
                          fontFamily: "var(--font-headline)",
                        }}
                      >
                        휴대폰에 저장하기
                      </p>
                      <p
                        style={{
                          fontSize: "14px",
                          color: "rgba(255,255,255,0.5)",
                          fontFamily: "var(--font-body)",
                        }}
                      >
                        카메라 앱으로 QR을 스캔하세요
                      </p>
                    </div>
                  </div>
                  <div
                    className="flex flex-shrink-0 items-center justify-center rounded-[14px]"
                    style={{
                      width: "92px",
                      height: "92px",
                      background: "#fff",
                      boxShadow: "0 10px 24px rgba(0,0,0,0.4)",
                    }}
                  >
                    <QrCode style={{ width: "64px", height: "64px", color: "#080511" }} />
                  </div>
                </div>
              </div>

              <div className="mt-12 flex w-full max-w-[720px] gap-4 flex-shrink-0">
                <button
                  onClick={() => navigate(`/product/${recommendedModelId}`)}
                  className="flex-1 rounded-2xl flex items-center justify-center transition-all hover:opacity-90"
                  style={{
                    height: "72px",
                    fontSize: "22px",
                    fontWeight: "800",
                    background: "linear-gradient(135deg, #E75300 0%, #5B36F4 100%)",
                    color: "#ffffff",
                    fontFamily: "var(--font-headline)",
                  }}
                >
                  상세 정보 보기
                </button>
                <button
                  onClick={() => navigate("/lineup")}
                  className="rounded-2xl flex items-center justify-center transition-all hover:bg-white/10"
                  style={{
                    height: "72px",
                    fontSize: "19px",
                    fontWeight: "700",
                    border: "1px solid rgba(255,255,255,0.2)",
                    color: "#ffffff",
                    fontFamily: "var(--font-body)",
                    padding: "0 28px",
                    background: "rgba(255,255,255,0.06)",
                  }}
                >
                  다른 모델 비교
                </button>
                <button
                  onClick={resetQuiz}
                  className="rounded-2xl flex items-center justify-center transition-all hover:bg-white/10"
                  style={{
                    height: "72px",
                    fontSize: "19px",
                    fontWeight: "700",
                    border: "1px solid rgba(255,255,255,0.16)",
                    color: "rgba(255,255,255,0.68)",
                    fontFamily: "var(--font-body)",
                    padding: "0 28px",
                    background: "transparent",
                  }}
                >
                  다시 추천받기
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

