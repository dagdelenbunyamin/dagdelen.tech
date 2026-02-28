import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Die Trauer von Sam — Hard Land · Benedict Wells",
  description: "Ein interaktives digitales Erlebnis des Gedichts 'Die Trauer von Sam' aus Hard Land von Benedict Wells",
  openGraph: {
    title: "Die Trauer von Sam — Hard Land · Benedict Wells",
    description: "Interaktives Gedicht-Erlebnis · 80s Missouri · Melancholie · Stilles Trauern",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Special+Elite&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=IBM+Plex+Mono:wght@300;400;500&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
