import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'BHARATDARSHAN — Mindful Expeditions & Living Cultural Waypoints Across India',
  description:
    'BHARATDARSHAN: A soft, mindful journey planner for travelers across India. Explore living heritage, authentic local culture, and verified master artisans across all 28 states and 8 union territories.',
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
};

export const viewport: Viewport = {
  themeColor: '#1C1B18',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Reenie+Beanie&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#FDFCF8] text-[#2D2B28] antialiased relative selection:bg-coral-300 selection:text-ink-900 font-sans">
        {/* Persistent subtle grain overlay */}
        <div className="fixed inset-0 pointer-events-none z-50 grain-overlay opacity-60" />

        {/* Ambient floating pastel aura blobs */}
        <div className="fixed top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-coral-100/60 blur-[130px] pointer-events-none -z-10 animate-float-gentle" />
        <div className="fixed top-[30%] right-[-10%] w-[550px] h-[550px] rounded-full bg-sage-100/70 blur-[140px] pointer-events-none -z-10 animate-pulse-subtle" />
        <div className="fixed bottom-[-10%] left-[20%] w-[600px] h-[600px] rounded-full bg-lavender-100/60 blur-[140px] pointer-events-none -z-10 animate-float-gentle" />

        {children}
      </body>
    </html>
  );
}
