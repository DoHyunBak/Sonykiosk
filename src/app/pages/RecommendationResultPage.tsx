import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Check, Camera, ChevronRight } from "lucide-react";
import { motion } from "motion/react";

export function RecommendationResultPage() {
  const navigate = useNavigate();
  const [recommendation, setRecommendation] = useState<any>(null);

  useEffect(() => {
    const stored = sessionStorage.getItem("recommendation");
    if (stored) {
      const data = JSON.parse(stored);
      let modelId = "a7c2";
      if (data.useCase === 1) {
        modelId = "a7m4";
      } else if (data.useCase === 2) {
        modelId = "a7cr";
      } else if (data.portability >= 7) {
        modelId = "a7c";
      } else if (data.portability >= 5) {
        modelId = "a7c2";
      }
      setRecommendation({ ...data, modelId });
    }
  }, []);

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
      lensRecommendations: [
        { name: "FE 28-60mm F4-5.6", desc: "가볍고 휴대성 좋은 기본 렌즈" },
        { name: "FE 24-70mm F2.8 GM II", desc: "만능 표준 줌 렌즈" },
      ],
    },
    a7c2: {
      name: "α7C II",
      identity: "가볍게 시작하는 풀프레임",
      image:
        "https://images.unsplash.com/photo-1722842179085-5423886195ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      reasons: [
        "가볍게 들고 다니기 좋음",
        "AI 눈 AF로 초점 실패 방지",
        "입문자도 쉽게 좋은 결과",
      ],
      lensRecommendations: [
        { name: "FE 28-60mm F4-5.6", desc: "가볍고 휴대성 좋은 기본 렌즈" },
        { name: "FE 24-70mm F2.8 GM II", desc: "만능 표준 줌 렌즈" },
      ],
    },
    a7cr: {
      name: "α7CR",
      identity: "작고 강한 고화질 선택",
      image:
        "https://images.unsplash.com/photo-1722842179085-5423886195ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      reasons: [
        "61MP 고해상도 이미지",
        "컴팩트 바디에 최고 화질",
        "크롭해도 충분한 디테일",
      ],
      lensRecommendations: [
        { name: "FE 24-70mm F2.8 GM II", desc: "만능 표준 줌 렌즈" },
        { name: "FE 85mm F1.4 GM", desc: "인물 촬영의 명렌즈" },
      ],
    },
    a7m4: {
      name: "α7 IV",
      identity: "가장 균형 잡힌 올라운드",
      image:
        "https://images.unsplash.com/photo-1761896895290-c2a2b5f4c862?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      reasons: [
        "사진과 영상 모두 강력함",
        "33MP 고해상도",
        "4K 60p 영상 촬영 가능",
      ],
      lensRecommendations: [
        { name: "FE 24-70mm F2.8 GM II", desc: "만능 표준 줌 렌즈" },
        { name: "FE 70-200mm F2.8 GM OSS II", desc: "망원 줌의 정석" },
      ],
    },
  };

  if (!recommendation) {
    return (
      <div
        className="flex flex-col items-center justify-center text-white"
        style={{ height: "100%", background: "#1A1A1F" }}
      >
        <div className="text-center">
          <p
            style={{
              fontSize: "20px",
              color: "rgba(255,255,255,0.5)",
              marginBottom: "24px",
              fontFamily: "var(--font-body)",
            }}
          >
            추천을 위한 정보가 없습니다
          </p>
          <button
            onClick={() => navigate("/recommendation")}
            className="rounded-2xl transition-all hover:opacity-90"
            style={{
              height: "56px",
              padding: "0 32px",
              fontSize: "16px",
              fontWeight: "600",
              background: "linear-gradient(135deg, #E75300 0%, #5B36F4 100%)",
              color: "#ffffff",
              fontFamily: "var(--font-body)",
            }}
          >
            추천받기 시작하기
          </button>
        </div>
      </div>
    );
  }

  const model = models[recommendation.modelId] || models["a7c2"];

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
        className="h-full flex flex-col justify-center overflow-hidden relative z-10"
        style={{ padding: "4px 36px 28px" }}
      >
        {/* Result Card */}
        <div
          className="rounded-[32px] overflow-hidden mb-8"
          style={{
            background: "linear-gradient(135deg, rgba(26,21,44,0.7) 0%, rgba(8,5,17,0.85) 100%)",
            border: "1px solid rgba(255, 255, 255, 0.12)",
            backdropFilter: "blur(24px)",
            boxShadow: "0 30px 60px -15px rgba(0, 0, 0, 0.7), inset 0 1px 2px rgba(255, 255, 255, 0.08)",
            padding: "48px",
          }}
        >
          <div className="grid grid-cols-2 gap-10 items-center">
            {/* Image Showcase Stage */}
            <div
              className="rounded-2xl flex items-center justify-center relative overflow-hidden"
              style={{
                background: "radial-gradient(circle at center, rgba(231,83,0,0.15) 0%, rgba(8,5,17,0.4) 100%)",
                border: "1px solid rgba(255, 255, 255, 0.06)",
                padding: "36px",
                height: "360px",
              }}
            >
              {/* Subtle background glow */}
              <div
                className="absolute rounded-full pointer-events-none"
                style={{
                  width: "240px",
                  height: "240px",
                  background: "radial-gradient(circle, rgba(231,83,0,0.18) 0%, rgba(231,83,0,0) 70%)",
                  filter: "blur(20px)",
                }}
              />

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="aspect-square flex items-center justify-center"
                style={{ width: "100%", maxWidth: "260px", zIndex: 2 }}
              >
                <ImageWithFallback
                  src={model.image}
                  alt={model.name}
                  className="w-full h-full object-contain"
                />
              </motion.div>
            </div>

            {/* Info */}
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Camera
                  style={{ width: "24px", height: "24px", color: "#E75300" }}
                />
                <h2
                  style={{
                    fontSize: "56px",
                    fontWeight: "800",
                    color: "#ffffff",
                    fontFamily: "var(--font-headline)",
                    letterSpacing: "-0.03em",
                    lineHeight: "1.1",
                  }}
                >
                  {model.name}
                </h2>
              </div>
              <p
                style={{
                  fontSize: "22px",
                  fontWeight: "600",
                  color: "#E8B49A",
                  marginBottom: "28px",
                  fontFamily: "var(--font-body)",
                }}
              >
                {model.identity}
              </p>

              <div className="space-y-4">
                {model.reasons.map((reason: string, idx: number) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div
                      className="rounded-full flex items-center justify-center flex-shrink-0"
                      style={{
                        width: "28px",
                        height: "28px",
                        background: "rgba(231, 83, 0, 0.15)",
                        border: "1px solid rgba(231, 83, 0, 0.4)",
                        marginTop: "3px",
                      }}
                    >
                      <Check
                        style={{
                          width: "14px",
                          height: "14px",
                          color: "#E75300",
                        }}
                      />
                    </div>
                    <p
                      style={{
                        fontSize: "20px",
                        fontWeight: "500",
                        color: "rgba(255, 255, 255, 0.9)",
                        fontFamily: "var(--font-body)",
                      }}
                    >
                      {reason}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Lens Recommendations */}
        <div className="mb-6">
          <h3
            style={{
              fontSize: "22px",
              fontWeight: "700",
              color: "#ffffff",
              fontFamily: "var(--font-headline)",
              marginBottom: "12px",
            }}
          >
            함께 추천하는 렌즈
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {model.lensRecommendations.map((lens: any, idx: number) => (
              <div
                key={idx}
                className="rounded-2xl transition-all duration-300"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  padding: "20px 24px",
                }}
              >
                <h4
                  style={{
                    fontSize: "18px",
                    fontWeight: "700",
                    color: "#ffffff",
                    fontFamily: "var(--font-headline)",
                    marginBottom: "6px",
                  }}
                >
                  {lens.name}
                </h4>
                <p
                  style={{
                    fontSize: "15px",
                    color: "#E8B49A",
                    fontFamily: "var(--font-body)",
                    fontWeight: "500",
                  }}
                >
                  {lens.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-3">
          <button
            onClick={() => navigate(`/product/${recommendation.modelId}`)}
            className="flex items-center justify-center gap-2 rounded-2xl transition-all hover:opacity-90 flex-1"
            style={{
              height: "64px",
              fontSize: "20px",
              fontWeight: "700",
              background: "linear-gradient(135deg, #E75300 0%, #5B36F4 100%)",
              color: "#ffffff",
              fontFamily: "var(--font-headline)",
            }}
          >
            상세 정보 보기
            <ChevronRight style={{ width: "18px", height: "18px" }} />
          </button>
          <button
            onClick={() => navigate("/lineup")}
            className="flex items-center justify-center rounded-2xl transition-all hover:bg-white/10"
            style={{
              height: "64px",
              fontSize: "16px",
              fontWeight: "500",
              border: "1px solid rgba(255,255,255,0.2)",
              color: "#ffffff",
              padding: "0 24px",
              fontFamily: "var(--font-body)",
              background: "transparent",
            }}
          >
            다른 모델 비교
          </button>
          <button
            onClick={() => navigate("/recommendation")}
            className="flex items-center justify-center rounded-2xl transition-all hover:bg-white/10"
            style={{
              height: "64px",
              fontSize: "16px",
              fontWeight: "500",
              border: "1px solid rgba(255,255,255,0.2)",
              color: "#ffffff",
              padding: "0 24px",
              fontFamily: "var(--font-body)",
              background: "transparent",
            }}
          >
            다시 추천받기
          </button>
        </div>
      </div>
    </div>
  );
}
