import type { Reaction } from "@/types";

interface ReactionPillProps {
  reaction: Reaction;
}

export default function ReactionPill({ reaction }: ReactionPillProps) {
  return (
    <button
      className="flex items-center gap-1 h-7 px-2.5 rounded-full bg-discord-bg-elevated border border-white/[0.08] hover:bg-discord-bg-hover hover:border-discord-brand/40 active:bg-discord-bg-tertiary transition-colors"
      aria-label={`${reaction.value} reaction, ${reaction.count} people`}
    >
      {reaction.type === "custom-text" ? (
        /* Custom sticker/text emoji — styled like Discord's "nice" sticker */
        <span className="text-[11px] font-extrabold text-cyan-400 underline decoration-cyan-400 underline-offset-[2px] leading-none">
          {reaction.value}
        </span>
      ) : (
        <span className="text-[14px] leading-none">{reaction.value}</span>
      )}
      <span className="text-[12px] font-semibold text-discord-text-secondary leading-none">
        {reaction.count}
      </span>
    </button>
  );
}
