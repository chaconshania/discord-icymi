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
];
