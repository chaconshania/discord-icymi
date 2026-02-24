import { ListFilter } from "lucide-react";

interface ICYMIHeaderProps {
  onFilter?: () => void;
}

export default function ICYMIHeader({ onFilter }: ICYMIHeaderProps) {
  return (
    <header className="flex items-center justify-between px-4 py-3 border-b" style={{ backgroundColor: "#1C1D23", borderColor: "#26262E" }}>
      {/* Brand wordmark + pre-alpha badge */}
      <div className="flex items-baseline gap-2">
        <h1 className="text-[20px] font-extrabold text-white tracking-tight leading-none">
          ICYMI
        </h1>
        <span className="text-[10px] font-bold tracking-[0.12em] uppercase leading-none" style={{ color: "#949CF7" }}>
          PRE-ALPHA
        </span>
      </div>

      {/* Icon actions */}
      <div className="flex items-center gap-2">
        <button
          aria-label="About ICYMI"
          className="w-9 h-9 flex items-center justify-center rounded-full text-discord-text-secondary hover:bg-white/10 active:bg-white/[0.06] transition-colors"
          style={{ backgroundColor: "#26262E" }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
            <circle cx="10" cy="10" r="10" fill="#C7C8CE" />
            <circle cx="10" cy="6.5" r="1.25" fill="#26262E" />
            <rect x="9" y="9.5" width="2" height="5" rx="1" fill="#26262E" />
          </svg>
        </button>
        <button
          aria-label="Filter"
          onClick={onFilter}
          className="w-9 h-9 flex items-center justify-center rounded-full text-discord-text-secondary hover:bg-white/10 active:bg-white/[0.06] transition-colors"
          style={{ backgroundColor: "#26262E" }}
        >
          <ListFilter size={20} strokeWidth={1.75} />
        </button>
      </div>
    </header>
  );
}
