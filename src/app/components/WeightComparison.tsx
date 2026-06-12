import { useState } from "react";
import type { ElementType } from "react";
import { Camera, Coffee, GlassWater, CupSoda, Aperture } from "lucide-react";

// a7C2 고정 무게
const A7C_WEIGHT = 514;

type CompareItem = {
  name: string; // 접시 위 표시 이름
  btnLabel: string; // 버튼 제목
  btnSub: string; // 버튼 부제
  weight: number;
  icon: ElementType;
  color: string; // 아이콘/이름 색
  boxBorder: string; // 아이콘 박스 테두리 색
};

const items: CompareItem[] = [
  {
    name: "스탠리 40oz (빈 컵)",
    btnLabel: "스탠리 텀블러",
    btnSub: "빈 컵 (40oz)",
    weight: 635,
    icon: Coffee,
    color: "#d1d5db",
    boxBorder: "#9ca3af",
  },
  {
    name: "생수 500ml",
    btnLabel: "생수 한 병",
    btnSub: "500ml 기준",
    weight: 515,
    icon: GlassWater,
    color: "#60a5fa",
    boxBorder: "#3b82f6",
  },
  {
    name: "벤티 아이스 커피",
    btnLabel: "벤티 사이즈 커피",
    btnSub: "얼음 포함",
    weight: 590,
    icon: CupSoda,
    color: "#4ade80",
    boxBorder: "#22c55e",
  },
  {
    name: "구형 풀프레임 DSLR",
    btnLabel: "일반 풀프레임",
    btnSub: "구형 DSLR 바디",
    weight: 890,
    icon: Aperture,
    color: "#f87171",
    boxBorder: "#ef4444",
  },
];

