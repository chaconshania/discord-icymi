import { Info, ListFilter } from "lucide-react";

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
        <span className="text-[10px] font-bold text-discord-brand tracking-[0.12em] uppercase leading-none">
          PRE-ALPHA
        </span>
      </div>

      {/* Icon actions */}
      <div className="flex items-center gap-0.5">
        <button
          aria-label="About ICYMI"
          className="w-9 h-9 flex items-center justify-center rounded-full text-discord-text-secondary hover:bg-white/10 active:bg-white/[0.06] transition-colors"
        >
          <Info size={20} strokeWidth={1.75} />
        </button>
        <button
          aria-label="Filter"
          onClick={onFilter}
          className="w-9 h-9 flex items-center justify-center rounded-full text-discord-text-secondary hover:bg-white/10 active:bg-white/[0.06] transition-colors"
        >
          <ListFilter size={20} strokeWidth={1.75} />
        </button>
      </div>
    </header>
  );
}
