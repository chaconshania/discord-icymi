"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import type { ICYMIMessage } from "@/types";

// ─── Keyboard layout ───────────────────────────────────────────────────────

const KB_ROW1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
const KB_ROW2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
const KB_ROW3 = ["Z", "X", "C", "V", "B", "N", "M"];

const KEY_BG = "#48484A";
const SPECIAL_BG = "#2C2C2E";
const KB_BG = "#1C1C1E";

function Key({
  label,
  onPress,
  wide = false,
  extraWide = false,
  special = false,
  className = "",
}: {
  label: React.ReactNode;
  onPress: () => void;
  wide?: boolean;
  extraWide?: boolean;
  special?: boolean;
  className?: string;
}) {
  return (
    <button
      onPointerDown={(e) => { e.preventDefault(); onPress(); }}
      className={`flex items-center justify-center rounded-[5px] text-white text-[16px] font-normal active:opacity-60 select-none ${className}`}
      style={{
        height: 42,
        backgroundColor: special ? SPECIAL_BG : KEY_BG,
        minWidth: wide ? 44 : extraWide ? 90 : 32,
        flex: extraWide ? "1 1 0" : wide ? "0 0 auto" : "1 1 0",
        boxShadow: "0 1px 0 0 #000",
      }}
    >
      {label}
    </button>
  );
}

// ─── Main component ────────────────────────────────────────────────────────

interface ReplySheetProps {
  message: ICYMIMessage;
  onClose: () => void;
}