export function WeightComparison() {
  const [selected, setSelected] = useState(0);
  const [dropId, setDropId] = useState(0); // 선택할 때마다 낙하 애니메이션 재생
  const item = items[selected];

  // 무게 차이 → 기울기 각도 (차이 400g일 때 최대 18도)
  const diff = item.weight - A7C_WEIGHT;
  const angle = Math.max(-18, Math.min(18, (diff / 400) * 18));
  const lighterByCamera = diff > 0; // 소니가 더 가벼운가
  const CompareIcon = item.icon;

  const pick = (i: number) => {
    setSelected(i);
    setDropId((d) => d + 1);
  };

  return (
    <div className="w-full h-full flex items-center justify-center">
      <style>{`
        @keyframes weight-float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
          100% { transform: translateY(0px); }
        }
        .weight-float { animation: weight-float 3s ease-in-out infinite; }
        @keyframes weight-shadow {
          0% { transform: translateX(-50%) scaleX(1); opacity: 0.5; }
          50% { transform: translateX(-50%) scaleX(0.82); opacity: 0.3; }
          100% { transform: translateX(-50%) scaleX(1); opacity: 0.5; }
        }
        .weight-shadow { animation: weight-shadow 3s ease-in-out infinite; }
        .weight-digital { font-family: 'Courier New', Courier, monospace; font-weight: 900; }

        /* 위에서 떨어져 접시에 안착 (바운스) */
        @keyframes drop-in {
          0%   { transform: translateY(-560px); opacity: 0; }
          8%   { opacity: 1; }
          52%  { transform: translateY(0); }
          64%  { transform: translateY(-30px); }
          78%  { transform: translateY(0); }
          88%  { transform: translateY(-9px); }
          100% { transform: translateY(0); }
        }
        .drop-in { animation: drop-in 1.5s cubic-bezier(0.45,0,0.25,1) both; }

        /* 낙하 후 빔이 기울어지는 연출 (착지 전엔 수평 유지) */
        @keyframes beam-settle {
          0%, 44% { transform: rotate(0deg); }
          72%     { transform: rotate(calc(var(--angle) * 1.14)); }
          100%    { transform: rotate(var(--angle)); }
        }
        .beam-settle { animation: beam-settle 1.7s cubic-bezier(0.34,1.4,0.5,1) both; }

        /* 접시는 빔과 반대로 회전해 수평 유지 */
        @keyframes pan-settle {
          0%, 44% { transform: rotate(0deg); }
          72%     { transform: rotate(calc(var(--nangle) * 1.14)); }
          100%    { transform: rotate(var(--nangle)); }
        }
        .pan-settle { animation: pan-settle 1.7s cubic-bezier(0.34,1.4,0.5,1) both; }

        /* 결과 배너 */
        @keyframes result-pop {
          0%, 60% { opacity: 0; transform: translateX(-50%) translateY(10px) scale(0.9); }
          100%    { opacity: 1; transform: translateX(-50%) translateY(0) scale(1); }
        }
        .result-pop { animation: result-pop 1.9s ease-out both; }
      `}</style>

      <div className="relative w-full h-full flex flex-col overflow-hidden">
        {/* 저울 영역 */}
        <div
          className="flex-1 relative w-full flex items-center justify-center"
          style={{ background: "radial-gradient(circle at 50% 45%, rgba(231,83,0,0.10), transparent 62%)" }}
        >
          {/* 결과 배너 (낙하 안착 후 등장) */}
          <div
            key={dropId}
            className="result-pop absolute left-1/2 z-30 flex items-center gap-2 rounded-full px-7 py-3 whitespace-nowrap"
            style={{
              top: "24px",
              transform: "translateX(-50%)",
              background: "linear-gradient(135deg, #E75300, #5B36F4)",
              boxShadow: "0 12px 30px rgba(231,83,0,0.4)",
              border: "1px solid rgba(255,255,255,0.2)",
            }}
          >
            <span style={{ fontSize: "26px", fontWeight: 800, color: "#fff", fontFamily: "var(--font-headline)" }}>
              {lighterByCamera
                ? `소니 a7C2가 ${Math.round(diff)}g 더 가벼워요!`
                : `소니 a7C2가 ${Math.round(-diff)}g 더 무거워요`}
            </span>
          </div>

          {/* 저울 구조 */}
          <div className="relative w-[90%] max-w-[840px] h-[400px]" style={{ filter: "drop-shadow(0 26px 26px rgba(0,0,0,0.4))" }}>
            {/* 바닥 접지 그림자 */}
            <div
              className="absolute left-1/2 bottom-[-44px] z-0 weight-shadow"
              style={{
                width: "400px",
                height: "78px",
                borderRadius: "50%",
                background: "radial-gradient(ellipse at center, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.25) 45%, transparent 72%)",
                filter: "blur(4px)",
              }}
            />

            {/* 중앙 기둥 (3D 컬럼) */}
            <div className="absolute bottom-[-50px] left-1/2 -translate-x-1/2 z-0" style={{ width: "130px", height: "252px" }}>
              {/* 받침대 */}
              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2"
                style={{
                  width: "128px",
                  height: "36px",
                  borderRadius: "50%",
                  background: "linear-gradient(180deg, #6b7280 0%, #111827 100%)",
                  boxShadow: "0 14px 26px rgba(0,0,0,0.55), inset 0 3px 6px rgba(255,255,255,0.18)",
                }}
              />
              {/* 기둥 몸체 */}
              <div
                className="absolute bottom-[18px] left-1/2 -translate-x-1/2"
                style={{
                  width: "48px",
                  height: "222px",
                  background: "linear-gradient(90deg, #374151 0%, #aeb6c0 36%, #6b7280 62%, #111827 100%)",
                  borderRadius: "13px 13px 6px 6px",
                  boxShadow: "inset -8px 0 16px rgba(0,0,0,0.5), inset 8px 0 12px rgba(255,255,255,0.2), 0 16px 30px rgba(0,0,0,0.4)",
                }}
              >
                <div
                  className="absolute top-0 left-0 w-full"
                  style={{ height: "20px", borderRadius: "13px 13px 0 0", background: "linear-gradient(180deg, rgba(255,255,255,0.34), transparent)" }}
                />
              </div>
              {/* 중심축 핀 (3D 구) */}
              <div
                className="absolute left-1/2 -translate-x-1/2 z-30"
                style={{
                  top: "6px",
                  width: "34px",
                  height: "34px",
                  borderRadius: "50%",
                  background: "radial-gradient(circle at 35% 28%, #ffe1bf 0%, #fb923c 38%, #E75300 72%, #8f3500 100%)",
                  boxShadow: "0 0 22px rgba(231,83,0,0.7), inset 0 -4px 7px rgba(0,0,0,0.45)",
                  border: "2px solid rgba(20,16,10,0.5)",
                }}
              />
            </div>

            {/* 회전하는 저울 팔 (선택 시 낙하 후 기울어짐) */}
            <div
              key={dropId}
              className="beam-settle absolute top-[202px] left-0 w-full origin-center z-10"
              style={{ ["--angle" as any]: `${angle}deg` }}
            >
              {/* 빔 바 (금속, 입체) */}
              <div
                className="relative w-full"
                style={{
                  height: "16px",
                  borderRadius: "999px",
                  background: "linear-gradient(180deg, #eef0f2 0%, #aeb6c0 42%, #4b5563 100%)",
                  boxShadow: "0 10px 18px rgba(0,0,0,0.45), inset 0 2px 2px rgba(255,255,255,0.7), inset 0 -4px 5px rgba(0,0,0,0.4)",
                }}
              />

              {/* 왼쪽 접시: 소니 a7C2 (고정) */}
              <div className="absolute left-0 top-[8px] w-0 h-0">
                <div
                  className="pan-settle absolute left-[-100px] top-0 w-[200px] flex flex-col items-center origin-top"
                  style={{ ["--nangle" as any]: `${-angle}deg` }}
                >
                  {/* 매다는 줄 */}
                  <div style={{ width: "3px", height: "88px", background: "linear-gradient(90deg,#374151,#cbd5e1,#374151)", boxShadow: "0 0 3px rgba(0,0,0,0.5)" }} />
                  {/* 명확한 접시(디시) + 물체 */}
                  <div className="relative" style={{ width: "200px", height: "46px" }}>
                    {/* 접시 본체(테이퍼) */}
                    <div className="absolute left-1/2 -translate-x-1/2" style={{ top: "13px", width: "176px", height: "30px", borderRadius: "0 0 90px 90px / 0 0 38px 38px", background: "linear-gradient(180deg,#9ca3af 0%,#4b5563 55%,#1f2937 100%)", boxShadow: "0 12px 18px rgba(0,0,0,0.5)" }} />
                    {/* 접시 상단 림(타원) */}
                    <div className="absolute left-1/2 -translate-x-1/2" style={{ top: "0", width: "200px", height: "31px", borderRadius: "50%", background: "linear-gradient(180deg,#f3f4f6 0%,#aeb6c0 45%,#5b6470 100%)", boxShadow: "inset 0 3px 7px rgba(255,255,255,0.7), inset 0 -8px 12px rgba(0,0,0,0.5), 0 5px 10px rgba(0,0,0,0.35)" }} />
                    {/* 오목 음영 */}
                    <div className="absolute left-1/2 -translate-x-1/2" style={{ top: "6px", width: "152px", height: "18px", borderRadius: "50%", background: "radial-gradient(ellipse at 50% 35%, rgba(0,0,0,0.4), transparent 72%)" }} />
                    {/* 접지 그림자 */}
                    <div className="weight-shadow" style={{ position: "absolute", left: "50%", top: "9px", width: "92px", height: "16px", borderRadius: "50%", background: "radial-gradient(ellipse, rgba(0,0,0,0.5), transparent 70%)" }} />
                    {/* 위에서 떨어지는 카메라 → 접시에 안착 후 떠있음 */}
                    <div className="drop-in absolute left-1/2 -translate-x-1/2" style={{ bottom: "16px", zIndex: 5 }}>
                      <div className="weight-float">
                        <div
                          className="relative w-24 h-24 rounded-2xl flex items-center justify-center overflow-hidden"
                          style={{ background: "#0f1117", border: "2px solid #E75300", boxShadow: "0 14px 24px rgba(0,0,0,0.55), 0 0 28px rgba(231,83,0,0.45), inset 0 0 16px rgba(231,83,0,0.18)" }}
                        >
                          <Camera className="w-11 h-11 text-orange-400" />
                          <div className="absolute inset-x-0 top-0 pointer-events-none" style={{ height: "50%", background: "linear-gradient(180deg, rgba(255,255,255,0.22), transparent)" }} />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* 라벨 */}
                  <div className="mt-3 bg-gray-900/80 backdrop-blur px-4 py-1.5 rounded-lg border border-gray-700 text-center whitespace-nowrap" style={{ position: "relative", zIndex: 6 }}>
                    <p className="text-orange-500 font-bold text-sm uppercase mb-0.5">Sony a7C2</p>
                    <p className="text-white weight-digital text-2xl">514g</p>
                  </div>
                </div>
              </div>

              {/* 오른쪽 접시: 비교 아이템 (동적) */}
              <div className="absolute right-0 top-[8px] w-0 h-0">
                <div
                  className="pan-settle absolute left-[-100px] top-0 w-[200px] flex flex-col items-center origin-top"
                  style={{ ["--nangle" as any]: `${-angle}deg` }}
                >
                  {/* 매다는 줄 */}
                  <div style={{ width: "3px", height: "88px", background: "linear-gradient(90deg,#374151,#cbd5e1,#374151)", boxShadow: "0 0 3px rgba(0,0,0,0.5)" }} />
                  {/* 명확한 접시(디시) + 물체 */}
                  <div className="relative" style={{ width: "200px", height: "46px" }}>
                    <div className="absolute left-1/2 -translate-x-1/2" style={{ top: "13px", width: "176px", height: "30px", borderRadius: "0 0 90px 90px / 0 0 38px 38px", background: "linear-gradient(180deg,#9ca3af 0%,#4b5563 55%,#1f2937 100%)", boxShadow: "0 12px 18px rgba(0,0,0,0.5)" }} />
                    <div className="absolute left-1/2 -translate-x-1/2" style={{ top: "0", width: "200px", height: "31px", borderRadius: "50%", background: "linear-gradient(180deg,#f3f4f6 0%,#aeb6c0 45%,#5b6470 100%)", boxShadow: "inset 0 3px 7px rgba(255,255,255,0.7), inset 0 -8px 12px rgba(0,0,0,0.5), 0 5px 10px rgba(0,0,0,0.35)" }} />
                    <div className="absolute left-1/2 -translate-x-1/2" style={{ top: "6px", width: "152px", height: "18px", borderRadius: "50%", background: "radial-gradient(ellipse at 50% 35%, rgba(0,0,0,0.4), transparent 72%)" }} />
                    <div className="weight-shadow" style={{ position: "absolute", left: "50%", top: "9px", width: "92px", height: "16px", borderRadius: "50%", background: "radial-gradient(ellipse, rgba(0,0,0,0.5), transparent 70%)" }} />
                    <div className="drop-in absolute left-1/2 -translate-x-1/2" style={{ bottom: "16px", zIndex: 5 }}>
                      <div className="weight-float">
                        <div
                          className="relative w-24 h-24 rounded-2xl flex items-center justify-center overflow-hidden transition-colors duration-300"
                          style={{ background: "#11151c", border: `2px solid ${item.boxBorder}`, boxShadow: "0 14px 24px rgba(0,0,0,0.55), 0 0 26px rgba(255,255,255,0.12), inset 0 0 16px rgba(255,255,255,0.05)" }}
                        >
                          <CompareIcon className="w-11 h-11" style={{ color: item.color }} />
                          <div className="absolute inset-x-0 top-0 pointer-events-none" style={{ height: "50%", background: "linear-gradient(180deg, rgba(255,255,255,0.2), transparent)" }} />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* 라벨 */}
                  <div className="mt-3 bg-gray-900/80 backdrop-blur px-4 py-1.5 rounded-lg border border-gray-700 text-center whitespace-nowrap" style={{ position: "relative", zIndex: 6 }}>
                    <p className="font-bold text-sm uppercase mb-0.5" style={{ color: item.color }}>{item.name}</p>
                    <p className="text-white weight-digital text-2xl">{item.weight}g</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 하단 컨트롤 */}
        <div
          className="p-10 z-20"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)", background: "rgba(5,3,9,0.45)", backdropFilter: "blur(12px)" }}
        >
          <div className="grid grid-cols-4 gap-5">
            {items.map((it, i) => {
              const Icon = it.icon;
              const isActive = i === selected;
              return (
                <button
                  key={it.btnLabel}
                  onClick={() => pick(i)}
                  className="rounded-2xl p-6 flex flex-col items-center transition active:scale-95"
                  style={{
                    background: isActive ? "#E75300" : "rgba(5,3,9,0.6)",
                    border: isActive ? "none" : "1px solid rgba(255,255,255,0.08)",
                    backdropFilter: "blur(12px)",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
                  }}
                >
                  <Icon className="w-10 h-10 mb-3" style={{ color: isActive ? "#ffffff" : it.color }} />
                  <span className="text-lg font-bold text-white mb-1 text-center">{it.btnLabel}</span>
                  <span className="text-sm text-center" style={{ color: isActive ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.45)" }}>{it.btnSub}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
