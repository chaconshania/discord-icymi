"use client";

import { useState } from "react";
import ICYMIScreen from "./ICYMIScreen";
import ServersScreen from "./ServersScreen";
import ServerDetailScreen from "./ServerDetailScreen";
import { filterServers } from "@/data/servers";
import type { FilterServer } from "@/types";

type Screen = "icymi" | "servers" | "server-detail";

export default function AppRouter() {
  const [screen, setScreen] = useState<Screen>("icymi");
  const [selectedServer, setSelectedServer] = useState<FilterServer | null>(null);

  return (
    <>
      {screen === "icymi" && (
        <ICYMIScreen onFilter={() => setScreen("servers")} />
      )}
      {screen === "servers" && (
        <ServersScreen
          servers={filterServers}
          onClose={() => setScreen("icymi")}
          onSelectServer={(server) => {
            setSelectedServer(server);
            setScreen("server-detail");
          }}
        />
      )}
      {screen === "server-detail" && selectedServer && (
        <ServerDetailScreen
          server={selectedServer}
          onBack={() => setScreen("servers")}
        />
      )}
    </>
  );
}
