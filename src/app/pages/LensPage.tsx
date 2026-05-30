import { useRef, useEffect } from "react";
import eMountVideo from "../../imports/e_mount.mp4";

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
const TOTAL_DURATION = brands.length * 0.8; // 속도 약 2.5배 향상

export function LensPage() {
  const listH = brands.length * ITEM_H;
  const containerRef = useRef<HTMLDivElement>(null);
  const yRef = useRef(-listH);
  const isDraggingRef = useRef(false);
  const animFrameId = useRef<number | null>(null);
  const lastPY = useRef(0);
  const lastTimeRef = useRef<number>(0);

  function updateDOM(yVal: number) {
    if (containerRef.current) {
      containerRef.current.style.transform = `translate3d(0, ${yVal}px, 0)`;
    }
  }

  function tick(timestamp: number) {
    if (isDraggingRef.current) return;
    if (!lastTimeRef.current) lastTimeRef.current = timestamp;

    const elapsed = timestamp - lastTimeRef.current;
    lastTimeRef.current = timestamp;

    // 속도 계산: TOTAL_DURATION(초) 동안 listH(px)만큼 이동
    const speedPxPerMs = listH / (TOTAL_DURATION * 1000);
    
    yRef.current += speedPxPerMs * elapsed;
    if (yRef.current >= 0) {
      yRef.current -= listH;
    }

    updateDOM(yRef.current);
    animFrameId.current = requestAnimationFrame(tick);
  }

  useEffect(() => {
    updateDOM(yRef.current);

    // 컴포넌트 마운트 및 라우트 이동 후 안정적으로 애니메이션 시작하도록 지연 실행
    const timer = setTimeout(() => {
      lastTimeRef.current = 0;
      animFrameId.current = requestAnimationFrame(tick);
    }, 50);

    return () => {
      clearTimeout(timer);
      if (animFrameId.current) {
        cancelAnimationFrame(animFrameId.current);
      }
    };
  }, []);

  // ── 포인터 이벤트 ──────────────────────────────
  const handlePointerDown = (e: React.PointerEvent) => {
    isDraggingRef.current = true;
    lastPY.current = e.clientY;
    if (animFrameId.current) {
      cancelAnimationFrame(animFrameId.current);
      animFrameId.current = null;
    }
    lastTimeRef.current = 0;
    (e.currentTarget as Element).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDraggingRef.current) return;
    const delta = e.clientY - lastPY.current;
    lastPY.current = e.clientY;
    
    yRef.current += delta;
    // 위아래 드래그 범위 제한
    yRef.current = Math.max(-listH * 1.5, Math.min(listH * 0.5, yRef.current));
    updateDOM(yRef.current);
  };

  const handlePointerUp = () => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    
    // 위치 정규화
    let norm = yRef.current % listH;
    if (norm > 0) norm -= listH;
    yRef.current = norm;
    updateDOM(yRef.current);
    
    lastTimeRef.current = 0;
    animFrameId.current = requestAnimationFrame(tick);
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
      {/* 배경 동영상 */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: 0.6 }}
      >
        <source src={eMountVideo} type="video/mp4" />
      </video>

      {/* 짙은 오버레이 */}
      <div
        className="absolute inset-0"
        style={{ background: "rgba(5, 3, 9, 0.55)" }}
      />

      {/* Main Content Layout */}
      <div
        className="h-full flex flex-col justify-start overflow-hidden relative z-10"
        style={{ padding: "56px 40px 32px" }}
      >
        {/* Page Title / Question */}
        <h2
          style={{
            fontSize: "36px",
            fontWeight: "700",
            color: "#ffffff",
            fontFamily: "var(--font-headline)",
            letterSpacing: "-0.02em",
            marginBottom: "40px",
            textAlign: "center",
            textShadow: "0 2px 10px rgba(0,0,0,0.85)",
          }}
        >
          소니카메라의 E-MOUNT 호환성
        </h2>

        {/* 크레딧 스크롤 영역 */}
        <div className="overflow-hidden flex-shrink-0">
          <div
            style={{
              height: "1400px",
              position: "relative",
            }}
          >
            <div
              className="w-full h-full relative overflow-hidden"
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
              <div
                ref={containerRef}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  willChange: "transform",
                }}
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
