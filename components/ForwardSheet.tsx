"use client";

import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { X, Link2, Search } from "lucide-react";
import type { ICYMIMessage } from "@/types";

// ─── Recipient data ────────────────────────────────────────────────────────

type RecipientType = "dm" | "channel";

interface Recipient {
  id: string;
  type: RecipientType;
  name: string;
  avatarUrl: string;
  isOnline?: boolean;
  // channel-only
  serverName?: string;
  serverAvatarUrl?: string;
}

const RECIPIENTS: Recipient[] = [
  // DMs
  {
    id: "dm-1",
    type: "dm",
    name: "voltframe",
    avatarUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fit=crop&w=64&h=64",
    isOnline: true,
  },
  {
    id: "dm-2",
    type: "dm",
    name: "tarnished_rex",
    avatarUrl: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?fit=crop&w=64&h=64",
    isOnline: false,
  },
  {
    id: "dm-3",
    type: "dm",
    name: "neonspike",
    avatarUrl: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?fit=crop&w=64&h=64",
    isOnline: true,
  },
  {
    id: "dm-4",
    type: "dm",
    name: "BlockArchitect",
    avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fit=crop&w=64&h=64",
    isOnline: false,
  },
  {
    id: "dm-5",
    type: "dm",
    name: "YoshiMainForever",
    avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?fit=crop&w=64&h=64",
    isOnline: true,
  },
  {
    id: "dm-6",
    type: "dm",
    name: "SoloQGrinder",
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&w=64&h=64",
    isOnline: false,
  },
  // Channels
  {
    id: "ch-1",
    type: "channel",
    name: "build-showcase",
    serverName: "PC Master Race",
    avatarUrl: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?fit=crop&w=64&h=64",
    serverAvatarUrl: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?fit=crop&w=64&h=64",
  },
  {
    id: "ch-2",
    type: "channel",
    name: "boss-help",
    serverName: "Elden Ring",
    avatarUrl: "https://images.unsplash.com/photo-1511512578047-dfb367046420?fit=crop&w=64&h=64",
    serverAvatarUrl: "https://images.unsplash.com/photo-1511512578047-dfb367046420?fit=crop&w=64&h=64",
  },
  {
    id: "ch-3",
    type: "channel",
    name: "lfg",
    serverName: "Valorant HQ",
    avatarUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?fit=crop&w=64&h=64",
    serverAvatarUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?fit=crop&w=64&h=64",
  },
  {
    id: "ch-4",
    type: "channel",
    name: "pro-scene",
    serverName: "CS2 Central",
    avatarUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?fit=crop&w=64&h=64",
    serverAvatarUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?fit=crop&w=64&h=64",
  },
  {
    id: "ch-5",
    type: "channel",
    name: "build-showcase",
    serverName: "Minecraft Builders",
    avatarUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?fit=crop&w=64&h=64",
    serverAvatarUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?fit=crop&w=64&h=64",
  },
  {
    id: "ch-6",
    type: "channel",
    name: "hot-takes",
    serverName: "The Gaming Lounge",
    avatarUrl: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?fit=crop&w=64&h=64",
    serverAvatarUrl: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?fit=crop&w=64&h=64",
  },
  {
    id: "ch-7",
    type: "channel",
    name: "zelda",
    serverName: "Nintendo Switch Gang",
    avatarUrl: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?fit=crop&w=64&h=64",
    serverAvatarUrl: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?fit=crop&w=64&h=64",
  },
  {
    id: "ch-8",
    type: "channel",
    name: "rank-climbing",
    serverName: "League of Legends",
    avatarUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?fit=crop&w=64&h=64",
    serverAvatarUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?fit=crop&w=64&h=64",
  },
];

// ─── Sub-components ────────────────────────────────────────────────────────

