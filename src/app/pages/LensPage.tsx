import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useState } from "react";
import { ChevronRight, Telescope, Target, ScanLine } from "lucide-react";

type LensCategory = "all" | "telephoto" | "standard" | "wideangle";

const lensCategories = [
  {
    id: "telephoto" as LensCategory,
    label: "망원 (Telephoto)",
    icon: Telescope,
    count: "70+",
    description: "멀리 있는 피사체를 가까이",
    color: "#E75300",
    bgColor: "rgba(231,83,0,0.12)",
    borderColor: "rgba(231,83,0,0.3)",
    examples: ["FE 70-200mm F2.8 GM OSS II", "FE 100-400mm F4.5-5.6 GM OSS"],
  },
  {
    id: "standard" as LensCategory,
    label: "표준 (Standard)",
    icon: Target,
    count: "80+",
    description: "눈에 보이는 자연스러운 화각",
    color: "#5B36F4",
    bgColor: "rgba(91,54,244,0.12)",
    borderColor: "rgba(91,54,244,0.3)",
    examples: ["FE 24-70mm F2.8 GM II", "FE 50mm F1.2 GM"],
  },
  {
    id: "wideangle" as LensCategory,
    label: "광각 (Wide-angle)",
    icon: ScanLine,
    count: "50+",
    description: "넓은 공간을 한 프레임에",
    color: "#E75300",
    bgColor: "rgba(231,83,0,0.12)",
    borderColor: "rgba(231,83,0,0.3)",
    examples: ["FE 16-35mm F2.8 GM II", "FE 12-24mm F4 G"],
  },
];

