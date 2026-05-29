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

export function ImageComparisonSlider({
  beforeImage,
  afterImage,
  beforeLabel = "스마트폰",
  afterLabel = "카메라",
  beforeFilter,
  afterFilter,
}: ImageComparisonSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    const clampedPercentage = Math.max(0, Math.min(100, percentage));
    setSliderPosition(clampedPercentage);
  };

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    handleMove(e.touches[0].clientX);
  };

  const handleTouchStart = () => {
    setIsDragging(true);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove, { passive: false });
      window.addEventListener("touchend", handleTouchEnd);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isDragging]);

  // Whether to use the custom filter mode (non-bokeh tabs)
  const useFilterMode = beforeFilter !== undefined || afterFilter !== undefined;

  return (
    <div className="relative w-full h-full">
      <div
        ref={containerRef}
        className="relative w-full h-full rounded-3xl overflow-hidden cursor-col-resize select-none"
        style={{ backgroundColor: "#111" }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        {useFilterMode ? (
          <>
            {/* Before side: full image with beforeFilter applied */}
            <div className="absolute inset-0">
              <ImageWithFallback
                src={beforeImage}
                alt={beforeLabel}
                className="w-full h-full object-cover"
                style={{ filter: beforeFilter }}
              />
            </div>

            {/* After side: clipped image with afterFilter applied */}
            <div
              className="absolute inset-0"
              style={{ clipPath: `inset(0 0 0 ${100 - sliderPosition}%)` }}
            >
              <ImageWithFallback
                src={afterImage}
                alt={afterLabel}
                className="w-full h-full object-cover"
                style={{ filter: afterFilter }}
              />
            </div>
          </>
        ) : (
          <>
            {/* Before Image (Smartphone - Slight blur) — default bokeh mode */}
            <div className="absolute inset-0">
              {/* Slightly blurred background */}
              <div className="absolute inset-0" style={{ filter: "blur(3px)", transform: "scale(1.02)" }}>
                <ImageWithFallback
                  src={beforeImage}
                  alt={beforeLabel}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Sharp subject in center */}
              <div className="absolute inset-0" style={{
                WebkitMaskImage: "radial-gradient(ellipse 45% 60% at 50% 45%, black 35%, transparent 75%)",
                maskImage: "radial-gradient(ellipse 45% 60% at 50% 45%, black 35%, transparent 75%)"
              }}>
                <ImageWithFallback
                  src={beforeImage}
                  alt={beforeLabel}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* After Image (Camera - Natural bokeh effect) */}
            <div
              className="absolute inset-0"
              style={{ clipPath: `inset(0 0 0 ${100 - sliderPosition}%)` }}
            >
              {/* Blurred background layer */}
              <div className="absolute inset-0" style={{ filter: "blur(12px)", transform: "scale(1.06)" }}>
                <ImageWithFallback
                  src={beforeImage}
                  alt={afterLabel}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Sharp subject in center (portrait mode simulation) */}
              <div className="absolute inset-0" style={{
                WebkitMaskImage: "radial-gradient(ellipse 42% 58% at 50% 45%, black 30%, transparent 70%)",
                maskImage: "radial-gradient(ellipse 42% 58% at 50% 45%, black 30%, transparent 70%)"
              }}>
                <ImageWithFallback
                  src={beforeImage}
                  alt={afterLabel}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </>
        )}

        {/* Slider Line */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white shadow-2xl pointer-events-none z-20"
          style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
        />

        {/* Labels — inside container, always visible */}
        <div className="absolute bottom-4 left-4 z-30 pointer-events-none">
          <span className="inline-block bg-black/80 backdrop-blur-sm text-white px-4 py-1.5 rounded-full font-bold" style={{ fontSize: "15px" }}>
            {beforeLabel}
          </span>
        </div>
        <div className="absolute bottom-4 right-4 z-30 pointer-events-none">
          <span className="inline-block bg-black/80 backdrop-blur-sm text-white px-4 py-1.5 rounded-full font-bold" style={{ fontSize: "15px" }}>
            {afterLabel}
          </span>
        </div>
      </div>
    </div>
  );
}
