import { useState } from "react";
import { useNavigate } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import {
  Check,
  Camera,
  Plane,
  Image as ImageIcon,
  Video,
  QrCode,
  Download,
  ChevronRight,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

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
    image:
      "https://images.unsplash.com/photo-1722842179085-5423886195ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    reasons: [
      "가장 가벼운 풀프레임",
      "직관적인 초보자 인터페이스",
      "여행에 최적화된 크기",
    ],
    lens: "FE 28-60mm F4-5.6",
  },
  a7c2: {
    name: "α7C II",
    identity: "가볍게 시작하는 풀프레임",
    image:
      "https://images.unsplash.com/photo-1758613655205-d9bcdba2404d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    reasons: [
      "가볍게 들고 다니기 좋음",
      "AI 눈 AF로 초점 실패 방지",
      "입문자도 쉽게 좋은 결과",
    ],
    lens: "FE 28-60mm F4-5.6",
  },
  a7cr: {
    name: "α7CR",
    identity: "작고 강한 고화질 선택",
    image:
      "https://images.unsplash.com/photo-1758613655205-d9bcdba2404d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    reasons: [
      "61MP 고해상도 이미지",
      "컴팩트 바디에 최고 화질",
      "크롭해도 충분한 디테일",
    ],
    lens: "FE 24-70mm F2.8 GM II",
  },
  a7m4: {
    name: "α7 IV",
    identity: "가장 균형 잡힌 올라운드",
    image:
      "https://images.unsplash.com/photo-1761896895290-c2a2b5f4c862?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    reasons: ["사진과 영상 모두 강력함", "33MP 고해상도", "4K 60p 영상 촬영 가능"],
    lens: "FE 24-70mm F2.8 GM II",
  },
  a7m5: {
    name: "α7 V",
    identity: "최신 AI 프로세서 탑재",
    image:
      "https://images.unsplash.com/photo-1761896895290-c2a2b5f4c862?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    reasons: [
      "차세대 AI 피사체 인식",
      "8K 영상 촬영 지원",
      "최신 기술의 집약체",
    ],
    lens: "FE 24-70mm F2.8 GM II",
  },
  a7r5: {
    name: "α7R V",
    identity: "최고 성능의 고화질 선택",
    image:
      "https://images.unsplash.com/photo-1758613655205-d9bcdba2404d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    reasons: [
      "61MP 프로페셔널 화질",
      "AI 기반 자동 초점",
      "전문가급 성능과 내구성",
    ],
    lens: "FE 24-70mm F2.8 GM II",
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
      : portability >= 7
      ? "휴대성 중심"
      : "균형 중시";

  return (
    <div
      className="text-white overflow-hidden"
      style={{ height: "100%", background: "#1A1A1F" }}
    >
      <div
        className="h-full flex flex-col overflow-hidden"
        style={{ padding: "32px 40px 36px" }}
      >
        {/* Step Indicator */}
        <div className="flex items-center gap-5 mb-8 flex-shrink-0">
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
              className="flex flex-col gap-5 flex-1 justify-center"
            >
              <h2
                style={{
                  fontSize: "36px",
                  fontWeight: "700",
                  color: "#ffffff",
                  fontFamily: "var(--font-headline)",
                  letterSpacing: "-0.02em",
                  marginBottom: "8px",
                }}
              >
                어떤 사진을 찍고 싶으세요?
              </h2>
              {profiles.map((profile) => {
                const Icon = profile.icon;
                return (
                  <button
                    key={profile.type as string}
                    onClick={() => setSelectedProfile(profile.type)}
                    className="flex items-center text-left w-full rounded-[28px] transition-all duration-200 hover:scale-[1.01]"
                    style={{
                      minHeight: "200px",
                      background: "#080511",
                      border: "1px solid rgba(255,255,255,0.1)",
                      padding: "36px 44px",
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
                      className="rounded-3xl flex items-center justify-center flex-shrink-0"
                      style={{
                        width: "100px",
                        height: "100px",
                        background: profile.bgGradient,
                        marginRight: "36px",
                      }}
                    >
                      <Icon
                        style={{
                          width: "48px",
                          height: "48px",
                          color: "#ffffff",
                        }}
                      />
                    </div>
                    <div className="flex-1">
                      <h3
                        style={{
                          fontSize: "40px",
                          fontWeight: "700",
                          color: "#ffffff",
                          fontFamily: "var(--font-headline)",
                          lineHeight: "1.2",
                          marginBottom: "12px",
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
              className="flex flex-col flex-1 justify-center"
            >
              <h2
                style={{
                  fontSize: "36px",
                  fontWeight: "700",
                  color: "#ffffff",
                  fontFamily: "var(--font-headline)",
                  letterSpacing: "-0.02em",
                  marginBottom: "10px",
                }}
              >
                어느 쪽이 더 중요한가요?
              </h2>
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
                className="rounded-[32px] mb-8"
                style={{
                  background: "#080511",
                  border: "1px solid rgba(255,255,255,0.1)",
                  padding: "52px",
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
                        portability >= 7
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
                  <span style={{ color: "#E75300" }}>{portabilityLabel}</span>
                </p>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => setSelectedProfile(null)}
                  className="rounded-[20px] flex items-center justify-center transition-all hover:bg-white/10"
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
                  className="flex-1 rounded-[20px] flex items-center justify-center transition-all hover:opacity-90"
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
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col flex-1 overflow-hidden"
            >
              {/* Result Card */}
              <div
                className="rounded-3xl mb-5 relative overflow-hidden flex-shrink-0"
                style={{
                  background: "#ffffff",
                  padding: "32px",
                }}
              >
                {/* Decorative gradient */}
                <div
                  className="absolute top-0 right-0 pointer-events-none"
                  style={{
                    width: "300px",
                    height: "300px",
                    background:
                      "radial-gradient(circle, rgba(231,83,0,0.08) 0%, transparent 70%)",
                  }}
                />

                <div className="relative">
                  {/* Header row */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-4">
                      {(() => {
                        const profile = profiles.find(
                          (p) => p.type === selectedProfile
                        );
                        if (!profile) return null;
                        const Icon = profile.icon;
                        return (
                          <>
                            <div
                              className="rounded-xl flex items-center justify-center"
                              style={{
                                width: "48px",
                                height: "48px",
                                background: profile.bgGradient,
                              }}
                            >
                              <Icon
                                style={{
                                  width: "22px",
                                  height: "22px",
                                  color: "#ffffff",
                                }}
                              />
                            </div>
                            <div>
                              <p
                                style={{
                                  fontSize: "16px",
                                  color: "#9ca3af",
                                  fontFamily: "var(--font-body)",
                                }}
                              >
                                선택한 프로필
                              </p>
                              <p
                                style={{
                                  fontSize: "22px",
                                  fontWeight: "700",
                                  color: "#080511",
                                  fontFamily: "var(--font-headline)",
                                }}
                              >
                                {selectedProfile}
                              </p>
                            </div>
                          </>
                        );
                      })()}
                    </div>
                    <div className="text-right">
                      <p
                        style={{
                          fontSize: "18px",
                          color: "#9ca3af",
                          fontFamily: "var(--font-body)",
                        }}
                      >
                        2026.05.08
                      </p>
                      <p
                        style={{
                          fontSize: "20px",
                          fontWeight: "600",
                          color: "#6b7280",
                          fontFamily: "var(--font-body)",
                        }}
                      >
                        Sony α7 팝업스토어
                      </p>
                    </div>
                  </div>

                  {/* Main content: 3 columns */}
                  <div
                    className="grid gap-6"
                    style={{ gridTemplateColumns: "1fr auto auto" }}
                  >
                    {/* Left: model info + reasons */}
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <Camera
                          style={{
                            width: "22px",
                            height: "22px",
                            color: "#080511",
                          }}
                        />
                        <h2
                          style={{
                            fontSize: "60px",
                            fontWeight: "800",
                            color: "#080511",
                            fontFamily: "var(--font-headline)",
                            letterSpacing: "-0.02em",
                            lineHeight: "1.0",
                          }}
                        >
                          {recommendedModel.name}
                        </h2>
                      </div>
                      <p
                        style={{
                          fontSize: "22px",
                          fontWeight: "600",
                          color: "#E75300",
                          marginBottom: "20px",
                          fontFamily: "var(--font-body)",
                        }}
                      >
                        {recommendedModel.identity}
                      </p>

                      {/* Reasons */}
                      <div style={{ marginBottom: "20px" }}>
                        {recommendedModel.reasons.map(
                          (reason: string, idx: number) => (
                            <div
                              key={idx}
                              className="flex items-start gap-3"
                              style={{ marginBottom: "10px" }}
                            >
                              <div
                                className="rounded-full flex items-center justify-center flex-shrink-0"
                                style={{
                                  width: "26px",
                                  height: "26px",
                                  background: "#080511",
                                  marginTop: "2px",
                                }}
                              >
                                <Check
                                  style={{
                                    width: "13px",
                                    height: "13px",
                                    color: "#ffffff",
                                  }}
                                />
                              </div>
                              <p
                                style={{
                                  fontSize: "20px",
                                  fontWeight: "500",
                                  color: "#374151",
                                  fontFamily: "var(--font-body)",
                                }}
                              >
                                {reason}
                              </p>
                            </div>
                          )
                        )}
                      </div>

                      {/* Lens recommendation */}
                      <div
                        className="rounded-2xl"
                        style={{
                          background: "#f3f4f6",
                          padding: "16px 20px",
                        }}
                      >
                        <p
                          style={{
                            fontSize: "14px",
                            color: "#9ca3af",
                            marginBottom: "4px",
                            fontFamily: "var(--font-body)",
                          }}
                        >
                          추천 렌즈
                        </p>
                        <p
                          style={{
                            fontSize: "20px",
                            fontWeight: "700",
                            color: "#080511",
                            fontFamily: "var(--font-headline)",
                          }}
                        >
                          {recommendedModel.lens}
                        </p>
                      </div>
                    </div>

                    {/* Center: Product Image */}
                    <div
                      className="rounded-2xl flex items-center justify-center"
                      style={{
                        width: "200px",
                        background: "#f3f4f6",
                        padding: "20px",
                        alignSelf: "start",
                      }}
                    >
                      <div
                        className="aspect-square"
                        style={{ width: "160px" }}
                      >
                        <ImageWithFallback
                          src={recommendedModel.image}
                          alt={recommendedModel.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>

                    {/* Right: QR Code */}
                    <div
                      className="rounded-2xl flex flex-col items-center"
                      style={{
                        width: "200px",
                        background: "#080511",
                        padding: "20px",
                        alignSelf: "start",
                      }}
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <Download
                          style={{
                            width: "18px",
                            height: "18px",
                            color: "#E75300",
                          }}
                        />
                        <p
                          style={{
                            fontSize: "16px",
                            fontWeight: "700",
                            color: "#ffffff",
                            fontFamily: "var(--font-headline)",
                          }}
                        >
                          휴대폰 저장
                        </p>
                      </div>
                      <div
                        className="rounded-xl flex items-center justify-center mb-3"
                        style={{
                          background: "#ffffff",
                          width: "140px",
                          height: "140px",
                        }}
                      >
                        <div
                          className="flex items-center justify-center rounded-lg"
                          style={{
                            width: "100px",
                            height: "100px",
                            background: "#080511",
                          }}
                        >
                          <QrCode
                            style={{
                              width: "60px",
                              height: "60px",
                              color: "#ffffff",
                            }}
                          />
                        </div>
                      </div>
                      <p
                        style={{
                          fontSize: "14px",
                          color: "rgba(255,255,255,0.4)",
                          fontFamily: "var(--font-body)",
                          lineHeight: "1.5",
                          textAlign: "center",
                        }}
                      >
                        카메라 앱으로
                        <br />
                        스캔하세요
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex gap-4 flex-shrink-0">
                <button
                  onClick={() => navigate(`/product/${recommendedModelId}`)}
                  className="flex-1 rounded-2xl flex items-center justify-center transition-all hover:opacity-90"
                  style={{
                    height: "88px",
                    fontSize: "26px",
                    fontWeight: "700",
                    background:
                      "linear-gradient(135deg, #E75300 0%, #5B36F4 100%)",
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
                    height: "88px",
                    fontSize: "22px",
                    fontWeight: "600",
                    border: "1px solid rgba(255,255,255,0.2)",
                    color: "#ffffff",
                    fontFamily: "var(--font-body)",
                    padding: "0 32px",
                    background: "transparent",
                  }}
                >
                  다른 모델 비교
                </button>
                <button
                  onClick={resetQuiz}
                  className="rounded-2xl flex items-center justify-center transition-all hover:bg-white/10"
                  style={{
                    height: "88px",
                    fontSize: "22px",
                    fontWeight: "600",
                    border: "1px solid rgba(255,255,255,0.2)",
                    color: "rgba(255,255,255,0.6)",
                    fontFamily: "var(--font-body)",
                    padding: "0 32px",
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
  );
}
