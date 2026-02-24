import type { AvatarConfig } from "@/types";

interface AvatarStackProps {
  avatars: [AvatarConfig, AvatarConfig];
  /** Background color of the ring separating the two avatars (match parent bg) */
  ringColor?: string;
}

export default function AvatarStack({
  avatars,
  ringColor = "#111214",
}: AvatarStackProps) {
  const [back, front] = avatars;

  return (
    <div className="relative w-[46px] h-[46px] flex-shrink-0" aria-hidden>
      {/* Back avatar — top-right */}
      <div
        className={`absolute top-0 right-0 w-[30px] h-[30px] rounded-full bg-gradient-to-br ${back.gradient} flex items-center justify-center text-[13px] select-none`}
      >
        {back.icon}
      </div>

      {/* Front avatar — bottom-left, with a ring matching the bg so it looks "on top" */}
      <div
        className={`absolute bottom-0 left-0 w-[30px] h-[30px] rounded-full bg-gradient-to-br ${front.gradient} flex items-center justify-center text-[13px] select-none`}
        style={{ boxShadow: `0 0 0 2.5px ${ringColor}` }}
      >
        {front.icon}
      </div>
    </div>
  );
}
