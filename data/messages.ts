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
      {
        gradient: "from-amber-600 to-orange-900",
        icon: "🏔️",
        imageUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?fit=crop&w=64&h=64",
      },
      {
        gradient: "from-teal-400 to-blue-600",
        icon: "🐾",
        imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?fit=crop&w=64&h=64",
      },
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
    showActions: true,
    avatars: [
      {
        gradient: "from-blue-500 to-indigo-700",
        icon: "🌐",
        imageUrl: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?fit=crop&w=64&h=64",
      },
      {
        gradient: "from-green-400 to-emerald-600",
        icon: "👾",
        imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&w=64&h=64",
      },
    ],
  },
  {
    id: "msg-3",
    server: "PC Master Race",
    timestamp: "1h",
    notificationType: "popular",
    author: "voltframe",
    authorColor: "#f0b132",
    contextLabel: "sent a popular message:",
    body: "Finally done. 4090 + 14900K, pulling 400fps in Valorant on max settings. Took 4 months to save up but absolutely worth it 🔥",
    imageUrl:
      "https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=800&q=80",
    reactions: [
      { id: "r1", type: "emoji", value: "🔥", count: 24 },
      { id: "r2", type: "emoji", value: "😍", count: 17 },
      { id: "r3", type: "custom-text", value: "W build", count: 11 },
    ],
    showActions: true,
    avatars: [
      {
        gradient: "from-yellow-500 to-orange-600",
        icon: "🖥️",
        imageUrl: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?fit=crop&w=64&h=64",
      },
      {
        gradient: "from-amber-400 to-yellow-600",
        icon: "⚡",
        imageUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fit=crop&w=64&h=64",
      },
    ],
  },
  {
    id: "msg-4",
    server: "Elden Ring",
    timestamp: "2h",
    notificationType: "popular",
    author: "tarnished_rex",
    authorColor: "#c9aa71",
    contextLabel: "sent a popular message:",
    body: "Beat Malenia after 47 attempts. She Who Has Never Been Defeated... has been defeated. I need to go lie down.",
    reactions: [
      { id: "r1", type: "emoji", value: "🎉", count: 42 },
      { id: "r2", type: "emoji", value: "🗡️", count: 19 },
      { id: "r3", type: "custom-text", value: "legend", count: 8 },
    ],
    showActions: true,
    avatars: [
      {
        gradient: "from-yellow-700 to-amber-900",
        icon: "⚔️",
        imageUrl: "https://images.unsplash.com/photo-1511512578047-dfb367046420?fit=crop&w=64&h=64",
      },
      {
        gradient: "from-stone-400 to-stone-600",
        icon: "🛡️",
        imageUrl: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?fit=crop&w=64&h=64",
      },
    ],
  },
  {
    id: "msg-5",
    server: "Valorant HQ",
    timestamp: "2h",
    notificationType: "interesting",
    author: "neonspike",
    authorColor: "#ff4655",
    contextLabel: "sent a message you find interesting:",
    body: "Who's running ranked tonight? Need 2 more for a 5-stack, Gold-Plat lobby. Comms required, no instalockers pls",
    reactions: [
      { id: "r1", type: "emoji", value: "🙋", count: 5 },
      { id: "r2", type: "emoji", value: "✅", count: 3 },
    ],
    showActions: true,
    avatars: [
      {
        gradient: "from-red-600 to-rose-800",
        icon: "🎯",
        imageUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?fit=crop&w=64&h=64",
      },
      {
        gradient: "from-red-400 to-pink-600",
        icon: "⚡",
        imageUrl: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?fit=crop&w=64&h=64",
      },
    ],
  },
  {
    id: "msg-6",
    server: "CS2 Central",
    timestamp: "3h",
    notificationType: "popular",
    author: "clutch_or_kick",
    authorColor: "#5865f2",
    contextLabel: "sent a popular message:",
    body: "Copenhagen Major just dropped the schedule. Main event starts next week. Who's watching? This might be the best lineup we've seen in years",
    imageUrl:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80",
    reactions: [
      { id: "r1", type: "emoji", value: "🏆", count: 31 },
      { id: "r2", type: "emoji", value: "👀", count: 22 },
      { id: "r3", type: "custom-text", value: "hyped", count: 14 },
    ],
    showActions: true,
    avatars: [
      {
        gradient: "from-blue-600 to-cyan-700",
        icon: "🔫",
        imageUrl: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?fit=crop&w=64&h=64",
      },
      {
        gradient: "from-indigo-400 to-blue-600",
        icon: "🎮",
        imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=64&h=64",
      },
    ],
  },
  {
    id: "msg-7",
    server: "Minecraft Builders",
    timestamp: "4h",
    notificationType: "popular",
    author: "BlockArchitect",
    authorColor: "#3ba55c",
    contextLabel: "sent a popular message:",
    body: "6 months. 2.3 million blocks. 1:1 scale replica of Hogwarts Castle — fully interior decorated. Screenshots don't do it justice, come visit the server",
    imageUrl:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
    reactions: [
      { id: "r1", type: "emoji", value: "😭", count: 67 },
      { id: "r2", type: "emoji", value: "🏰", count: 44 },
      { id: "r3", type: "custom-text", value: "insane", count: 29 },
    ],
    showActions: true,
    avatars: [
      {
        gradient: "from-green-500 to-emerald-700",
        icon: "⛏️",
        imageUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?fit=crop&w=64&h=64",
      },
      {
        gradient: "from-lime-400 to-green-600",
        icon: "🧱",
        imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fit=crop&w=64&h=64",
      },
    ],
  },
  {
    id: "msg-8",
    server: "The Gaming Lounge",
    timestamp: "5h",
    notificationType: "interesting",
    author: "ControllerKing",
    authorColor: "#eb459e",
    contextLabel: "sent a message you find interesting:",
    body: "Hot take: the DualSense is the best controller ever made. The adaptive triggers on Astro Bot alone justify the entire console. Haptic feedback is on another level",
    imageUrl:
      "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&w=800&q=80",
    reactions: [
      { id: "r1", type: "custom-text", value: "facts", count: 38 },
      { id: "r2", type: "emoji", value: "✅", count: 27 },
      { id: "r3", type: "emoji", value: "❌", count: 9 },
    ],
    showActions: true,
    avatars: [
      {
        gradient: "from-pink-500 to-fuchsia-700",
        icon: "🕹️",
        imageUrl: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?fit=crop&w=64&h=64",
      },
      {
        gradient: "from-purple-400 to-pink-600",
        icon: "👾",
        imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fit=crop&w=64&h=64",
      },
    ],
  },
  {
    id: "msg-9",
    server: "Nintendo Switch Gang",
    timestamp: "6h",
    notificationType: "popular",
    author: "YoshiMainForever",
    authorColor: "#57f287",
    contextLabel: "sent a popular message:",
    body: "Tears of the Kingdom just hit 20 million copies sold. For reference, that's more than Breath of the Wild in half the time. Nintendo absolutely cooked",
    imageUrl:
      "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?auto=format&fit=crop&w=800&q=80",
    reactions: [
      { id: "r1", type: "emoji", value: "👑", count: 53 },
      { id: "r2", type: "emoji", value: "😮", count: 31 },
      { id: "r3", type: "custom-text", value: "GOTY", count: 18 },
    ],
    showActions: true,
    avatars: [
      {
        gradient: "from-red-500 to-red-700",
        icon: "🍄",
        imageUrl: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?fit=crop&w=64&h=64",
      },
      {
        gradient: "from-green-400 to-teal-600",
        icon: "🟢",
        imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?fit=crop&w=64&h=64",
      },
    ],
  },
  {
    id: "msg-10",
    server: "League of Legends",
    timestamp: "7h",
    notificationType: "popular",
    author: "SoloQGrinder",
    authorColor: "#c89b3c",
    contextLabel: "sent a popular message:",
    body: "Just hit Challenger for the first time after 3 years of grinding. Season 1 Silver to Season 14 Challenger. It's possible boys, don't give up 🙏",
    reactions: [
      { id: "r1", type: "emoji", value: "🎉", count: 89 },
      { id: "r2", type: "emoji", value: "👏", count: 61 },
      { id: "r3", type: "custom-text", value: "respect", count: 33 },
    ],
    showActions: true,
    avatars: [
      {
        gradient: "from-blue-700 to-indigo-900",
        icon: "⚔️",
        imageUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?fit=crop&w=64&h=64",
      },
      {
        gradient: "from-yellow-500 to-amber-700",
        icon: "🏅",
        imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&w=64&h=64",
      },
    ],
  },
  {
    id: "msg-11",
    server: "Speedrunning Community",
    timestamp: "8h",
    notificationType: "interesting",
    author: "any_percent_andy",
    authorColor: "#faa61a",
    contextLabel: "sent a message you find interesting:",
    body: "New Super Mario 64 16-star WR just dropped — 14:06.183. The parallel universe strats are getting so optimized I genuinely don't know where the ceiling is anymore",
    reactions: [
      { id: "r1", type: "emoji", value: "🤯", count: 44 },
      { id: "r2", type: "custom-text", value: "WR!", count: 27 },
    ],
    showActions: false,
    avatars: [
      {
        gradient: "from-orange-500 to-red-600",
        icon: "⏱️",
        imageUrl: "https://images.unsplash.com/photo-1511512578047-dfb367046420?fit=crop&w=64&h=64",
      },
      {
        gradient: "from-yellow-400 to-orange-500",
        icon: "🍄",
        imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?fit=crop&w=64&h=64",
      },
    ],
  },
];
