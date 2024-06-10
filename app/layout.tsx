import type { Metadata } from "next";
import { Encode_Sans_Condensed } from "next/font/google";
import "./globals.css";

const encodeSansCondensed = Encode_Sans_Condensed({
  subsets: ["latin"],
  weight: ["400", "700"], // Normal (400) and Bold (700)
});

export const metadata: Metadata = {
  title: "Equipacare - Calculadora CME",
  description: "Experimente a nossa Calculadora CME",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={encodeSansCondensed.className}>{children}</body>
    </html>
  );
}
