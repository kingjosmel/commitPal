import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "CommitPal - AI Conventional Commit Generator",
  description: "Generate Conventional Commit messages with AI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>

      <Analytics />
    </html>
  );
}
