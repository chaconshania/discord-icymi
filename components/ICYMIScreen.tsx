import ICYMIHeader from "./ICYMIHeader";
import MessageCard from "./MessageCard";
import BottomNav from "./BottomNav";
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
export default function ICYMIScreen() {
  return (
    <div className="flex flex-col h-screen bg-discord-bg overflow-hidden">
      {/* iOS-style status bar safe area */}
      <div className="h-11 bg-discord-bg flex-shrink-0" aria-hidden />

      {/* Page header */}
      <ICYMIHeader />

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
                className="h-px bg-white/[0.06] mx-0"
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
    </div>
  );
}
