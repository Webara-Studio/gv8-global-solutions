import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "./site-config";
import "./globals.css";

const title = "Ghana to UK Export & Fulfilment | GV8 Global Solutions";
const description =
  "GV8 helps Ghanaian businesses assess export readiness, prepare approved products and use UK storage and order fulfilment for customers and marketplaces.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  applicationName: SITE_NAME,
  category: "Export services and fulfilment",
  keywords: [
    "Ghana to UK export",
    "Ghana export services",
    "UK fulfilment for Ghanaian businesses",
    "Ghanaian product export",
    "UK storage and fulfilment",
    "export readiness Ghana",
    "Ghana to UK shipping",
    "marketplace preparation Ghana",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_GH",
    url: SITE_URL,
    siteName: SITE_NAME,
    title,
    description,
    images: [
      {
        url: "/images/gv8-og.jpg",
        width: 1200,
        height: 630,
        alt: "Illustrative product-packing scene representing a Ghana-to-UK export and fulfilment route",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/gv8-og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GH">
      <body>{children}</body>
    </html>
  );
}
