export default function IOSStatusBar() {
  return (
    <div
      className="flex items-center justify-between flex-shrink-0 px-6"
      style={{ height: 44, backgroundColor: "#1C1D23" }}
      aria-hidden
    >
      {/* Time */}
      <span style={{ fontSize: 15, fontWeight: 600, color: "white", letterSpacing: 0 }}>
        9:41
      </span>

      {/* Right: signal · wifi · battery */}
      <div className="flex items-center" style={{ gap: 7 }}>

        {/* Cellular signal — 4 bars */}
        <svg width="18" height="12" viewBox="0 0 18 12" fill="white">
          <rect x="0"   y="7.5" width="3" height="4.5" rx="0.8" />
          <rect x="5"   y="5"   width="3" height="7"   rx="0.8" />
          <rect x="10"  y="2.5" width="3" height="9.5" rx="0.8" />
          <rect x="15"  y="0"   width="3" height="12"  rx="0.8" />
        </svg>

        {/* Wi-Fi — arcs + dot */}
        <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
          <circle cx="8" cy="11" r="1.5" fill="white" />
          <path d="M4.8 8C5.8 7 6.85 6.5 8 6.5S10.2 7 11.2 8" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M2 5.2C3.7 3.5 5.75 2.5 8 2.5S12.3 3.5 14 5.2" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        </svg>

        {/* Battery — outline + full fill + nub */}
        <div className="flex items-center">
          <div
            style={{
              width: 25,
              height: 12,
              borderRadius: 3.5,
              border: "1.2px solid rgba(255,255,255,0.55)",
              padding: 1.5,
              display: "flex",
            }}
          >
            <div style={{ flex: 1, backgroundColor: "white", borderRadius: 1.5 }} />
          </div>
          <div
            style={{
              width: 1.5,
              height: 5,
              backgroundColor: "rgba(255,255,255,0.55)",
              borderRadius: "0 1px 1px 0",
              marginLeft: 1,
            }}
          />
        </div>

      </div>
    </div>
  );
}
