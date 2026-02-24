import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const ggSans = localFont({
  src: [
    { path: "../public/fonts/ggsansvf-VF.woff2", style: "normal" },
    { path: "../public/fonts/ggsansvf-Italic-VF.woff", style: "italic" },
  ],
  variable: "--font-gg-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ICYMI – Discord",
  description: "Discord ICYMI (In Case You Missed It) feed",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#111214",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${ggSans.variable} font-sans`}>{children}</body>
    </html>
  );
}
