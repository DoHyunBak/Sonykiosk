import { useState } from "react";

type SensorColor = {
  border: string;
  glow: string;
  text: string;
  badgeBg: string;
  badgeBorder: string;
};

type Sensor = {
  name: string;
  width: number; // 가로 기준 풀프레임(36mm) 대비 %
  height: number;
  dim: string;
  multiple: string; // 스마트폰 센서 대비 수광 면적 배율
  example?: string; // 해당 센서를 쓰는 예시 제품
  badge: string;
  color: SensorColor;
  desc: string;
};

// 센서 제원 데이터 (크기 백분율은 가로 기준 풀프레임(36mm) 대비)
const sensorData: Sensor[] = [
  {
    name: "스마트폰 기본 센서",
    width: 16,
    height: 17.5,
    dim: "약 5.7 x 4.2 mm",
    multiple: "기준 (1배)",
    badge: "",
    color: {
      border: "#6b7280",
      glow: "rgba(107, 114, 128, 0.5)",
      text: "#9ca3af",
      badgeBg: "rgba(107, 114, 128, 0.2)",
      badgeBorder: "rgba(107, 114, 128, 0.3)",
    },
    desc: "일반적인 스마트폰에 탑재되는 크기입니다. 낮에는 잘 나오지만, 센서가 작아 야간 화질 저하와 노이즈가 발생하며 물리적인 아웃포커싱이 어렵습니다.",
  },
  {
    name: "1인치 하이엔드",
    width: 36.6,
    height: 36.6,
    dim: "13.2 x 8.8 mm",
    multiple: "약 5배",
    badge: "",
    color: {
      border: "#14b8a6",
      glow: "rgba(20, 184, 166, 0.5)",
      text: "#2dd4bf",
      badgeBg: "rgba(20, 184, 166, 0.2)",
      badgeBorder: "rgba(20, 184, 166, 0.3)",
    },
    desc: "프리미엄 하이엔드 똑딱이 카메라나 일부 특화 스마트폰에 탑재됩니다. 기본 스마트폰보다는 화질이 우수합니다.",
  },
  {
    name: "마이크로 포서드",
    width: 48,
    height: 54.1,
    dim: "17.3 x 13.0 mm",
    multiple: "약 9배",
    badge: "",
    color: {
      border: "#3b82f6",
      glow: "rgba(59, 130, 246, 0.5)",
      text: "#60a5fa",
      badgeBg: "rgba(59, 130, 246, 0.2)",
      badgeBorder: "rgba(59, 130, 246, 0.3)",
    },
    desc: "소형 미러리스에 주로 사용됩니다. 풀프레임 대비 화각이 2배 좁아지며, 배경 흐림 효과가 다소 아쉬울 수 있습니다.",
  },
  {
    name: "APS-C (크롭 센서)",
    width: 65.5,
    height: 65.0,
    dim: "23.6 x 15.6 mm",
    multiple: "약 15배",
    badge: "",
    color: {
      border: "#eab308",
      glow: "rgba(234, 179, 8, 0.5)",
      text: "#facc15",
      badgeBg: "rgba(234, 179, 8, 0.2)",
      badgeBorder: "rgba(234, 179, 8, 0.3)",
    },
    desc: "입문용 미러리스(a6700 등)의 대중적인 규격입니다. 우수한 화질을 보여주지만 풀프레임의 깊은 공간감에는 미치지 못합니다.",
  },
  {
    name: "풀프레임 (Full Frame)",
    width: 100,
    height: 100,
    dim: "36.0 x 24.0 mm",
    multiple: "약 36배",
    badge: "",
    color: {
      border: "#f97316",
      glow: "rgba(249, 115, 22, 0.8)",
      text: "#fb923c",
      badgeBg: "rgba(249, 115, 22, 0.2)",
      badgeBorder: "rgba(249, 115, 22, 0.3)",
    },
    desc: "💡 a7C2, a7M4 등 프로급 기종에 탑재되는 35mm 필름 규격 센서입니다. 압도적인 빛 수용력으로 차원이 다른 야간 화질과 아름다운 아웃포커싱을 제공합니다.",
  },
];

// 크기 비교용 고정 가이드 윤곽선
const guides = [
  { label: "Phone", width: 16, height: 17.5, accent: false },
  { label: '1"', width: 36.6, height: 36.6, accent: false },
  { label: "MFT", width: 48, height: 54.1, accent: false },
  { label: "APS-C", width: 65.5, height: 65.0, accent: false },
  { label: "Full Frame", width: 100, height: 100, accent: true },
];