export default function ReplySheet({ message, onClose }: ReplySheetProps) {
  const [mounted, setMounted] = useState(false);
  const [closing, setClosing] = useState(false);
  const [text, setText] = useState("");
  const [mentionOn, setMentionOn] = useState(true);
  const [caps, setCaps] = useState(true);

  useEffect(() => {
    requestAnimationFrame(() => setMounted(true));
  }, []);

  function handleClose() {
    setClosing(true);
    setTimeout(onClose, 300);
  }

  function pressKey(char: string) {
    const letter = caps ? char.toUpperCase() : char.toLowerCase();
    setText((p) => p + letter);
    // auto-lowercase after first character
    if (caps && text.length === 0) setCaps(false);
  }

  function pressBackspace() {
    setText((p) => p.slice(0, -1));
  }

  function pressSpace() {
    setText((p) => p + " ");
  }

  function pressReturn() {
    if (text.trim()) handleClose();
  }

  const visible = mounted && !closing;

  return (
    <>
      {/* Transparent backdrop — tapping outside closes the keyboard */}
      <div
        className="absolute inset-0 z-10"
        onClick={handleClose}
        aria-hidden
      />

      <div
        className="absolute bottom-0 left-0 right-0 z-20 flex flex-col"
      style={{
        transform: visible ? "translateY(0)" : "translateY(100%)",
        transition: "transform 300ms cubic-bezier(0.32, 0.72, 0, 1)",
      }}
    >
      {/* ── Reply context bar ─────────────────────────────────── */}
      <div
        className="flex items-center px-3 gap-2"
        style={{
          height: 44,
          backgroundColor: "#27272F",
          borderTop: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <button
          onClick={handleClose}
          aria-label="Cancel reply"
          className="w-7 h-7 flex items-center justify-center rounded-full transition-colors"
          style={{ backgroundColor: "#4e5058" }}
        >
          <X size={14} strokeWidth={2.5} className="text-white" />
        </button>

        <p className="flex-1 text-[13px] text-discord-text-secondary truncate">
          Replying to{" "}
          <span className="font-semibold" style={{ color: message.authorColor }}>
            {message.author}
          </span>
        </p>

        {/* @ mention toggle */}
        <button
          onClick={() => setMentionOn((v) => !v)}
          className="flex items-center gap-1 px-2 h-7 rounded-full transition-colors"
          style={{ backgroundColor: mentionOn ? "rgba(88,101,242,0.2)" : "rgba(255,255,255,0.06)" }}
        >
          <span className="text-[14px] font-bold" style={{ color: mentionOn ? "#5865f2" : "#80848e" }}>@</span>
          <span className="text-[12px] font-bold" style={{ color: mentionOn ? "#5865f2" : "#80848e" }}>
            {mentionOn ? "ON" : "OFF"}
          </span>
        </button>
      </div>

      {/* ── Input toolbar ─────────────────────────────────────── */}
      <div
        className="flex items-center gap-2 px-2"
        style={{ height: 52, backgroundColor: "#1C1D22", borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        {/* + button */}
        <button
          className="flex-shrink-0 flex items-center justify-center rounded-full text-discord-text-muted hover:bg-white/10 transition-colors"
          style={{ width: 36, height: 36, backgroundColor: "#27272F" }}
          aria-label="Attach"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden>
            <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </button>

        {/* Apps button */}
        <button
          className="flex-shrink-0 flex items-center justify-center rounded-full text-discord-text-muted hover:bg-white/10 transition-colors"
          style={{ width: 36, height: 36, backgroundColor: "#27272F" }}
          aria-label="Apps"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>
          </svg>
        </button>

        {/* Gift button */}
        <button
          className="flex-shrink-0 flex items-center justify-center rounded-full text-discord-text-muted hover:bg-white/10 transition-colors"
          style={{ width: 36, height: 36, backgroundColor: "#27272F" }}
          aria-label="Gift"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/>
            <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/>
            <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/>
          </svg>
        </button>

        {/* Text input */}
        <div
          className="flex flex-1 items-center gap-1 px-3 rounded-full"
          style={{ height: 38, backgroundColor: "#27272F" }}
        >
          <span className={`flex-1 text-[14px] truncate ${text ? "text-white" : "text-discord-text-muted"}`}>
            {text || `Message #${message.server.toLowerCase().replace(/\s+/g, "-")}`}
          </span>
          {/* Emoji button */}
          <button aria-label="Emoji" className="flex-shrink-0 text-discord-text-muted">
            <svg width="20" height="20" viewBox="0 0 80 80" fill="currentColor" aria-hidden>
              <path fillRule="evenodd" clipRule="evenodd" d="M40.0002 76.6667C49.7248 76.6667 59.0511 72.8036 65.9274 65.9273C72.8037 59.051 76.6668 49.7246 76.6668 40C76.6668 30.2754 72.8037 20.9491 65.9274 14.0728C59.0511 7.19646 49.7248 3.33337 40.0002 3.33337C30.2756 3.33337 20.9492 7.19646 14.0729 14.0728C7.19658 20.9491 3.3335 30.2754 3.3335 40C3.3335 49.7246 7.19658 59.051 14.0729 65.9273C20.9492 72.8036 30.2756 76.6667 40.0002 76.6667ZM21.6668 43.3334C22.9929 43.3334 24.2647 42.8066 25.2024 41.8689C26.14 40.9312 26.6668 39.6595 26.6668 38.3334C26.6668 37.0073 26.14 35.7355 25.2024 34.7978C24.2647 33.8602 22.9929 33.3334 21.6668 33.3334C20.3407 33.3334 19.069 33.8602 18.1313 34.7978C17.1936 35.7355 16.6668 37.0073 16.6668 38.3334C16.6668 39.6595 17.1936 40.9312 18.1313 41.8689C19.069 42.8066 20.3407 43.3334 21.6668 43.3334ZM58.3335 43.3334C59.6596 43.3334 60.9313 42.8066 61.869 41.8689C62.8067 40.9312 63.3335 39.6595 63.3335 38.3334C63.3335 37.0073 62.8067 35.7355 61.869 34.7978C60.9313 33.8602 59.6596 33.3334 58.3335 33.3334C57.0074 33.3334 55.7356 33.8602 54.798 34.7978C53.8603 35.7355 53.3335 37.0073 53.3335 38.3334C53.3335 39.6595 53.8603 40.9312 54.798 41.8689C55.7356 42.8066 57.0074 43.3334 58.3335 43.3334ZM25.6668 47.2334C26.03 46.9877 26.438 46.8161 26.8676 46.7283C27.2972 46.6406 27.7398 46.6385 28.1702 46.7221C28.6006 46.8057 29.0103 46.9734 29.3758 47.2155C29.7413 47.4577 30.0554 47.7696 30.3002 48.1334C31.3661 49.7284 32.809 51.036 34.5009 51.9403C36.1929 52.8446 38.0817 53.3177 40.0002 53.3177C41.9186 53.3177 43.8075 52.8446 45.4994 51.9403C47.1914 51.036 48.6342 49.7284 49.7002 48.1334C50.1952 47.3996 50.9615 46.8926 51.8304 46.7238C52.6994 46.555 53.5997 46.7383 54.3335 47.2334C55.0673 47.7284 55.5743 48.4947 55.7431 49.3636C55.9119 50.2326 55.7286 51.1329 55.2335 51.8667C53.5577 54.3693 51.2912 56.4204 48.6343 57.8388C45.9774 59.2572 43.012 59.9992 40.0002 59.9992C36.9884 59.9992 34.0229 59.2572 31.366 57.8388C28.7092 56.4204 26.4426 54.3693 24.7668 51.8667C24.5159 51.5024 24.34 51.0918 24.2494 50.6588C24.1588 50.2258 24.1553 49.7792 24.2391 49.3448C24.3228 48.9105 24.4922 48.4971 24.7373 48.1289C24.9825 47.7607 25.2984 47.4449 25.6668 47.2V47.2334Z"/>
            </svg>
          </button>
        </div>

        {/* Send button */}
        <button
          onClick={pressReturn}
          aria-label="Send"
          className="flex-shrink-0 flex items-center justify-center rounded-full transition-all"
          style={{
            width: 36,
            height: 36,
            backgroundColor: text.trim() ? "#5865f2" : "#27272F",
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
          </svg>
        </button>
      </div>

      {/* ── Autocomplete suggestions ───────────────────────────── */}
      <div
        className="flex items-center"
        style={{ height: 44, backgroundColor: KB_BG, borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        {["I", "the", "it's"].map((word, i) => (
          <button
            key={word}
            onPointerDown={(e) => { e.preventDefault(); setText((p) => p + (p.endsWith(" ") || p === "" ? "" : " ") + word + " "); }}
            className="flex-1 flex items-center justify-center text-[15px] text-white"
            style={{ borderRight: i < 2 ? "1px solid rgba(255,255,255,0.12)" : "none", height: "100%" }}
          >
            {word}
          </button>
        ))}
      </div>

      {/* ── Keyboard ──────────────────────────────────────────── */}
      <div
        className="flex flex-col gap-[10px] px-[3px] pt-[10px] pb-[4px]"
        style={{ backgroundColor: KB_BG }}
      >
        {/* Row 1 */}
        <div className="flex gap-[5px] px-[2px]">
          {KB_ROW1.map((k) => (
            <Key key={k} label={caps ? k : k.toLowerCase()} onPress={() => pressKey(k)} />
          ))}
        </div>

        {/* Row 2 */}
        <div className="flex gap-[5px] px-[16px]">
          {KB_ROW2.map((k) => (
            <Key key={k} label={caps ? k : k.toLowerCase()} onPress={() => pressKey(k)} />
          ))}
        </div>

        {/* Row 3 — shift + letters + backspace */}
        <div className="flex gap-[5px] px-[2px]">
          {/* Shift */}
          <Key
            wide
            special
            onPress={() => setCaps((v) => !v)}
            label={
              <svg width="18" height="18" viewBox="0 0 24 24" fill={caps ? "white" : "#8E8E93"} aria-hidden>
                <path d="M12 3L2 13h5v8h10v-8h5L12 3z"/>
              </svg>
            }
          />
          {KB_ROW3.map((k) => (
            <Key key={k} label={caps ? k : k.toLowerCase()} onPress={() => pressKey(k)} />
          ))}
          {/* Backspace */}
          <Key
            wide
            special
            onPress={pressBackspace}
            label={
              <svg width="20" height="16" viewBox="0 0 24 18" fill="none" stroke="#8E8E93" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M9 3H19C20.1 3 21 3.9 21 5V13C21 14.1 20.1 15 19 15H9L3 9L9 3Z"/>
                <line x1="14" y1="7" x2="10" y2="11"/><line x1="10" y1="7" x2="14" y2="11"/>
              </svg>
            }
          />
        </div>

        {/* Row 4 — 123 / emoji / space / return */}
        <div className="flex gap-[5px] px-[2px] pb-[2px]">
          <Key wide special onPress={() => {}} label={<span className="text-[15px]">123</span>} />
          <Key wide special onPress={() => {}} label={
            <svg width="22" height="22" viewBox="0 0 24 24" fill="#8E8E93" aria-hidden>
              <circle cx="12" cy="12" r="10" stroke="#8E8E93" strokeWidth="1.5" fill="none"/>
              <circle cx="9" cy="10" r="1.2" fill="#8E8E93"/><circle cx="15" cy="10" r="1.2" fill="#8E8E93"/>
              <path d="M8 14.5c1 1.5 7 1.5 8 0" stroke="#8E8E93" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
            </svg>
          } />
          <Key extraWide special onPress={pressSpace} label={<span className="text-[15px]">space</span>} />
          <Key wide special onPress={pressReturn} label={<span className="text-[13px]">return</span>} />
        </div>
      </div>
    </div>
    </>
  );
}
