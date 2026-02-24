import Image from "next/image";
import { Flame, MoreHorizontal } from "lucide-react";
import type { ICYMIMessage } from "@/types";
import AvatarStack from "./AvatarStack";
import ReactionPill from "./ReactionPill";
import CardActions from "./CardActions";

interface NotificationBadgeProps {
  type: "popular" | "interesting";
}

function NotificationBadge({ type }: NotificationBadgeProps) {
  return (
    <div className="w-9 h-9 flex items-center justify-center rounded-full bg-discord-bg-elevated text-discord-text-secondary">
      {type === "popular" ? (
        <Flame size={18} fill="currentColor" strokeWidth={0} />
      ) : (
        /* Bootstrap Icons lightbulb-fill — closed paths that fill cleanly */
        <svg width="17" height="17" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
          <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13h-5a.5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm3 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1-.5-.5z" />
        </svg>
      )}
    </div>
  );
}

interface MessageCardProps {
  message: ICYMIMessage;
}

export default function MessageCard({ message }: MessageCardProps) {
  return (
    <article className="px-4 pt-4 pb-5 bg-[#1C1D23]">
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
            className="w-7 h-7 flex items-center justify-center rounded-lg bg-discord-bg-elevated border border-white/[0.08] hover:bg-discord-bg-hover active:bg-discord-bg-tertiary text-discord-text-muted transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path fillRule="evenodd" clipRule="evenodd" d="M40 76.6668C49.7246 76.6668 59.0509 72.8037 65.9273 65.9274C72.8036 59.0511 76.6667 49.7248 76.6667 40.0002C76.6667 30.2756 72.8036 20.9492 65.9273 14.0729C59.0509 7.19658 49.7246 3.3335 40 3.3335C30.2754 3.3335 20.9491 7.19658 14.0728 14.0729C7.19644 20.9492 3.33335 30.2756 3.33335 40.0002C3.33335 49.7248 7.19644 59.0511 14.0728 65.9274C20.9491 72.8037 30.2754 76.6668 40 76.6668ZM21.6667 43.3335C22.9928 43.3335 24.2645 42.8067 25.2022 41.869C26.1399 40.9314 26.6667 39.6596 26.6667 38.3335C26.6667 37.0074 26.1399 35.7356 25.2022 34.798C24.2645 33.8603 22.9928 33.3335 21.6667 33.3335C20.3406 33.3335 19.0688 33.8603 18.1312 34.798C17.1935 35.7356 16.6667 37.0074 16.6667 38.3335C16.6667 39.6596 17.1935 40.9314 18.1312 41.869C19.0688 42.8067 20.3406 43.3335 21.6667 43.3335ZM58.3334 43.3335C59.6594 43.3335 60.9312 42.8067 61.8689 41.869C62.8066 40.9314 63.3334 39.6596 63.3334 38.3335C63.3334 37.0074 62.8066 35.7356 61.8689 34.798C60.9312 33.8603 59.6594 33.3335 58.3334 33.3335C57.0073 33.3335 55.7355 33.8603 54.7978 34.798C53.8601 35.7356 53.3334 37.0074 53.3334 38.3335C53.3334 39.6596 53.8601 40.9314 54.7978 41.869C55.7355 42.8067 57.0073 43.3335 58.3334 43.3335ZM25.6667 47.2335C26.0298 46.9878 26.4379 46.8162 26.8674 46.7285C27.297 46.6407 27.7397 46.6386 28.1701 46.7222C28.6005 46.8058 29.0102 46.9735 29.3756 47.2157C29.7411 47.4578 30.0553 47.7697 30.3 48.1335C31.366 49.7285 32.8088 51.0361 34.5008 51.9404C36.1927 52.8447 38.0816 53.3178 40 53.3178C41.9185 53.3178 43.8073 52.8447 45.4993 51.9404C47.1912 51.0361 48.6341 49.7285 49.7 48.1335C50.1951 47.3997 50.9614 46.8927 51.8303 46.7239C52.6992 46.5551 53.5996 46.7384 54.3334 47.2335C55.0671 47.7286 55.5742 48.4949 55.7429 49.3638C55.9117 50.2327 55.7284 51.1331 55.2334 51.8668C53.5576 54.3694 51.291 56.4205 48.6341 57.8389C45.9773 59.2573 43.0118 59.9994 40 59.9994C36.9882 59.9994 34.0228 59.2573 31.3659 57.8389C28.709 56.4205 26.4425 54.3694 24.7667 51.8668C24.5158 51.5025 24.3399 51.0919 24.2493 50.6589C24.1587 50.226 24.1552 49.7793 24.2389 49.3449C24.3227 48.9106 24.4921 48.4972 24.7372 48.129C24.9823 47.7608 25.2983 47.445 25.6667 47.2002V47.2335Z" fill="#ABABAB"/>
            </svg>
          </button>
        </div>
      )}

      {/* ── Reply / Forward ────────────────────────────────────── */}
      {message.showActions && <CardActions />}
    </article>
  );
}
