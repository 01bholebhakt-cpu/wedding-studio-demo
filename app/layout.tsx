
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lumière Weddings — Artful Wedding Photography",
  description:
    "Honest moments, artful imagery, and wedding photography that brings you back to how it all felt. Discover Lumière Weddings.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
