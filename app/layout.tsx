import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import "./css/globals.css";
import "react-medium-image-zoom/dist/styles.css";

export const metadata: Metadata = {
  title: "Daniel Demelash",
  description: "Little things i know about software development",
  openGraph: {
    images: "https://danideme-com.vercel.app/images/danideme.jpg"
  },
  twitter: {
    images: "https://danideme-com.vercel.app/images/danideme.jpg"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <head>
        <meta name="theme-color" content="#09090b" />
        <link
          href="/icons/apple-touch-icon.png"
          rel="apple-touch-icon"
          sizes="180x180"
        />
        <link
          href="/icons/favicon-32x32.png"
          rel="icon"
          sizes="32x32"
          type="image/png"
        />
        <link
          href="/icons/favicon-16x16.png"
          rel="icon"
          sizes="16x16"
          type="image/png"
        />
        <link href="/site.webmanifest" rel="manifest" />
        <link
          color="#09090b"
          href="/icons/safari-pinned-tab.svg"
          rel="mask-icon"
        />
        <meta content="#09090b" name="msapplication-TileColor" />
        <meta content="#E8E8E8" name="theme-color" />
      </head>
      <body>{children}</body>
    </html>
  );
}
