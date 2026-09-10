import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GV8 Global Solutions | Ghana to UK Export & Fulfilment",
  description: "GV8 Global Solutions helps Ghanaian businesses prepare, store and ship approved products to UK customers.",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GH">
      <body>{children}</body>
    </html>
  );
}
