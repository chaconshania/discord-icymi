export type NotificationType = "popular" | "interesting";

export interface Reaction {
  id: string;
  /** "emoji" = unicode char, "custom-text" = Discord sticker/text emoji */
  type: "emoji" | "custom-text";
  value: string;
  count: number;
}

export interface AvatarConfig {
  /** Tailwind gradient classes, e.g. "from-amber-700 to-amber-900" */
  gradient: string;
  /** Emoji or short text shown inside the avatar circle */
  icon: string;
}

export interface ICYMIMessage {
  id: string;
  server: string;
  timestamp: string;
  notificationType: NotificationType;
  /** Display name of the message author */
  author: string;
  /** CSS color string for the author's role color */
  authorColor: string;
  /** Sentence fragment after the author name, e.g. "sent a popular message:" */
  contextLabel: string;
  body: string;
  imageUrl?: string;
  reactions?: Reaction[];
  /** Whether to show Reply / Forward action buttons */
  showActions: boolean;
  /** [back avatar, front avatar] for the stacked avatar display */
  avatars: [AvatarConfig, AvatarConfig];
}
