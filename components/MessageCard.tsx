import Image from "next/image";
import { Flame, Lightbulb, MoreHorizontal, Smile } from "lucide-react";
import type { ICYMIMessage } from "@/types";
import AvatarStack from "./AvatarStack";
import ReactionPill from "./ReactionPill";
import CardActions from "./CardActions";

interface NotificationBadgeProps {
  type: "popular" | "interesting";
}

function NotificationBadge({ type }: NotificationBadgeProps) {
  if (type === "popular") {
    return (
      <div className="w-9 h-9 flex items-center justify-center rounded-full bg-discord-bg-elevated text-orange-500">
        <Flame size={18} fill="currentColor" strokeWidth={0} />
      </div>
    );
  }
  return (
    <div className="w-9 h-9 flex items-center justify-center rounded-full bg-discord-bg-elevated text-discord-text-secondary">
      <Lightbulb size={18} strokeWidth={1.5} />
    </div>
  );
}

interface MessageCardProps {
  message: ICYMIMessage;
}

export default function MessageCard({ message }: MessageCardProps) {
  return (
    <article className="px-4 pt-4 pb-5">
      {/* ── Card header ────────────────────────────────────────── */}
      <div className="flex items-start justify-between gap-3 mb-3">
        {/* Left: avatar stack + meta */}
        <div className="flex items-start gap-3 min-w-0">
          <AvatarStack avatars={message.avatars} />

          <div className="min-w-0 pt-0.5">
            {/* Server + timestamp */}
            <div className="flex items-center gap-1.5">
              <span className="text-[13px] font-semibold text-discord-text-secondary truncate">
                {message.server}
              </span>
              <span className="text-[12px] text-discord-text-muted flex-shrink-0">
                {message.timestamp}
              </span>
            </div>

            {/* Author + context label */}
            <p className="text-[14px] leading-snug mt-[2px]">
              <span
                className="font-bold"
                style={{ color: message.authorColor }}
              >
                {message.author}
              </span>
              <span className="text-discord-text-muted">
                {" "}
                {message.contextLabel}
              </span>
            </p>
          </div>
        </div>

        {/* Right: more options + notification type badge */}
        <div className="flex items-center gap-1 flex-shrink-0 pt-0.5">
          <button
            aria-label="More options"
            className="w-8 h-8 flex items-center justify-center rounded-full text-discord-text-muted hover:bg-white/10 active:bg-white/[0.06] transition-colors"
          >
            <MoreHorizontal size={18} strokeWidth={1.75} />
          </button>
          <NotificationBadge type={message.notificationType} />
        </div>
      </div>

      {/* ── Message body ───────────────────────────────────────── */}
      <p className="text-[15px] text-discord-text-normal leading-[1.375] mb-3">
        {message.body}
      </p>

      {/* ── Attached image ─────────────────────────────────────── */}
      {message.imageUrl && (
        <div className="relative w-full rounded-lg overflow-hidden mb-3 bg-discord-bg-secondary">
          {/* aspect-[5/3] gives a wide landscape crop that matches the screenshot */}
          <div className="relative aspect-[5/3]">
            <Image
              src={message.imageUrl}
              alt={`Image shared by ${message.author}`}
              fill
              className="object-cover"
              sizes="(max-width: 390px) 100vw, 390px"
              priority
            />
          </div>
        </div>
      )}

      {/* ── Reactions ──────────────────────────────────────────── */}
      {message.reactions && message.reactions.length > 0 && (
        <div className="flex items-center gap-2 flex-wrap mb-1">
          {message.reactions.map((reaction) => (
            <ReactionPill key={reaction.id} reaction={reaction} />
          ))}

          {/* Add reaction button */}
          <button
            aria-label="Add reaction"
            className="w-7 h-7 flex items-center justify-center rounded-full bg-discord-bg-elevated border border-white/[0.08] hover:bg-discord-bg-hover active:bg-discord-bg-tertiary text-discord-text-muted transition-colors"
          >
            <Smile size={14} strokeWidth={1.75} />
          </button>
        </div>
      )}

      {/* ── Reply / Forward ────────────────────────────────────── */}
      {message.showActions && <CardActions />}
    </article>
  );
}
