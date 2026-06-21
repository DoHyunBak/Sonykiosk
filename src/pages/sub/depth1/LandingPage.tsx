import { useNavigate } from "react-router";
import { ChevronRight } from "lucide-react";

export function LandingPage() {
  const navigate = useNavigate();

  return (
    <div
      className="relative w-full h-full bg-black overflow-hidden cursor-pointer"
      onClick={() => navigate("/intro-camera")}
    >
      <style>
        {`
          @keyframes slideClip {
            0%, 100% { clip-path: polygon(0 0, 15% 0, 15% 100%, 0 100%); }
            50% { clip-path: polygon(0 0, 85% 0, 85% 100%, 0 100%); }
          }
          @keyframes slideLine {
            0%, 100% { left: 15%; }
            50% { left: 85%; }
          }
          @keyframes pulseSlow {
            0%, 100% { opacity: 1; transform: translateY(0); }
            50% { opacity: 0.8; transform: translateY(-10px); }
          }
          
          .animate-slide-clip {
            animation: slideClip 8s ease-in-out infinite;
          }
          .animate-slide-line {
            animation: slideLine 8s ease-in-out infinite;
          }
          .animate-pulse-slow {
            animation: pulseSlow 3s ease-in-out infinite;
          }
        `}
      </style>

      {/* Background Image (Right Side / Camera Quality) */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="https://images.unsplash.com/photo-1596901607493-4386454af4d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWF0aWMlMjBwb3J0cmFpdCUyMGJva2VoJTIwbmlnaHR8ZW58MXx8fHwxNzc1OTQzOTkyfDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Sony Alpha Camera Quality"
          className="w-full h-full object-cover"
        />
        {/* Right Side Text Content */}
        <div className="absolute top-[12%] right-10 text-right z-10 drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]">
          <h2 className="text-5xl font-black tracking-tight text-white mb-3">Sony Alpha</h2>
          <p className="text-2xl text-white/90 font-light max-w-[280px] leading-relaxed break-keep">
            압도적인 화질과 자연스럽고 아름다운 보케
          </p>
        </div>
      </div>

      {/* Foreground Image (Left Side / Smartphone Quality) */}
      <div className="absolute inset-0 z-20 animate-slide-clip pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1596901607493-4386454af4d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWF0aWMlMjBwb3J0cmFpdCUyMGJva2VoJTIwbmlnaHR8ZW58MXx8fHwxNzc1OTQzOTkyfDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Smartphone Quality"
          className="w-full h-full object-cover blur-[5px] contrast-[0.9] brightness-[1.1] saturate-[0.6]"
        />
        {/* Left Side Text Content */}
        <div className="absolute top-[12%] left-10 text-left drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)] z-30">
          <h2 className="text-5xl font-black tracking-tight text-white mb-3">Smartphone</h2>
          <p className="text-2xl text-white/90 font-light max-w-[280px] leading-relaxed break-keep">
            디지털 필터가 만드는 일반적인 화질의 한계
          </p>
        </div>
      </div>

      {/* Top Black Gradient */}
      <div className="absolute top-0 left-0 w-full h-[25%] bg-gradient-to-b from-black/80 via-black/20 to-transparent z-10 pointer-events-none" />

      {/* Slider Line & Handle */}
      <div className="absolute top-0 bottom-0 z-30 flex justify-center w-1 animate-slide-line pointer-events-none">
        <div className="absolute inset-0 w-[3px] bg-white shadow-[0_0_15px_rgba(255,255,255,1)] -ml-[1px]" />
      </div>

      {/* Bottom CTA */}
      <div className="absolute bottom-16 inset-x-0 flex justify-center z-40 pointer-events-none">
        <div className="bg-black/70 backdrop-blur-xl border border-white/40 text-white px-10 py-5 rounded-full flex items-center gap-4 shadow-[0_10px_40px_rgba(0,0,0,0.8)] animate-pulse-slow">
          <span className="text-2xl font-bold tracking-wide">화면을 터치하여 시작하기</span>
          <ChevronRight className="w-8 h-8 opacity-90" />
        </div>
      </div>
    </div>
  );
}