import Image from "next/image";
import type { Reaction } from "@/types";

interface ReactionPillProps {
  reaction: Reaction;
}

/**
 * Converts a Unicode emoji string to a Twemoji CDN image URL.
 * Discord uses Twemoji for all standard emoji rendering.
 */
function toTwemojiUrl(emoji: string): string {
  const codePoints = [...emoji]
    .map((char) => char.codePointAt(0)!.toString(16))
    .filter((cp) => cp !== "fe0f"); // strip variation selector-16
  return `https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/${codePoints.join("-")}.png`;
}

export default function ReactionPill({ reaction }: ReactionPillProps) {
  return (
    <button
      className="flex items-center gap-1 h-7 px-2.5 rounded-lg bg-discord-bg-elevated border border-white/[0.08] hover:bg-discord-bg-hover hover:border-discord-brand/40 active:bg-discord-bg-tertiary transition-colors"
      aria-label={`${reaction.value} reaction, ${reaction.count} people`}
    >
      {reaction.type === "custom-text" ? (
        <span className="text-[11px] font-extrabold text-cyan-400 underline decoration-cyan-400 underline-offset-[2px] leading-none">
          {reaction.value}
        </span>
      ) : (
        <Image
          src={toTwemojiUrl(reaction.value)}
          alt={reaction.value}
          width={16}
          height={16}
          className="w-4 h-4"
          unoptimized
        />
      )}
      <span className="text-[12px] font-semibold text-discord-text-secondary leading-none">
        {reaction.count}
      </span>
    </button>
  );
}
