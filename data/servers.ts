import type { FilterServer } from "@/types";

export const filterServers: FilterServer[] = [
  {
    id: "server-1",
    name: "Pen's Pals",
    imageUrl:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?fit=crop&w=128&h=128",
    channels: [
      { id: "pp-ch-1", name: "general", emoji: "💬" },
      { id: "pp-ch-2", name: "art-showcase", emoji: "🎨" },
      { id: "pp-ch-3", name: "writing-feedback", emoji: "✍️" },
      { id: "pp-ch-4", name: "inspiration", emoji: "✨" },
    ],
  },
  {
    id: "server-2",
    name: "Bread Dog's Bakery",
    imageUrl:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?fit=crop&w=128&h=128",
    channels: [
      { id: "bdb-ch-1", name: "baking-recipes", emoji: "🍞" },
      { id: "bdb-ch-2", name: "dairy-flour-and-eggs", emoji: "🥚" },
      { id: "bdb-ch-3", name: "vegan-friendly", emoji: "🌱" },
      { id: "bdb-ch-4", name: "general", emoji: "💬" },
    ],
  },
  {
    id: "server-3",
    name: "PC Master Race",
    imageUrl:
      "https://images.unsplash.com/photo-1593305841991-05c297ba4575?fit=crop&w=128&h=128",
    channels: [
      { id: "pcmr-ch-1", name: "general", emoji: "💬" },
      { id: "pcmr-ch-2", name: "build-showcase", emoji: "🖥️" },
      { id: "pcmr-ch-3", name: "benchmarks", emoji: "📊" },
      { id: "pcmr-ch-4", name: "help-and-support", emoji: "🔧" },
      { id: "pcmr-ch-5", name: "deals-and-sales", emoji: "💸" },
    ],
  },
  {
    id: "server-4",
    name: "Elden Ring",
    imageUrl:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?fit=crop&w=128&h=128",
    channels: [
      { id: "er-ch-1", name: "general", emoji: "💬" },
      { id: "er-ch-2", name: "boss-help", emoji: "⚔️" },
      { id: "er-ch-3", name: "builds", emoji: "🛡️" },
      { id: "er-ch-4", name: "lore-and-theory", emoji: "📜" },
      { id: "er-ch-5", name: "pvp", emoji: "🩸" },
    ],
  },
  {
    id: "server-5",
    name: "Valorant HQ",
    imageUrl:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?fit=crop&w=128&h=128",
    channels: [
      { id: "val-ch-1", name: "general", emoji: "💬" },
      { id: "val-ch-2", name: "lfg", emoji: "🙋" },
      { id: "val-ch-3", name: "highlights", emoji: "🎬" },
      { id: "val-ch-4", name: "agent-meta", emoji: "🎯" },
      { id: "val-ch-5", name: "rank-grind", emoji: "📈" },
    ],
  },
  {
    id: "server-6",
    name: "CS2 Central",
    imageUrl:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?fit=crop&w=128&h=128",
    channels: [
      { id: "cs2-ch-1", name: "general", emoji: "💬" },
      { id: "cs2-ch-2", name: "pro-scene", emoji: "🏆" },
      { id: "cs2-ch-3", name: "lfg", emoji: "🙋" },
      { id: "cs2-ch-4", name: "clips-and-highlights", emoji: "🎬" },
      { id: "cs2-ch-5", name: "settings-and-config", emoji: "⚙️" },
    ],
  },
  {
    id: "server-7",
    name: "Minecraft Builders",
    imageUrl:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?fit=crop&w=128&h=128",
    channels: [
      { id: "mc-ch-1", name: "general", emoji: "💬" },
      { id: "mc-ch-2", name: "build-showcase", emoji: "🏰" },
      { id: "mc-ch-3", name: "redstone", emoji: "⚡" },
      { id: "mc-ch-4", name: "seeds-and-worlds", emoji: "🌍" },
      { id: "mc-ch-5", name: "server-list", emoji: "📋" },
    ],
  },
  {
    id: "server-8",
    name: "The Gaming Lounge",
    imageUrl:
      "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?fit=crop&w=128&h=128",
    channels: [
      { id: "tgl-ch-1", name: "general", emoji: "💬" },
      { id: "tgl-ch-2", name: "hot-takes", emoji: "🔥" },
      { id: "tgl-ch-3", name: "game-recommendations", emoji: "🎮" },
      { id: "tgl-ch-4", name: "currently-playing", emoji: "▶️" },
      { id: "tgl-ch-5", name: "game-deals", emoji: "💸" },
    ],
  },
  {
    id: "server-9",
    name: "Nintendo Switch Gang",
    imageUrl:
      "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?fit=crop&w=128&h=128",
    channels: [
      { id: "ns-ch-1", name: "general", emoji: "💬" },
      { id: "ns-ch-2", name: "zelda", emoji: "🗡️" },
      { id: "ns-ch-3", name: "mario", emoji: "🍄" },
      { id: "ns-ch-4", name: "pokemon", emoji: "⚡" },
      { id: "ns-ch-5", name: "nintendo-news", emoji: "📰" },
    ],
  },
  {
    id: "server-10",
    name: "League of Legends",
    imageUrl:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?fit=crop&w=128&h=128",
    channels: [
      { id: "lol-ch-1", name: "general", emoji: "💬" },
      { id: "lol-ch-2", name: "lfg", emoji: "🙋" },
      { id: "lol-ch-3", name: "champion-discussion", emoji: "⚔️" },
      { id: "lol-ch-4", name: "rank-climbing", emoji: "📈" },
      { id: "lol-ch-5", name: "pro-scene", emoji: "🏆" },
    ],
  },
  {
    id: "server-11",
    name: "Speedrunning Community",
    imageUrl:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?fit=crop&w=128&h=128",
    channels: [
      { id: "sr-ch-1", name: "general", emoji: "💬" },
      { id: "sr-ch-2", name: "world-records", emoji: "🏅" },
      { id: "sr-ch-3", name: "route-discussion", emoji: "🗺️" },
      { id: "sr-ch-4", name: "tech-and-glitches", emoji: "🐛" },
      { id: "sr-ch-5", name: "racing", emoji: "⏱️" },
    ],
  },
  {
    id: "server-12",
    name: "Sports Server",
    imageUrl:
      "https://images.unsplash.com/photo-1504450758481-7338eba7524a?fit=crop&w=128&h=128",
    channels: [
      { id: "ss-ch-1", name: "general", emoji: "💬" },
      { id: "ss-ch-2", name: "basketball", emoji: "🏀" },
      { id: "ss-ch-3", name: "football", emoji: "🏈" },
      { id: "ss-ch-4", name: "pickups-and-events", emoji: "📅" },
      { id: "ss-ch-5", name: "fantasy-league", emoji: "📊" },
    ],
  },
  {
    id: "server-13",
    name: "Travel Buddies",
    imageUrl:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?fit=crop&w=128&h=128",
    channels: [
      { id: "tb-ch-1", name: "general", emoji: "💬" },
      { id: "tb-ch-2", name: "photos-and-stories", emoji: "📸" },
      { id: "tb-ch-3", name: "trip-planning", emoji: "✈️" },
      { id: "tb-ch-4", name: "tips-and-tricks", emoji: "💡" },
      { id: "tb-ch-5", name: "asia", emoji: "🗾" },
    ],
  },
];
