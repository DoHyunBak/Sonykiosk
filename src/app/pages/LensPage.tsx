import { useRef, useEffect } from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { motion, useMotionValue, animate } from "motion/react";

const brands = [
  { name: "Sony G Master", sub: "최고급 렌즈 라인 · 압도적 해상력 · 방진방습" },
  { name: "Sony G Lens", sub: "전문가용 고성능 · 탁월한 가성비" },
  { name: "Sony Zeiss", sub: "Vario-Tessar · Sonnar · 독일 광학 기술" },
  { name: "Zeiss Batis", sub: "자동 초점 · 방진방습 · 85mm / 18mm / 135mm" },
  { name: "Zeiss Loxia", sub: "수동 초점 · 소형 경량 · 21~85mm 라인업" },
  { name: "Tamron", sub: "17-28mm · 28-75mm · 70-180mm f/2.8" },
  { name: "Sigma Art", sub: "최고의 광학 성능 · 전문가의 선택" },
  { name: "Sigma Contemporary", sub: "경량 컴팩트 · 일상 · 여행 최적화" },
  { name: "Sigma Sports", sub: "초망원 · 스포츠 · 야생동물 전문" },
  { name: "Samyang", sub: "AF 35mm · 75mm · 135mm · 12mm f/2.0" },
  { name: "Voigtländer", sub: "Nokton · Ultron · Color-Skopar" },
  { name: "Venus Optics Laowa", sub: "매크로 · 광각 · 독창적 광학 설계" },
  { name: "Tokina atx-m", sub: "11-18mm · 23mm · 33mm · 85mm f/1.8" },
  { name: "Irix", sub: "Firefly · Blackstone · 초광각 수동 렌즈" },
  { name: "7Artisans", sub: "35mm · 50mm · 85mm · 합리적 수동 렌즈" },
  { name: "TTArtisan", sub: "50mm f/0.95 · 85mm f/1.8 · 다양한 화각" },
];

const ITEM_H = 180;
const TOTAL_DURATION = brands.length * 4; // 초당 속도 기준

export function LensPage() {
  const listH = brands.length * ITEM_H;
  const y = useMotionValue(-listH);
  const isDraggingRef = useRef(false);
  const animRef = useRef<ReturnType<typeof animate> | null>(null);
  const lastPY = useRef(0);

  // 현재 y 위치에서 자동 스크롤 시작 (0 향해 이동)
  function startLoop(fromY: number) {
    // [-listH, 0] 범위로 정규화
    let norm = fromY % listH;
    if (norm > 0) norm -= listH;
    y.set(norm);

    const progress = (norm + listH) / listH; // 0 = 시작, 1 = 끝
    const remaining = Math.max(0.5, (1 - progress) * TOTAL_DURATION);

    animRef.current?.stop();
    animRef.current = animate(y, 0, {
      duration: remaining,
      ease: "linear",
      onComplete: () => {
        if (!isDraggingRef.current) {
          y.set(-listH);
          startLoop(-listH);
        }
      },
    });
  }

  useEffect(() => {
    startLoop(-listH);
    return () => animRef.current?.stop();
  }, []);

  // ── 포인터 이벤트 ──────────────────────────────
  const handlePointerDown = (e: React.PointerEvent) => {
    isDraggingRef.current = true;
    lastPY.current = e.clientY;
    animRef.current?.stop();
    (e.currentTarget as Element).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDraggingRef.current) return;
    const delta = e.clientY - lastPY.current;
    lastPY.current = e.clientY;
    // 위아래 스크롤 허용, 양쪽 끝에서 살짝 저항(rubber band)
    const cur = y.get();
    const next = cur + delta;
    const clamped = Math.max(-listH * 1.4, Math.min(listH * 0.1, next));
    y.set(clamped);
  };

  const handlePointerUp = () => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    startLoop(y.get());
  };

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
        src="/src/imports/E마운트.png"
        alt="소니 E-마운트 렌즈 생태계"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: 0.28 }}
      />

      {/* 짙은 오버레이 */}
      <div
        className="absolute inset-0"
        style={{ background: "rgba(5, 3, 9, 0.82)" }}
      />

      {/* 크레딧 스크롤 영역 */}
      <div
        className="absolute inset-0"
        style={{
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
          cursor: "grab",
          touchAction: "none",
        }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        <motion.div
          style={{ y, display: "flex", flexDirection: "column", alignItems: "center" }}
        >
          {[...brands, ...brands].map((brand, i) => (
            <div
              key={i}
              style={{
                height: `${ITEM_H}px`,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                padding: "0 80px",
                width: "100%",
                userSelect: "none",
              }}
            >
              <p
                style={{
                  fontSize: "58px",
                  fontWeight: "700",
                  color: "#ffffff",
                  fontFamily: "var(--font-headline)",
                  letterSpacing: "-0.02em",
                  lineHeight: "1.1",
                  marginBottom: "10px",
                }}
              >
                {brand.name}
              </p>
              <p
                style={{
                  fontSize: "24px",
                  color: "rgba(255,255,255,0.42)",
                  fontFamily: "var(--font-body)",
                  lineHeight: "1.4",
                  letterSpacing: "0.01em",
                }}
              >
                {brand.sub}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
