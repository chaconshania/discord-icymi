"use client";

import { useState } from "react";
import ICYMIHeader from "./ICYMIHeader";
import MessageCard from "./MessageCard";
import BottomNav from "./BottomNav";
import IOSStatusBar from "./IOSStatusBar";
import ForwardSheet from "./ForwardSheet";
import ReplySheet from "./ReplySheet";
import { icymiMessages } from "@/data/messages";
import type { ICYMIMessage } from "@/types";

interface ICYMIScreenProps {
  onFilter?: () => void;
}

export default function ICYMIScreen({ onFilter }: ICYMIScreenProps) {
  const [forwardMessage, setForwardMessage] = useState<ICYMIMessage | null>(null);
  const [replyMessage, setReplyMessage] = useState<ICYMIMessage | null>(null);

  return (
    <div className="flex flex-col h-full bg-discord-bg overflow-hidden relative">
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
            {index > 0 && (
              <div
                className="h-2.5"
                style={{ backgroundColor: "#131318" }}
                role="separator"
                aria-hidden
              />
            )}
            <MessageCard message={message} onReply={setReplyMessage} onForward={setForwardMessage} />
          </div>
        ))}
      </main>

      {/* Bottom navigation */}
      <BottomNav />

      {/* iOS home indicator */}
      <div className="flex justify-center pb-2 pt-3 flex-shrink-0" style={{ backgroundColor: "#2C2D35" }} aria-hidden>
        <div className="w-[134px] h-[5px] rounded-full bg-white" />
      </div>

      {/* Forward sheet */}
      {forwardMessage && (
        <ForwardSheet
          message={forwardMessage}
          onClose={() => setForwardMessage(null)}
        />
      )}

      {/* Reply sheet — keyboard slides up from bottom */}
      {replyMessage && (
        <ReplySheet
          message={replyMessage}
          onClose={() => setReplyMessage(null)}
        />
      )}
    </div>
  );
}
