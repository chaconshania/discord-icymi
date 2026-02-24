import ICYMIScreen from "@/components/ICYMIScreen";

/**
 * Root page — renders the ICYMI screen.
 *
 * To add more screens, create routes like /home, /notifications, /you
 * and move BottomNav into a shared layout (e.g. app/(tabs)/layout.tsx).
 * Each screen component lives in components/screens/.
 */
export default function Page() {
  return (
    /* Center on desktop; full-screen on mobile */
    <div className="min-h-screen bg-[#0a0a0c] flex items-start justify-center">
      <div className="w-full max-w-[390px] min-h-screen bg-discord-bg relative flex flex-col">
        <ICYMIScreen />
      </div>
    </div>
  );
}
