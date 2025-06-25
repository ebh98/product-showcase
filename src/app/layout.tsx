import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Showcase",
  description: "Simple Next.js product listing app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-black-800 font-sans">
        <div className="max-w-6xl mx-auto">{children}</div>
      </body>
    </html>
  );
}