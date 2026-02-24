"use client";

import { Home, Zap, Bell, UserCircle2, type LucideProps } from "lucide-react";
import { usePathname } from "next/navigation";
import type { ForwardRefExoticComponent, RefAttributes } from "react";

type LucideIcon = ForwardRefExoticComponent<
  Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
>;

interface NavItem {
  id: string;
  label: string;
  href: string;
  Icon: LucideIcon;
  hasStatus?: boolean;
}

const navItems: NavItem[] = [
  { id: "home", label: "Home", href: "/home", Icon: Home },
  { id: "icymi", label: "ICYMI", href: "/", Icon: Zap },
  { id: "notifications", label: "Notifications", href: "/notifications", Icon: Bell },
  { id: "you", label: "You", href: "/you", Icon: UserCircle2, hasStatus: true },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav
      className="flex items-stretch border-t border-white/[0.06]"
      style={{ backgroundColor: "#2C2D35" }}
      role="tablist"
      aria-label="Main navigation"
    >
      {navItems.map(({ id, label, href, Icon, hasStatus }) => {
        const isActive =
          href === "/" ? pathname === "/" : pathname?.startsWith(href);

        return (
          <button
            key={id}
            role="tab"
            aria-selected={isActive}
            aria-label={label}
            className={`flex-1 flex flex-col items-center justify-center py-2 gap-[3px] transition-colors ${
              isActive ? "text-white" : "text-discord-text-muted"
            }`}
          >
            {/* Icon wrapper — relative so we can layer the status dot */}
            <div className="relative">
              <Icon
                size={24}
                strokeWidth={isActive ? 2.5 : 1.75}
                fill={isActive ? "currentColor" : "none"}
              />
              {/* Online status dot on the "You" tab */}
              {hasStatus && (
                <span className="absolute -bottom-0.5 -right-0.5 w-[9px] h-[9px] rounded-full bg-discord-green border-2 border-discord-bg" />
              )}
            </div>

            <span
              className={`text-[10px] font-semibold tracking-wide leading-none ${
                isActive ? "text-white" : "text-discord-text-muted"
              }`}
            >
              {label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
