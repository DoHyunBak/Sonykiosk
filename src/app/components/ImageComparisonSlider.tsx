import { useState, useRef, useEffect } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ImageComparisonSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  /** CSS filter string for the "before" (left) side. If provided, overrides the default bokeh blur effect. */
  beforeFilter?: string;
  /** CSS filter string for the "after" (right) side. If provided, overrides the default bokeh blur effect. */
  afterFilter?: string;
}

// 확대 비교(루페) 설정
const LOUPE_SIZE = 460; // 원형 루페 지름(px)
const LOUPE_ZOOM = 2.4; // 확대 배율
const LOUPE_FOCUS_Y = 0.45; // 초기 세로 초점 위치(피사체 중심)

const clamp = (v: number, lo: number, hi: number) => Math.max(lo, Math.min(hi, v));

export function ImageComparisonSlider({
  beforeImage,
  afterImage,
  beforeLabel = "스마트폰",
  afterLabel = "카메라",
  beforeFilter,
  afterFilter,
}: ImageComparisonSliderProps) {
  const [size, setSize] = useState({ w: 0, h: 0 });
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // 컨테이너 실제 크기 추적
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const update = () => setSize({ w: el.clientWidth, h: el.clientHeight });
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const moveTo = (clientX: number, clientY: number) => {
    const el = containerRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    // 확대 콘텐츠가 루페를 항상 채우도록 초점 좌표를 가장자리에서 제한
    const margin = LOUPE_SIZE / (2 * LOUPE_ZOOM);
    const x = clamp(clientX - r.left, margin, r.width - margin);
    const y = clamp(clientY - r.top, margin, r.height - margin);
    setPos({ x, y });
  };

  const onPointerDown = (e: React.PointerEvent) => {
    setIsPressed(true);
    setHasInteracted(true);
    moveTo(e.clientX, e.clientY);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!isPressed) return;
    moveTo(e.clientX, e.clientY);
  };
  const onPointerUp = () => setIsPressed(false);

  // Whether to use the custom filter mode (non-bokeh tabs)
  const useFilterMode = beforeFilter !== undefined || afterFilter !== undefined;

  // 한쪽(before/after) 전체 화면 레이어
  const renderSide = (which: "before" | "after") => {
    if (useFilterMode) {
      const isBefore = which === "before";
      return (
        <ImageWithFallback
          src={isBefore ? beforeImage : afterImage}
          alt={isBefore ? beforeLabel : afterLabel}
          className="w-full h-full object-cover"
          style={{
            filter: isBefore ? beforeFilter : afterFilter,
            // 스마트폰(before)은 저해상도 소스를 블록처럼 확대 → 해상도 저하 표현
            imageRendering: isBefore ? "pixelated" : undefined,
          }}
        />
      );
    }

    // 기본 보케 모드 (필터 미지정 시)
    if (which === "before") {
      return (
        <div className="absolute inset-0">
          <div className="absolute inset-0" style={{ filter: "blur(3px)", transform: "scale(1.02)" }}>
            <ImageWithFallback src={beforeImage} alt={beforeLabel} className="w-full h-full object-cover" />
          </div>
          <div
            className="absolute inset-0"
            style={{
              WebkitMaskImage: "radial-gradient(ellipse 45% 60% at 50% 45%, black 35%, transparent 75%)",
              maskImage: "radial-gradient(ellipse 45% 60% at 50% 45%, black 35%, transparent 75%)",
            }}
          >
            <ImageWithFallback src={beforeImage} alt={beforeLabel} className="w-full h-full object-cover" />
          </div>
        </div>
      );
    }
    return (
      <div className="absolute inset-0">
        <div className="absolute inset-0" style={{ filter: "blur(12px)", transform: "scale(1.06)" }}>
          <ImageWithFallback src={beforeImage} alt={afterLabel} className="w-full h-full object-cover" />
        </div>
        <div
          className="absolute inset-0"
          style={{
            WebkitMaskImage: "radial-gradient(ellipse 42% 58% at 50% 45%, black 30%, transparent 70%)",
            maskImage: "radial-gradient(ellipse 42% 58% at 50% 45%, black 30%, transparent 70%)",
          }}
        >
          <ImageWithFallback src={beforeImage} alt={afterLabel} className="w-full h-full object-cover" />
        </div>
      </div>
    );
  };

  // 루페 초점 좌표 (없으면 중앙)
  const fx = pos ? pos.x : size.w / 2;
  const fy = pos ? pos.y : size.h * LOUPE_FOCUS_Y;

  // 확대 콘텐츠 wrapper 공통 transform (초점이 루페 중앙에 오도록)
  const zoomTransform = `translate(${LOUPE_SIZE / 2 - fx * LOUPE_ZOOM}px, ${
    LOUPE_SIZE / 2 - fy * LOUPE_ZOOM
  }px) scale(${LOUPE_ZOOM})`;
  const zoomWrapperStyle: React.CSSProperties = {
    width: `${size.w}px`,
    height: `${size.h}px`,
    transformOrigin: "0 0",
    transform: zoomTransform,
  };

  return (
    <div className="relative w-full h-full">
      <div
        ref={containerRef}
        className="relative w-full h-full overflow-hidden select-none cursor-pointer touch-none"
        style={{ backgroundColor: "#111" }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
      >
        {/* 베이스 전체 화면: 소니(after) 룩 */}
        <div className="absolute inset-0">{renderSide("after")}</div>

        {/* 확대 비교 루페: 터치 지점에 원이 나타나고 좌(스마트폰)/우(소니)로 갈려 차이를 보여줌 */}
        {size.w > 0 && (
          <div
            className="absolute z-30 pointer-events-none overflow-hidden"
            style={{
              left: `${fx}px`,
              top: `${fy}px`,
              width: `${LOUPE_SIZE}px`,
              height: `${LOUPE_SIZE}px`,
              transform: "translate(-50%, -50%)",
              borderRadius: "50%",
              border: "3px solid rgba(255,255,255,0.92)",
              boxShadow: "0 24px 60px rgba(0,0,0,0.55), inset 0 0 0 2px rgba(0,0,0,0.25)",
            }}
          >
            {/* 왼쪽 절반: 스마트폰 */}
            <div className="absolute inset-0" style={{ clipPath: "inset(0 50% 0 0)" }}>
              <div className="absolute" style={zoomWrapperStyle}>
                {renderSide("before")}
              </div>
            </div>
            {/* 오른쪽 절반: 소니 */}
            <div className="absolute inset-0" style={{ clipPath: "inset(0 0 0 50%)" }}>
              <div className="absolute" style={zoomWrapperStyle}>
                {renderSide("after")}
              </div>
            </div>

            {/* 중앙 분할선 */}
            <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[2px] bg-white/90" />

            {/* 좌/우 라벨 (원 안쪽, 각 절반 중앙 상단) */}
            <div className="absolute z-10 -translate-x-1/2" style={{ top: "16%", left: "25%" }}>
              <span
                className="inline-block whitespace-nowrap rounded-full px-3.5 py-1.5 font-extrabold text-white"
                style={{ fontSize: "16px", background: "rgba(0,0,0,0.6)", border: "1px solid rgba(255,255,255,0.3)", backdropFilter: "blur(6px)" }}
              >
                {beforeLabel}
              </span>
            </div>
            <div className="absolute z-10 -translate-x-1/2" style={{ top: "16%", left: "75%" }}>
              <span
                className="inline-block whitespace-nowrap rounded-full px-3.5 py-1.5 font-extrabold text-white"
                style={{ fontSize: "16px", background: "rgba(231,83,0,0.78)", border: "1px solid rgba(255,255,255,0.35)", backdropFilter: "blur(6px)" }}
              >
                {afterLabel}
              </span>
            </div>

            {/* 배율 배지 */}
            <div
              className="absolute left-1/2 -translate-x-1/2 rounded-full font-bold text-white"
              style={{
                bottom: "16px",
                padding: "4px 14px",
                fontSize: "14px",
                background: "rgba(5,3,9,0.7)",
                border: "1px solid rgba(255,255,255,0.18)",
                backdropFilter: "blur(6px)",
              }}
            >
              {LOUPE_ZOOM}× 확대 비교
            </div>
          </div>
        )}

        {/* 안내 문구 (첫 터치 전까지) */}
        {!hasInteracted && (
          <div className="absolute inset-x-0 bottom-16 z-30 flex justify-center pointer-events-none">
            <span className="inline-block rounded-full bg-black/70 px-6 py-2.5 text-white backdrop-blur-sm font-bold" style={{ fontSize: "18px" }}>
              화면을 터치해 스마트폰과 소니를 비교해보세요
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
