// app/layout.tsx

import type { Metadata } from "next";
import "./globals.css"; // Import global styles

// 1. Define metadata (optional but good practice)
export const metadata: Metadata = {
  title: "My Next.js App",
  description: "A clean start.",
};

// 2. Define the RootLayout component
// This layout wraps your entire application, including all pages.
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* 3. The 'children' prop renders the current page or nested layout */}
      <body>{children}</body>
    </html>
  );
}