function Checkbox({ checked }: { checked: boolean }) {
  return (
    <div
      className="flex-shrink-0 flex items-center justify-center rounded-lg transition-colors"
      style={{
        width: 24,
        height: 24,
        backgroundColor: checked ? "#5865f2" : "transparent",
        border: checked ? "none" : "2px solid #4e5058",
      }}
    >
      {checked && (
        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden>
          <path
            d="M2 6.5L5 9.5L11 3.5"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </div>
  );
}

function RecipientRow({
  recipient,
  selected,
  onToggle,
}: {
  recipient: Recipient;
  selected: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      className="w-full flex items-center gap-3 px-4 hover:bg-white/[0.04] active:bg-white/[0.08] transition-colors"
      style={{ height: 64 }}
      onClick={onToggle}
    >
      {/* Avatar */}
      <div className="relative flex-shrink-0" style={{ width: 46, height: 46 }}>
        {recipient.type === "channel" ? (
          /* Server icon with # badge */
          <>
            <div
              className="overflow-hidden"
              style={{ width: 46, height: 46, borderRadius: 10 }}
            >
              <Image
                src={recipient.avatarUrl}
                alt={recipient.serverName ?? ""}
                width={46}
                height={46}
                className="object-cover w-full h-full"
                unoptimized
              />
            </div>
            {/* # badge */}
            <div
              className="absolute -bottom-0.5 -right-0.5 flex items-center justify-center rounded-full"
              style={{
                width: 18,
                height: 18,
                backgroundColor: "#27272F",
                border: "2px solid #27272F",
              }}
            >
              <span className="text-[10px] font-extrabold" style={{ color: "#b5bac1" }}>#</span>
            </div>
          </>
        ) : (
          /* User avatar with optional online dot */
          <>
            <div className="rounded-full overflow-hidden w-full h-full">
              <Image
                src={recipient.avatarUrl}
                alt={recipient.name}
                width={46}
                height={46}
                className="object-cover w-full h-full"
                unoptimized
              />
            </div>
            {recipient.isOnline && (
              <div
                className="absolute bottom-0 right-0 rounded-full"
                style={{
                  width: 13,
                  height: 13,
                  backgroundColor: "#23a55a",
                  border: "2.5px solid #27272F",
                }}
              />
            )}
          </>
        )}
      </div>

      {/* Text */}
      <div className="flex-1 min-w-0 text-left">
        <p className="text-[15px] font-semibold text-white truncate">
          {recipient.type === "channel" ? recipient.name : recipient.name}
        </p>
        {recipient.type === "channel" && recipient.serverName && (
          <p className="text-[12px] text-discord-text-muted truncate mt-0.5">
            {recipient.serverName}
          </p>
        )}
      </div>

      {/* Checkbox */}
      <Checkbox checked={selected} />
    </button>
  );
}

// ─── Main component ────────────────────────────────────────────────────────

interface ForwardSheetProps {
  message: ICYMIMessage;
  onClose: () => void;
}

export default function ForwardSheet({ message, onClose }: ForwardSheetProps) {
  const [mounted, setMounted] = useState(false);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [note, setNote] = useState("");

  useEffect(() => {
    requestAnimationFrame(() => setMounted(true));
  }, []);

  const filtered = useMemo(() => {
    if (!query.trim()) return RECIPIENTS;
    const q = query.toLowerCase();
    return RECIPIENTS.filter(
      (r) =>
        r.name.toLowerCase().includes(q) ||
        r.serverName?.toLowerCase().includes(q)
    );
  }, [query]);

  function toggle(id: string) {
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }

  return (
    <>
      {/* Backdrop */}
      <div
        className="absolute inset-0 z-10"
        style={{
          backgroundColor: "rgba(0,0,0,0.6)",
          opacity: mounted ? 1 : 0,
          transition: "opacity 300ms",
        }}
        onClick={onClose}
        aria-hidden
      />

      {/* Sheet */}
      <div
        className="absolute bottom-0 left-0 right-0 z-20 flex flex-col rounded-t-2xl"
        style={{
          backgroundColor: "#1C1D22",
          maxHeight: "92%",
          transform: mounted ? "translateY(0)" : "translateY(100%)",
          transition: "transform 300ms cubic-bezier(0.32, 0.72, 0, 1)",
        }}
      >
        {/* Drag handle */}
        <div className="flex justify-center pt-3 pb-1 flex-shrink-0">
          <div
            className="w-9 h-1 rounded-full"
            style={{ backgroundColor: "rgba(255,255,255,0.25)" }}
          />
        </div>

        {/* Header */}
        <div
          className="relative flex items-center px-3 py-2 flex-shrink-0"
          style={{ borderBottom: "1px solid #2D2E33" }}
        >
          <button
            onClick={onClose}
            aria-label="Close"
            className="w-9 h-9 flex items-center justify-center rounded-full text-white hover:bg-white/10 active:bg-white/[0.06] transition-colors"
          >
            <X size={20} strokeWidth={2.5} />
          </button>
          <h2 className="absolute left-1/2 -translate-x-1/2 text-[17px] font-bold text-white whitespace-nowrap">
            Forward To
          </h2>
          <button
            aria-label="Copy link"
            className="ml-auto w-9 h-9 flex items-center justify-center rounded-full text-discord-text-muted hover:bg-white/10 active:bg-white/[0.06] transition-colors"
          >
            <Link2 size={20} strokeWidth={2} />
          </button>
        </div>

        {/* Search bar */}
        <div className="px-4 pt-3 pb-2 flex-shrink-0">
          <div
            className="flex items-center gap-2 px-3 rounded-full"
            style={{ backgroundColor: "#27272F", height: 38 }}
          >
            <Search size={16} strokeWidth={2} className="text-discord-text-muted flex-shrink-0" />
            <input
              type="text"
              placeholder="Search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 bg-transparent text-[15px] text-white placeholder-discord-text-muted outline-none"
            />
          </div>
        </div>

        {/* Recipient list */}
        <div className="flex-1 overflow-y-auto px-4 pb-2">
          <div
            className="rounded-xl overflow-hidden"
            style={{ backgroundColor: "#27272F" }}
          >
            {filtered.map((recipient, i) => (
              <div key={recipient.id}>
                {i > 0 && (
                  <div
                    className="mx-4"
                    style={{ height: 1, backgroundColor: "rgba(255,255,255,0.06)" }}
                    aria-hidden
                  />
                )}
                <RecipientRow
                  recipient={recipient}
                  selected={selected.has(recipient.id)}
                  onToggle={() => toggle(recipient.id)}
                />
              </div>
            ))}
            {filtered.length === 0 && (
              <p className="px-4 py-6 text-[14px] text-center text-discord-text-muted">
                No results for &ldquo;{query}&rdquo;
              </p>
            )}
          </div>
        </div>

        {/* Message preview */}
        <div className="px-4 pt-1 pb-2 flex-shrink-0">
          <div
            className="rounded-xl px-3 py-2.5"
            style={{ backgroundColor: "#27272F" }}
          >
            <p
              className="text-[13px] font-semibold mb-0.5 truncate"
              style={{ color: message.authorColor }}
            >
              {message.author}
            </p>
            <p className="text-[13px] text-discord-text-secondary line-clamp-2 leading-snug">
              {message.body}
            </p>
          </div>
        </div>

        {/* Footer: optional message + send */}
        <div className="px-4 pb-3 pt-1 flex items-center gap-2 flex-shrink-0">
          <div
            className="flex-1 flex items-center gap-2 px-4 rounded-full"
            style={{ backgroundColor: "#27272F", height: 44 }}
          >
            <input
              type="text"
              placeholder="Add an optional message..."
              value={note}
              onChange={(e) => setNote(e.target.value)}
              className="flex-1 bg-transparent text-[14px] text-white placeholder-discord-text-muted outline-none min-w-0"
            />
            {/* Emoji button */}
            <button
              aria-label="Add emoji"
              className="flex-shrink-0 text-discord-text-muted hover:text-discord-text-secondary transition-colors"
            >
              <svg width="22" height="22" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path fillRule="evenodd" clipRule="evenodd" d="M40.0002 76.6667C49.7248 76.6667 59.0511 72.8036 65.9274 65.9273C72.8037 59.051 76.6668 49.7246 76.6668 40C76.6668 30.2754 72.8037 20.9491 65.9274 14.0728C59.0511 7.19646 49.7248 3.33337 40.0002 3.33337C30.2756 3.33337 20.9492 7.19646 14.0729 14.0728C7.19658 20.9491 3.3335 30.2754 3.3335 40C3.3335 49.7246 7.19658 59.051 14.0729 65.9273C20.9492 72.8036 30.2756 76.6667 40.0002 76.6667ZM21.6668 43.3334C22.9929 43.3334 24.2647 42.8066 25.2024 41.8689C26.14 40.9312 26.6668 39.6595 26.6668 38.3334C26.6668 37.0073 26.14 35.7355 25.2024 34.7978C24.2647 33.8602 22.9929 33.3334 21.6668 33.3334C20.3407 33.3334 19.069 33.8602 18.1313 34.7978C17.1936 35.7355 16.6668 37.0073 16.6668 38.3334C16.6668 39.6595 17.1936 40.9312 18.1313 41.8689C19.069 42.8066 20.3407 43.3334 21.6668 43.3334ZM58.3335 43.3334C59.6596 43.3334 60.9313 42.8066 61.869 41.8689C62.8067 40.9312 63.3335 39.6595 63.3335 38.3334C63.3335 37.0073 62.8067 35.7355 61.869 34.7978C60.9313 33.8602 59.6596 33.3334 58.3335 33.3334C57.0074 33.3334 55.7356 33.8602 54.798 34.7978C53.8603 35.7355 53.3335 37.0073 53.3335 38.3334C53.3335 39.6595 53.8603 40.9312 54.798 41.8689C55.7356 42.8066 57.0074 43.3334 58.3335 43.3334ZM25.6668 47.2334C26.03 46.9877 26.438 46.8161 26.8676 46.7283C27.2972 46.6406 27.7398 46.6385 28.1702 46.7221C28.6006 46.8057 29.0103 46.9734 29.3758 47.2155C29.7413 47.4577 30.0554 47.7696 30.3002 48.1334C31.3661 49.7284 32.809 51.036 34.5009 51.9403C36.1929 52.8446 38.0817 53.3177 40.0002 53.3177C41.9186 53.3177 43.8075 52.8446 45.4994 51.9403C47.1914 51.036 48.6342 49.7284 49.7002 48.1334C50.1952 47.3996 50.9615 46.8926 51.8304 46.7238C52.6994 46.555 53.5997 46.7383 54.3335 47.2334C55.0673 47.7284 55.5743 48.4947 55.7431 49.3636C55.9119 50.2326 55.7286 51.1329 55.2335 51.8667C53.5577 54.3693 51.2912 56.4204 48.6343 57.8388C45.9774 59.2572 43.012 59.9992 40.0002 59.9992C36.9884 59.9992 34.0229 59.2572 31.366 57.8388C28.7092 56.4204 26.4426 54.3693 24.7668 51.8667C24.5159 51.5024 24.34 51.0918 24.2494 50.6588C24.1588 50.2258 24.1553 49.7792 24.2391 49.3448C24.3228 48.9105 24.4922 48.4971 24.7373 48.1289C24.9825 47.7607 25.2984 47.4449 25.6668 47.2V47.2334Z" fill="currentColor"/>
              </svg>
            </button>
          </div>

          {/* Send button */}
          <button
            disabled={selected.size === 0}
            className="flex-shrink-0 flex items-center justify-center rounded-full text-[15px] font-semibold text-white transition-opacity"
            style={{
              height: 44,
              paddingLeft: 20,
              paddingRight: 20,
              backgroundColor: "#5865f2",
              opacity: selected.size === 0 ? 0.4 : 1,
            }}
            onClick={onClose}
          >
            Send
          </button>
        </div>

        {/* iOS home indicator */}
        <div className="flex justify-center pb-2 pt-1 flex-shrink-0" aria-hidden>
          <div className="w-[134px] h-[5px] rounded-full bg-white opacity-30" />
        </div>
      </div>
    </>
  );
}
