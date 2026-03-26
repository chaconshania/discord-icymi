"use client";

import Image from "next/image";
import { X, ChevronRight } from "lucide-react";
import type { FilterServer } from "@/types";

interface ServersScreenProps {
  servers: FilterServer[];
  onClose: () => void;
  onSelectServer: (server: FilterServer) => void;
}

export default function ServersScreen({
  servers,
  onClose,
  onSelectServer,
}: ServersScreenProps) {
  return (
    <div className="flex flex-col h-full" style={{ backgroundColor: "#1C1D22" }}>
      {/* Header */}
      <div className="relative flex items-center px-4 py-3" style={{ borderBottom: "1px solid #2D2E33" }}>
        <button
          onClick={onClose}
          aria-label="Close"
          className="w-9 h-9 flex items-center justify-center rounded-full text-white hover:bg-white/10 active:bg-white/[0.06] transition-colors"
        >
          <X size={20} strokeWidth={2.5} />
        </button>
        <h1 className="absolute left-1/2 -translate-x-1/2 text-[17px] font-bold text-white">
          Servers
        </h1>
      </div>

      {/* Server list card */}
      <div className="flex-1 overflow-y-auto px-4 pt-4 pb-2">
        <div className="rounded-xl overflow-hidden" style={{ backgroundColor: "#2C2D35" }}>
          {servers.map((server, index) => (
            <div key={server.id}>
              {index > 0 && (
                <div
                  className="mx-4"
                  style={{ height: 1, backgroundColor: "rgba(255,255,255,0.06)" }}
                  aria-hidden
                />
              )}
              <button
                className="w-full flex items-center gap-3 px-4 hover:bg-white/[0.04] active:bg-white/[0.08] transition-colors"
                style={{ height: 64 }}
                onClick={() => onSelectServer(server)}
              >
                <div className="relative flex-shrink-0 rounded-full overflow-hidden" style={{ width: 46, height: 46 }}>
                  <Image
                    src={server.imageUrl}
                    alt={server.name}
                    fill
                    className="object-cover"
                    sizes="46px"
                  />
                </div>
                <span className="flex-1 text-left text-[16px] font-semibold text-white">
                  {server.name}
                </span>
                <ChevronRight size={18} strokeWidth={2.5} className="text-discord-text-muted flex-shrink-0" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* iOS home indicator */}
      <div className="mt-auto flex justify-center pb-2 pt-3 flex-shrink-0" aria-hidden>
        <div className="w-[134px] h-[5px] rounded-full bg-white opacity-30" />
      </div>
    </div>
  );
}