export function LensPage() {
  const [activeCategory, setActiveCategory] = useState<LensCategory>("all");

  const filteredCategories =
    activeCategory === "all"
      ? lensCategories
      : lensCategories.filter((c) => c.id === activeCategory);

  return (
    <div
      className="text-white overflow-hidden"
      style={{ height: "100%", background: "#1A1A1F" }}
    >
      <div
        className="h-full flex flex-col overflow-hidden"
        style={{ padding: "36px 40px 36px" }}
      >
        {/* Header */}
        <div className="mb-7 flex-shrink-0">
          <h1
            style={{
              fontSize: "48px",
              fontWeight: "800",
              letterSpacing: "-0.02em",
              color: "#ffffff",
              fontFamily: "var(--font-headline)",
              lineHeight: "1.2",
              marginBottom: "10px",
            }}
          >
            E-마운트 렌즈 생태계
          </h1>
          <p
            style={{
              fontSize: "22px",
              color: "#E75300",
              fontFamily: "var(--font-body)",
              fontWeight: "600",
              lineHeight: "1.5",
            }}
          >
            소니 네이티브 및 서드파티 렌즈 포함 200개 이상의 완벽한 호환성
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex gap-3 mb-6 flex-shrink-0">
          <button
            onClick={() => setActiveCategory("all")}
            className="rounded-xl transition-all"
            style={{
              padding: "14px 28px",
              fontSize: "20px",
              fontWeight: activeCategory === "all" ? "700" : "500",
              fontFamily: "var(--font-body)",
              background:
                activeCategory === "all"
                  ? "#E75300"
                  : "rgba(255,255,255,0.07)",
              color:
                activeCategory === "all"
                  ? "#ffffff"
                  : "rgba(255,255,255,0.6)",
              border: "none",
            }}
          >
            전체
          </button>
          {lensCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className="rounded-xl transition-all"
              style={{
                padding: "14px 28px",
                fontSize: "20px",
                fontWeight: activeCategory === cat.id ? "700" : "500",
                fontFamily: "var(--font-body)",
                background:
                  activeCategory === cat.id
                    ? cat.color
                    : "rgba(255,255,255,0.07)",
                color:
                  activeCategory === cat.id
                    ? "#ffffff"
                    : "rgba(255,255,255,0.6)",
                border: "none",
              }}
            >
              {cat.label.split(" ")[0]}
            </button>
          ))}
        </div>

        {/* E-Mount Image */}
        <div
          className="rounded-2xl overflow-hidden flex-shrink-0 mb-6"
          style={{
            height: "340px",
            background: "#080511",
            border: "1px solid rgba(255,255,255,0.12)",
          }}
        >
          <ImageWithFallback
            src="/src/imports/E마운트.png"
            alt="E-마운트 렌즈 라인업"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Lens Category Cards */}
        <div className="flex flex-col gap-5 flex-1 overflow-y-auto">
          {filteredCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.id}
                className="rounded-2xl flex-shrink-0"
                style={{
                  background: "#080511",
                  border: `1px solid ${category.borderColor}`,
                  padding: "28px",
                }}
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="flex items-center gap-5">
                    <div
                      className="rounded-2xl flex items-center justify-center flex-shrink-0"
                      style={{
                        width: "64px",
                        height: "64px",
                        background: category.bgColor,
                        border: `1px solid ${category.borderColor}`,
                      }}
                    >
                      <Icon
                        style={{
                          width: "30px",
                          height: "30px",
                          color: category.color,
                        }}
                      />
                    </div>
                    <div>
                      <h2
                        style={{
                          fontSize: "28px",
                          fontWeight: "700",
                          color: "#ffffff",
                          fontFamily: "var(--font-headline)",
                          lineHeight: "1.3",
                          marginBottom: "6px",
                        }}
                      >
                        {category.label}
                      </h2>
                      <p
                        style={{
                          fontSize: "20px",
                          color: "rgba(255,255,255,0.55)",
                          fontFamily: "var(--font-body)",
                        }}
                      >
                        {category.description}
                      </p>
                    </div>
                  </div>
                  <div
                    className="rounded-xl flex items-center justify-center"
                    style={{
                      background: category.bgColor,
                      padding: "10px 20px",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "28px",
                        fontWeight: "800",
                        color: category.color,
                        fontFamily: "var(--font-headline)",
                      }}
                    >
                      {category.count}
                    </span>
                    <span
                      style={{
                        fontSize: "18px",
                        color: "rgba(255,255,255,0.5)",
                        marginLeft: "6px",
                        fontFamily: "var(--font-body)",
                      }}
                    >
                      종
                    </span>
                  </div>
                </div>

                {/* Example Lenses */}
                <div
                  className="space-y-2"
                  style={{
                    borderTop: "1px solid rgba(255,255,255,0.08)",
                    paddingTop: "20px",
                  }}
                >
                  <p
                    style={{
                      fontSize: "14px",
                      color: "rgba(255,255,255,0.35)",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                      marginBottom: "12px",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    대표 렌즈
                  </p>
                  {category.examples.map((lens, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between rounded-xl"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        padding: "16px 20px",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "20px",
                          color: "rgba(255,255,255,0.85)",
                          fontFamily: "var(--font-body)",
                          fontWeight: "500",
                        }}
                      >
                        {lens}
                      </span>
                      <ChevronRight
                        style={{
                          width: "18px",
                          height: "18px",
                          color: "rgba(255,255,255,0.3)",
                        }}
                      />
                    </div>
                  ))}
                </div>

                {/* View button */}
                <button
                  className="w-full rounded-xl mt-5 transition-all flex items-center justify-center gap-3"
                  style={{
                    height: "64px",
                    background: category.bgColor,
                    border: `1px solid ${category.borderColor}`,
                    color: category.color,
                    fontSize: "20px",
                    fontWeight: "700",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  렌즈 전체 조회
                  <ChevronRight style={{ width: "20px", height: "20px" }} />
                </button>
              </div>
            );
          })}

          {/* E-mount note */}
          <div
            className="rounded-2xl text-center flex-shrink-0"
            style={{
              background: "rgba(91,54,244,0.06)",
              border: "1px solid rgba(91,54,244,0.2)",
              padding: "24px",
              marginBottom: "8px",
            }}
          >
            <p
              style={{
                fontSize: "20px",
                color: "rgba(255,255,255,0.65)",
                fontFamily: "var(--font-body)",
                lineHeight: "1.7",
              }}
            >
              소니 E-마운트는{" "}
              <span style={{ color: "#5B36F4", fontWeight: "700" }}>
                세계 최대 렌즈 생태계
              </span>
              를 보유하고 있습니다.
              <br />
              Zeiss, Tamron, Sigma 등 서드파티 렌즈와도 완벽 호환됩니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
