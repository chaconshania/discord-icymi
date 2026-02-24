"use client";

import ICYMIHeader from "./ICYMIHeader";
import MessageCard from "./MessageCard";
import BottomNav from "./BottomNav";
import IOSStatusBar from "./IOSStatusBar";
import { icymiMessages } from "@/data/messages";

/**
 * ICYMIScreen — the "In Case You Missed It" feed screen.
 *
 * Layout:
 *   ┌─────────────────┐
 *   │  Status bar     │  (safe area spacer)
 *   │  ICYMI header   │
 *   │                 │
 *   │  Message cards  │  (scrollable)
 *   │                 │
 *   │  Bottom nav     │
 *   └─────────────────┘
 */
interface ICYMIScreenProps {
  onFilter?: () => void;
}

export default function ICYMIScreen({ onFilter }: ICYMIScreenProps) {
  return (
    <div className="flex flex-col h-full bg-discord-bg overflow-hidden">
      {/* iOS status bar */}
      <IOSStatusBar />

      {/* Page header */}
      <ICYMIHeader onFilter={onFilter} />

      {/* Scrollable card feed */}
      <main
        className="flex-1 overflow-y-auto scroll-area"
        aria-label="ICYMI feed"
      >
        {icymiMessages.map((message, index) => (
          <div key={message.id}>
            {/* Full-width separator between cards */}
            {index > 0 && (
              <div
                className="h-2.5"
                style={{ backgroundColor: "#131318" }}
                role="separator"
                aria-hidden
              />
            )}
            <MessageCard message={message} />
          </div>
        ))}
      </main>

      {/* Bottom navigation */}
      <BottomNav />

      {/* iOS home indicator */}
      <div className="flex justify-center pb-2 pt-3 flex-shrink-0" style={{ backgroundColor: "#2C2D35" }} aria-hidden>
        <div className="w-[134px] h-[5px] rounded-full bg-white" />
      </div>
    </div>
  );
}
