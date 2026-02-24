"use client";

import Image from "next/image";
import { ChevronLeft } from "lucide-react";
import { useState } from "react";
import type { FilterServer } from "@/types";

type Visibility = "more" | "default" | "less" | "off";

const OPTIONS: { value: Visibility; label: string; description: string }[] = [
  { value: "more", label: "Show More", description: "See more posts from this server in ICYMI" },
  { value: "default", label: "Default", description: "Discord's standard recommendations" },
  { value: "less", label: "Show Less", description: "Reduce posts from this server in ICYMI" },
  { value: "off", label: "Off", description: "No content from this server in ICYMI" },
];

interface ServerDetailScreenProps {
  server: FilterServer;
  onBack: () => void;
}

export default function ServerDetailScreen({ server, onBack }: ServerDetailScreenProps) {
  const [visibility, setVisibility] = useState<Visibility>("default");

  return (
    <div className="flex flex-col h-full" style={{ backgroundColor: "#1C1D22" }}>
      {/* Header */}
      <div className="relative flex items-center px-4 py-3">
        <button
          onClick={onBack}
          aria-label="Back"
          className="flex items-center gap-1 text-[#5865f2] hover:opacity-80 active:opacity-60 transition-opacity"
        >
          <ChevronLeft size={20} strokeWidth={2.5} />
          <span className="text-[16px] font-medium">Servers</span>
        </button>
        <h1 className="absolute left-1/2 -translate-x-1/2 text-[17px] font-bold text-white whitespace-nowrap">
          {server.name}
        </h1>
      </div>

      {/* Server identity */}
      <div className="flex flex-col items-center pt-6 pb-5 gap-3">
        <div
          className="relative rounded-full overflow-hidden"
          style={{ width: 72, height: 72 }}
        >
          <Image
            src={server.imageUrl}
            alt={server.name}
            fill
            className="object-cover"
            sizes="72px"
          />
        </div>
        <p className="text-[20px] font-bold text-white">{server.name}</p>
      </div>

      {/* Visibility options */}
      <div className="px-4">
        <p className="text-[12px] font-semibold uppercase tracking-[0.08em] mb-2 px-1" style={{ color: "#949cf7" }}>
          ICYMI Visibility
        </p>
        <div className="rounded-xl overflow-hidden" style={{ backgroundColor: "#2C2D35" }}>
          {OPTIONS.map((option, index) => (
            <div key={option.value}>
              {index > 0 && (
                <div
                  className="mx-4"
                  style={{ height: 1, backgroundColor: "rgba(255,255,255,0.06)" }}
                  aria-hidden
                />
              )}
              <button
                className="w-full flex items-center justify-between px-4 py-4 hover:bg-white/[0.04] active:bg-white/[0.08] transition-colors"
                onClick={() => setVisibility(option.value)}
              >
                <div className="flex flex-col items-start gap-[3px]">
                  <span className="text-[15px] font-semibold text-white">{option.label}</span>
                  <span className="text-[13px]" style={{ color: "#949cf7" }}>
                    {option.description}
                  </span>
                </div>
                {/* Radio button */}
                <div
                  className="flex-shrink-0 rounded-full border-2 flex items-center justify-center"
                  style={{
                    width: 22,
                    height: 22,
                    borderColor: visibility === option.value ? "#5865f2" : "#4e5058",
                    backgroundColor: visibility === option.value ? "#5865f2" : "transparent",
                  }}
                >
                  {visibility === option.value && (
                    <div className="rounded-full bg-white" style={{ width: 8, height: 8 }} />
                  )}
                </div>
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
