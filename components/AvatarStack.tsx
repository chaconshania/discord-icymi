import Image from "next/image";
import type { AvatarConfig } from "@/types";

interface AvatarStackProps {
  avatars: [AvatarConfig, AvatarConfig];
  /** Card background color — used as the border ring on the user badge */
  ringColor?: string;
}

export default function AvatarStack({
  avatars,
  ringColor = "#1C1D23",
}: AvatarStackProps) {
  const [server, user] = avatars;

  return (
    <div className="relative flex-shrink-0" style={{ width: 46, height: 46 }} aria-hidden>

      {/* Server icon — rounded rectangle, fills most of the space */}
      <div
        className="absolute top-0 left-0 overflow-hidden"
        style={{ width: 40, height: 40, borderRadius: 10 }}
      >
        {server.imageUrl ? (
          <Image
            src={server.imageUrl}
            alt=""
            width={40}
            height={40}
            className="object-cover w-full h-full"
          />
        ) : (
          <div
            className={`w-full h-full bg-gradient-to-br ${server.gradient} flex items-center justify-center text-[16px] select-none`}
          >
            {server.icon}
          </div>
        )}
      </div>

      {/* User avatar badge — small circle, bottom-right, with ring border */}
      <div
        className="absolute bottom-0 right-0 rounded-full overflow-hidden"
        style={{
          width: 22,
          height: 22,
          boxShadow: `0 0 0 2px ${ringColor}`,
        }}
      >
        {user.imageUrl ? (
          <Image
            src={user.imageUrl}
            alt=""
            width={22}
            height={22}
            className="object-cover w-full h-full"
          />
        ) : (
          <div
            className={`w-full h-full bg-gradient-to-br ${user.gradient} flex items-center justify-center text-[9px] select-none`}
          >
            {user.icon}
          </div>
        )}
      </div>

    </div>
  );
}
