import { Reply, Share2 } from "lucide-react";

export default function CardActions() {
  return (
    <div className="flex items-center gap-3 mt-4">
      <button className="flex-1 flex items-center justify-center gap-2 h-[42px] rounded-full bg-discord-bg-elevated hover:bg-discord-bg-hover active:bg-discord-bg-tertiary text-discord-text-normal text-[14px] font-semibold transition-colors">
        <Reply size={16} strokeWidth={2} />
        Reply
      </button>
      <button className="flex-1 flex items-center justify-center gap-2 h-[42px] rounded-full bg-discord-bg-elevated hover:bg-discord-bg-hover active:bg-discord-bg-tertiary text-discord-text-normal text-[14px] font-semibold transition-colors">
        <Share2 size={16} strokeWidth={2} />
        Forward
      </button>
    </div>
  );
}
