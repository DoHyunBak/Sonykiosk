import { useNavigate } from "react-router";
import { ChevronRight, Smartphone, Camera } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { ScrollToTop } from "../../components/ScrollToTop";

const CAMERA_IMG =
  "https://images.unsplash.com/photo-1536063211352-0b94219f6212?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";

export function IntroLandingPage() {
  const navigate = useNavigate();
  const [sliderPos, setSliderPos] = useState(50);
  const animRef = useRef<number>(0);
  const dirRef = useRef(1);

  useEffect(() => {
    let pos = 50;
    let dir = 1;
    const speed = 0.15;

    const animate = () => {
      pos += speed * dir;
      if (pos >= 72) dir = -1;
      if (pos <= 28) dir = 1;
      dirRef.current = dir;
      setSliderPos(pos);
      animRef.current = requestAnimationFrame(animate);
    };
    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  return (
    <>
      <ScrollToTop />
      <div
        className="flex flex-col items-center justify-center cursor-pointer relative overflow-hidden"
        style={{ width: "1080px", height: "1920px", margin: "0 auto", backgroundColor: "#03010F" }}
        onClick={() => navigate("/main")}
      >
      {/* Camera (right) - sharp full image as base */}
      <div className="absolute inset-0">
        <img
          src={CAMERA_IMG}
          alt="Camera quality"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Smartphone (left) - blurred/degraded overlay clipped to left of slider */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
      >
        <img
          src={CAMERA_IMG}
          alt="Smartphone quality"
          className="w-full h-full object-cover"
          style={{
            filter: "blur(3px)",
          }}
        />
        {/* Noise overlay */}
        <div
          className="absolute inset-0 opacity-20 mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Dark gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#03010F] via-[#03010F]/60 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(3,1,15,0.48)] via-[rgba(3,1,15,0.12)] to-transparent pointer-events-none h-[480px]" />

      {/* Slider line */}
      <div
        className="absolute top-0 bottom-0 z-20 pointer-events-none"
        style={{ left: `${sliderPos}%`, transform: "translateX(-50%)" }}
      >
        <div className="w-[3px] h-full bg-[rgba(255,255,255,0.8)] shadow-[0_0_12px_rgba(255,255,255,0.5)] relative">
          <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[14px] h-[227px] bg-[#d9d9d9] rounded-[23px]" />
        </div>
      </div>

      {/* Labels */}
      <div
        className="absolute z-20 flex items-center pointer-events-none"
        style={{
          top: "1758px",
          left: "24px",
        }}
      >
        <div className="rounded-[12px] h-[75px] w-[240px] flex items-center justify-center gap-[16px]">
          <Smartphone className="w-[32px] h-[32px] text-[#E8B49A]" />
          <span style={{ fontSize: "28px", color: "#E8B49A", fontFamily: "var(--font-body)", fontWeight: 400 }}>
            스마트폰
          </span>
        </div>
      </div>
      <div
        className="absolute z-20 flex items-center pointer-events-none"
        style={{
          top: "1758px",
          left: "816px",
        }}
      >
        <div className="rounded-[12px] h-[75px] w-[240px] flex items-center justify-center gap-[16px]">
          <Camera className="w-[32px] h-[32px] text-[#2563eb]" />
          <span style={{ fontSize: "28px", color: "#ffffff", fontFamily: "var(--font-body)", fontWeight: 400 }}>
            Sony α
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="absolute z-10 w-full flex flex-col items-center top-[207px] text-center">
        <h1
          className="mb-[32px]"
          style={{ fontSize: "52px", fontWeight: "700", lineHeight: "72.8px", letterSpacing: "-1.12px", color: "rgba(0,0,0,0.7)", fontFamily: "Space Grotesk, Noto Sans KR, sans-serif" }}
        >
          당신의 첫 카메라,
          <br />
          소니 알파와 시작하세요
        </h1>
        <p
          className="mb-[75px]"
          style={{ fontSize: "28px", fontWeight: "400", lineHeight: "40px", color: "#eb621e", fontFamily: "Inter, Noto Sans KR, sans-serif" }}
        >
          스마트폰과는 차원이 다른 화질
          <br />
          화면을 터치하여 체험을 시작해보세요
        </p>

        <div
          className="flex items-center justify-center gap-[16px] text-white w-[334px] h-[92px] shadow-[12px_12px_32px_0px_rgba(0,0,0,0.15)] animate-pulse rounded-[16px] border border-[#de510f]"
          style={{ fontSize: "26px", fontWeight: "600", letterSpacing: "-0.52px", backgroundColor: "rgba(219,80,19,0.65)", fontFamily: "Inter, Noto Sans KR, sans-serif" }}
        >
          시작하기
          <ChevronRight className="w-[32px] h-[32px]" strokeWidth={3.6} />
        </div>
      </div>
      </div>
    </>
  );
}