export function SensorSizeComparison() {
  const [value, setValue] = useState(0);
  const data = sensorData[value];
  const isFullFrame = value === sensorData.length - 1;

  return (
    <div className="sensor-viz w-full h-full flex items-center justify-center">
      <style>{`
        @keyframes sensor-holo-shimmer {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .sensor-viz .sensor-core {
          background: linear-gradient(135deg, rgba(80,100,140,0.8) 0%, rgba(130,160,180,0.8) 25%, rgba(160,130,180,0.8) 50%, rgba(120,160,140,0.8) 75%, rgba(80,100,140,0.8) 100%);
          background-size: 200% 200%;
          animation: sensor-holo-shimmer 4s infinite linear;
          box-shadow: inset 0 0 20px rgba(0,0,0,0.8);
        }
        .sensor-viz input[type=range] {
          -webkit-appearance: none;
          appearance: none;
          width: 100%;
          background: transparent;
        }
        .sensor-viz input[type=range]:focus { outline: none; }
        .sensor-viz input[type=range]::-webkit-slider-runnable-track {
          width: 100%;
          height: 16px;
          cursor: pointer;
          background: rgba(255,255,255,0.12);
          border-radius: 10px;
          border: 1px solid rgba(255,255,255,0.08);
          box-shadow: inset 0 1px 3px rgba(0,0,0,0.5);
        }
        .sensor-viz input[type=range]::-webkit-slider-thumb {
          height: 44px;
          width: 44px;
          border-radius: 50%;
          background: #E75300;
          cursor: pointer;
          -webkit-appearance: none;
          margin-top: -14px;
          box-shadow: 0 0 15px rgba(231, 83, 0, 0.5), inset 0 2px 4px rgba(255,255,255,0.4);
          border: 3px solid #fff;
          transition: transform 0.1s;
        }
        .sensor-viz input[type=range]::-webkit-slider-thumb:active { transform: scale(1.1); }
      `}</style>

      <div className="relative w-full h-full overflow-hidden flex flex-col">
        {/* 중앙 비주얼라이저 (비율 3:2 = 풀프레임 센서 비율) */}
        <div
          className="flex-1 flex items-center justify-center p-10 relative"
          style={{ background: "radial-gradient(circle at 50% 42%, rgba(231,83,0,0.10), transparent 62%)" }}
        >
          <div className="relative w-full max-w-[900px] aspect-[3/2] flex items-center justify-center">
            {/* 배경 가이드라인 (크기 비교용 고정 윤곽선) */}
            {guides.map((g) => (
              <div
                key={g.label}
                className="absolute pointer-events-none"
                style={{
                  width: `${g.width}%`,
                  height: `${g.height}%`,
                  border: g.accent ? "1px dashed rgba(231,83,0,0.5)" : "1px dashed rgba(255,255,255,0.18)",
                }}
              />
            ))}

            {/* 동적 센서 (움직이는 영역) */}
            <div
              className="absolute flex flex-col items-center justify-center rounded-sm overflow-hidden z-10 border-2 transition-all duration-500 ease-out"
              style={{
                width: `${data.width}%`,
                height: `${data.height}%`,
                borderColor: data.color.border,
                boxShadow: `0 0 30px ${data.color.glow}`,
              }}
            >
              {/* 금속 테두리 효과 */}
              <div className="absolute inset-0 border-[4px] border-gray-600/50 rounded-sm pointer-events-none z-20" />
              {/* 홀로그램 코어 */}
              <div className="sensor-core absolute inset-1" />
              {/* 중앙 십자 마커 */}
              <div className="absolute w-full h-[1px] bg-white/20 z-10 pointer-events-none" />
              <div className="absolute h-full w-[1px] bg-white/20 z-10 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* 하단 컨트롤 & 정보 영역 */}
        <div className="px-10 pt-8 pb-12 z-10" style={{ borderTop: "1px solid rgba(255,255,255,0.08)", background: "rgba(5,3,9,0.45)", backdropFilter: "blur(12px)" }}>
          {/* 동적 정보 출력 텍스트 */}
          <div className="flex justify-between items-end mb-6">
            <div>
              <div className="flex items-center gap-4 mb-2">
                {data.badge && (
                  <span
                    className="px-3 py-1.5 text-sm font-extrabold rounded-md uppercase tracking-wide border transition-colors duration-300"
                    style={{
                      background: data.color.badgeBg,
                      color: data.color.text,
                      borderColor: data.color.badgeBorder,
                    }}
                  >
                    {data.badge}
                  </span>
                )}
                <span className="text-gray-400 font-mono text-lg tracking-wider">{data.dim}</span>
              </div>
              <h2
                className="text-5xl font-bold tracking-tight transition-colors duration-300"
                style={{ color: isFullFrame ? "#E75300" : "#ffffff" }}
              >
                {data.name}
              </h2>
            </div>
            <p
              className="text-5xl font-black font-mono transition-colors duration-300"
              style={{ color: isFullFrame ? "#E75300" : "#ffffff" }}
            >
              {data.multiple}
            </p>
          </div>

          {/* 커스텀 드래그 슬라이더 */}
          <div className="relative px-2">
            <input
              type="range"
              min={0}
              max={sensorData.length - 1}
              step={1}
              value={value}
              onChange={(e) => setValue(Number(e.target.value))}
            />
            {/* 슬라이더 눈금 표시 */}
            <div className="flex justify-between items-start mt-4 px-3">
              {sensorData.map((_, i) => (
                <div
                  key={i}
                  onClick={() => setValue(i)}
                  className="cursor-pointer flex justify-center"
                  style={{ flex: "0 0 auto" }}
                >
                  <span
                    className="block rounded-full transition-all duration-300"
                    style={{
                      width: "3px",
                      height: i === value ? "14px" : "9px",
                      background: i === value ? "#E75300" : "rgba(255,255,255,0.3)",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
