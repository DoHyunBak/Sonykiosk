import React from "react";

const tokens = {
  bg: "#f5f5f5",
  block: "#d0d0d0",
  border: "#aaaaaa",
  label: "#555555",
  font: "14px monospace",
  radius: "4px",
  gap: "16px",
};

export function WfLayout({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div
      style={{
        backgroundColor: tokens.bg,
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        fontFamily: tokens.font,
      }}
    >
      {children}
    </div>
  );
}

export function WfTopBar({ label = "TOP BAR" }: { label?: string }) {
  return (
    <div
      style={{
        height: "60px",
        backgroundColor: tokens.block,
        borderBottom: `1.5px dashed ${tokens.border}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: tokens.label,
        textTransform: "uppercase",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}
    >
      {label}
    </div>
  );
}

export function WfSection({ label, height, children, gridCols }: { label: string; height?: number; children?: React.ReactNode; gridCols?: number }) {
  return (
    <section
      style={{
        backgroundColor: tokens.block,
        border: `1.5px dashed ${tokens.border}`,
        borderRadius: tokens.radius,
        padding: tokens.gap,
        margin: tokens.gap,
        minHeight: height ? `${height}px` : "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: tokens.label,
        textTransform: "uppercase",
        position: "relative",
      }}
    >
      <div style={{ marginBottom: children ? tokens.gap : 0, fontWeight: "bold" }}>{label}</div>
      {children && (
        <div
          style={{
            width: "100%",
            display: gridCols ? "grid" : "flex",
            gridTemplateColumns: gridCols ? `repeat(${gridCols}, 1fr)` : undefined,
            flexWrap: gridCols ? undefined : "wrap",
            gap: tokens.gap,
            justifyItems: "center",
            justifyContent: gridCols ? undefined : "center",
          }}
        >
          {children}
        </div>
      )}
    </section>
  );
}

export function WfBox({ label, w, h }: { label: string; w?: number | string; h?: number | string }) {
  return (
    <div
      style={{
        backgroundColor: tokens.bg,
        border: `1.5px dashed ${tokens.border}`,
        borderRadius: tokens.radius,
        width: w ? (typeof w === "number" ? `${w}px` : w) : "100%",
        height: h ? (typeof h === "number" ? `${h}px` : h) : "100px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: tokens.label,
        textTransform: "uppercase",
      }}
    >
      {label}
    </div>
  );
}

export function WfButton({ label, onClick }: { label: string; onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: "transparent",
        border: `1.5px dashed ${tokens.border}`,
        borderRadius: tokens.radius,
        padding: "8px 16px",
        color: tokens.label,
        fontFamily: tokens.font,
        textTransform: "uppercase",
        cursor: "pointer",
      }}
    >
      {label}
    </button>
  );
}

export function WfCard({ label, count }: { label: string; count?: number }) {
  return (
    <div
      style={{
        backgroundColor: tokens.bg,
        border: `1.5px dashed ${tokens.border}`,
        borderRadius: tokens.radius,
        width: "100%",
        height: "240px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: tokens.gap,
        color: tokens.label,
        textTransform: "uppercase",
        gap: "8px",
        boxSizing: "border-box",
      }}
    >
      <WfBox label="IMG" h={120} />
      <div>{label} {count !== undefined && `#${count}`}</div>
      <WfText lines={2} />
    </div>
  );
}

export function WfText({ lines = 1 }: { lines?: number }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "6px", width: "100%" }}>
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          style={{
            height: "8px",
            backgroundColor: tokens.border,
            width: i === lines - 1 && lines > 1 ? "60%" : "100%",
            borderRadius: "4px",
            opacity: 0.5,
          }}
        />
      ))}
    </div>
  );
}