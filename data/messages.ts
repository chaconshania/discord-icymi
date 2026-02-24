import type { ICYMIMessage } from "@/types";

export const icymiMessages: ICYMIMessage[] = [
  {
    id: "msg-1",
    server: "Travel Buddies",
    timestamp: "35m",
    notificationType: "popular",
    author: "Platypus",
    authorColor: "#949cf7",
    contextLabel: "sent a popular message:",
    body: "Y'all check out this insane pic I got yesterday! Highly recommend waking up early and getting out when you're in Fuji!",
    imageUrl:
      "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?auto=format&fit=crop&w=800&q=80",
    reactions: [
      { id: "r1", type: "emoji", value: "😍", count: 8 },
      { id: "r2", type: "emoji", value: "👻", count: 5 },
      { id: "r3", type: "custom-text", value: "nice", count: 2 },
    ],
    showActions: true,
    avatars: [
      { gradient: "from-amber-600 to-orange-900", icon: "🏔️" },
      { gradient: "from-teal-400 to-blue-600", icon: "🐾" },
    ],
  },
  {
    id: "msg-2",
    server: "Sports Server",
    timestamp: "35m",
    notificationType: "interesting",
    author: "The Real Phibi",
    authorColor: "#23a55a",
    contextLabel: "sent a message you find interesting:",
    body: "Looking to book a court for next weekend for some pickup basketball. Need a count for how many people would be interested!",
    showActions: false,
    avatars: [
      { gradient: "from-blue-500 to-indigo-700", icon: "🌐" },
      { gradient: "from-green-400 to-emerald-600", icon: "👾" },
    ],
  },
];
