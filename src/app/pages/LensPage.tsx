import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const highlights = [
  { value: "200+", label: "호환 렌즈 수" },
  { value: "35년+", label: "E-마운트 역사" },
  { value: "3rd", label: "서드파티 포함" },
];

export function LensPage() {
  return (
    <div
      className="text-white overflow-hidden"
      style={{ height: "100%", background: "#1A1A1F" }}
    >
      <div
        className="h-full flex flex-col justify-center overflow-hidden"
        style={{ padding: "8px 40px 36px" }}
      >
        {/* Hero Image */}
        <div
          className="rounded-2xl overflow-hidden relative"
          style={{
            background: "#080511",
            border: "1px solid rgba(255,255,255,0.1)",
            height: "1100px",
            maxHeight: "100%",
          }}
        >
          <ImageWithFallback
            src="/src/imports/E마운트.png"
            alt="소니 E-마운트 렌즈 생태계"
            className="w-full h-full object-cover"
          />

          {/* Gradient overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(8,5,17,0.92) 0%, rgba(8,5,17,0.3) 50%, transparent 100%)",
            }}
          />

          {/* Bottom info */}
          <div className="absolute bottom-0 left-0 right-0" style={{ padding: "40px" }}>
            <p
              style={{
                fontSize: "16px",
                color: "#E75300",
                fontFamily: "var(--font-body)",
                fontWeight: "600",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: "12px",
              }}
            >
              Sony E-Mount Ecosystem
            </p>
            <h2
              style={{
                fontSize: "44px",
                fontWeight: "800",
                color: "#ffffff",
                fontFamily: "var(--font-headline)",
                lineHeight: "1.2",
                letterSpacing: "-0.02em",
                marginBottom: "16px",
              }}
            >
              어떤 순간도
              <br />
              완벽한 렌즈가 있습니다
            </h2>
            <p
              style={{
                fontSize: "20px",
                color: "rgba(255,255,255,0.65)",
                fontFamily: "var(--font-body)",
                lineHeight: "1.6",
                marginBottom: "36px",
              }}
            >
              소니, Zeiss, Tamron, Sigma 등 200개 이상의 렌즈와 완벽 호환됩니다
            </p>

            {/* Stat pills */}
            <div className="flex gap-4">
              {highlights.map((item) => (
                <div
                  key={item.value}
                  className="rounded-2xl"
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    padding: "16px 28px",
                    backdropFilter: "blur(12px)",
                  }}
                >
                  <p
                    style={{
                      fontSize: "28px",
                      fontWeight: "800",
                      color: "#E75300",
                      fontFamily: "var(--font-headline)",
                      lineHeight: "1.1",
                      marginBottom: "4px",
                    }}
                  >
                    {item.value}
                  </p>
                  <p
                    style={{
                      fontSize: "16px",
                      color: "rgba(255,255,255,0.55)",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
