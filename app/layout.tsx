import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kerim0x1.com"),
  title: "Kerim — Full‑Stack Developer & UI/UX Designer",
  description:
    "Retro Windows 98–style portfolio of Kerim, a self‑taught full‑stack developer and UI/UX designer. Next.js, Electron.js, Prisma, Tailwind CSS, shadcn/ui. Performance, SEO, and modern app design.",
  applicationName: "Kerim Portfolio",
  authors: [{ name: "Kerim", url: "https://kerim0x1.com" }],
  creator: "Kerim",
  publisher: "Kerim",
  keywords: [
    "Kerim",
    "Full-Stack Developer",
    "UI/UX Designer",
    "Next.js",
    "Electron.js",
    "Prisma",
    "Tailwind CSS",
    "shadcn/ui",
    "Vercel",
    "Core Web Vitals",
    "SEO",
    "Lighthouse",
    "Portfolio",
    "Windows 98",
    "Retro web design",
    "Booking systems",
    "Admin dashboards",
    "Figma",
    "Framer",
    "Adobe Creative Cloud",
    "Notion",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Kerim — Full‑Stack Developer & UI/UX Designer",
    description:
      "Retro Windows 98–style portfolio showcasing modern full‑stack apps, UI/UX, and performance/SEO work.",
    url: "https://kerim0x1.com",
    siteName: "Kerim Portfolio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Kerim — Full‑Stack Developer & UI/UX Designer",
    description:
      "Retro Windows 98–style portfolio showcasing modern full‑stack apps, UI/UX, and performance/SEO work.",
    creator: "@kerim0x1",
  },
  themeColor: "#008080",
  category: "technology",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://unpkg.com/98.css" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  name: "Kerim",
                  url: "https://kerim0x1.com",
                  email: "mailto:contact@kerim0x1.com",
                  sameAs: ["https://x.com/kerim0x1"],
                  jobTitle: "Full-Stack Developer & UI/UX Designer",
                  knowsAbout: [
                    "Next.js",
                    "Electron.js",
                    "Prisma",
                    "Tailwind CSS",
                    "shadcn/ui",
                    "SEO",
                    "Core Web Vitals",
                    "Figma",
                    "Framer",
                    "Adobe Creative Cloud",
                    "Notion",
                  ],
                },
                {
                  "@type": "WebSite",
                  name: "Kerim — Full‑Stack Developer & UI/UX Designer",
                  url: "https://kerim0x1.com",
                },
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
