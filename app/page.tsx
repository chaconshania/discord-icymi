"use client";

import { useState, useEffect } from "react";
import ICYMIScreen from "@/components/ICYMIScreen";
import ServersScreen from "@/components/ServersScreen";
import ServerDetailScreen from "@/components/ServerDetailScreen";
import { filterServers } from "@/data/servers";
import type { FilterServer } from "@/types";

type ModalScreen = "servers" | "server-detail";

const EASING = "cubic-bezier(0.32, 0.72, 0, 1)";
const DURATION = "320ms";
const PEEK_TOP = 10; // px — just enough to show the rounded corners of the scaled ICYMI card

const PHONE_W = 390;
const PHONE_H = 844;
const PADDING = 24; // px breathing room on all sides

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalScreen, setModalScreen] = useState<ModalScreen>("servers");
  const [selectedServer, setSelectedServer] = useState<FilterServer | null>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    function updateScale() {
      const availW = window.innerWidth - PADDING * 2;
      const availH = window.innerHeight - PADDING * 2;
      const next = Math.min(1, availW / PHONE_W, availH / PHONE_H);
      setScale(next);
    }
    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  const openModal = () => {
    setModalScreen("servers");
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <div
      className="h-screen bg-[#0a0a0c] flex items-center justify-center"
      style={{ overflow: "hidden" }}
    >
      {/* Phone shell — always 390×844, scaled down to fit viewport with padding */}
      <div
        style={{
          width: PHONE_W,
          height: PHONE_H,
          transform: `scale(${scale})`,
          transformOrigin: "center center",
          position: "relative",
          overflow: "hidden",
          flexShrink: 0,
          backgroundColor: "#0a0a0c",
        }}
      >
        {/* ICYMI — scales back toward top when modal opens */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{
            transform: isModalOpen ? "scale(0.93)" : "scale(1)",
            borderRadius: isModalOpen ? "12px" : "0px",
            transformOrigin: "top center",
            transition: `transform ${DURATION} ${EASING}, border-radius ${DURATION} ${EASING}`,
          }}
        >
          <ICYMIScreen onFilter={openModal} />
        </div>

        {/* Backdrop — covers inset-0 including the peek strip */}
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: "black",
            opacity: isModalOpen ? 0.4 : 0,
            pointerEvents: isModalOpen ? "auto" : "none",
            transition: `opacity ${DURATION} ${EASING}`,
          }}
          onClick={closeModal}
          aria-hidden
        />

        {/* Modal sheet — starts at PEEK_TOP, rounded top corners peek above */}
        <div
          className="absolute left-0 right-0 bottom-0 rounded-t-[20px] overflow-hidden"
          style={{
            top: PEEK_TOP,
            transform: isModalOpen ? "translateY(0)" : "translateY(100%)",
            transition: `transform ${DURATION} ${EASING}`,
            willChange: "transform",
          }}
        >
          {modalScreen === "servers" && (
            <ServersScreen
              servers={filterServers}
              onClose={closeModal}
              onSelectServer={(server) => {
                setSelectedServer(server);
                setModalScreen("server-detail");
              }}
            />
          )}
          {modalScreen === "server-detail" && selectedServer && (
            <ServerDetailScreen
              server={selectedServer}
              onBack={() => setModalScreen("servers")}
            />
          )}
        </div>
      </div>
    </div>
  );
}
