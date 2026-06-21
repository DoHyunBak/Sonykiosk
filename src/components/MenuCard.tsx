import type { LucideIcon } from "lucide-react";

interface MenuCardProps {
  title: string;
  icon: LucideIcon;
  onClick: () => void;
}

/**
 * 메인 메뉴(IntroMenuPage) Row 2에서 반복되는 메뉴 카드.
 * 아이콘 박스 + 라벨로 구성된 다크 카드 패턴.
 */
export function MenuCard({ title, icon: Icon, onClick }: MenuCardProps) {
  return (
    <button
      onClick={onClick}
      className="flex-1 flex flex-row items-center justify-start rounded-[28px] transition-all duration-300 hover:scale-[1.01]"
      style={{
        height: "188px",
        background: "#080511",
        border: "1px solid rgba(255,255,255,0.07)",
        padding: "0 36px",
        gap: "20px",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLButtonElement).style.background = "#0d0a1a";
        (e.currentTarget as HTMLButtonElement).style.borderColor =
          "rgba(231,83,0,0.3)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLButtonElement).style.background = "#080511";
        (e.currentTarget as HTMLButtonElement).style.borderColor =
          "rgba(255,255,255,0.07)";
      }}
    >
      <div
        className="rounded-2xl flex items-center justify-center flex-shrink-0"
        style={{
          width: "64px",
          height: "64px",
          background: "rgba(91,54,244,0.15)",
          border: "1px solid rgba(91,54,244,0.3)",
        }}
      >
        <Icon style={{ width: "32px", height: "32px", color: "#5B36F4" }} />
      </div>
      <span
        style={{
          fontSize: "32px",
          fontWeight: "700",
          color: "#ffffff",
          fontFamily: "var(--font-headline)",
          lineHeight: "1.4",
          letterSpacing: "-0.02em",
        }}
      >
        {title}
      </span>
    </button>
  );
}
