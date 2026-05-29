import { useNavigate, useLocation } from "react-router";
import { ChevronLeft } from "lucide-react";

export function BackButton() {
  const navigate = useNavigate();
  const location = useLocation();

  // Don't show on main page
  if (location.pathname === "/main") {
    return null;
  }

  return (
    <button
      onClick={() => navigate("/main")}
      className="fixed top-6 left-6 z-50 text-white/80 hover:text-white transition-colors"
      style={{ minWidth: "44px", minHeight: "44px" }}
      aria-label="뒤로 가기"
    >
      <ChevronLeft className="w-10 h-10" />
    </button>
  );
}
