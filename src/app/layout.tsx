import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";
import NoiseBackground from "@/components/NoiseBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "DigiMark Pro | Premium Portfolio & Agency Website",
  description: "DigiMark Pro is a premium digital agency specializing in luxury brand identity, high-fidelity Next.js web development, and growth-focused marketing solutions. Where Growth Meets Innovation.",
  keywords: "Branding, Web Development, Digital Marketing, Next.js, React, Tailwind CSS, Growth solutions, Premium Agency",
  authors: [{ name: "DigiMark Pro" }],
  icons: {
    icon: "/logo.webp",
    shortcut: "/logo.webp",
    apple: "/logo.webp",
  },
  metadataBase: new URL("https://digimarkpro.in"),
  openGraph: {
    title: "DigiMark Pro | Premium Portfolio & Agency Website",
    description: "Where Growth Meets Innovation. Premium brand design, Next.js engineering, and organic growth-focused marketing.",
    url: "https://digimarkpro.in",
    siteName: "DigiMark Pro",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DigiMark Pro | Premium Growth Agency",
    description: "High-fidelity branding, Next.js web engineering, and strategic digital growth.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "DigiMark Pro",
    "image": "https://digimarkpro.in/logo.webp",
    "description": "Premium brand design, Next.js engineering, and growth strategies.",
    "url": "https://digimarkpro.in",
    "telephone": "+919876543210",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "New Delhi",
      "addressCountry": "IN"
    },
    "priceRange": "$$$$"
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
         <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </head>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <LenisProvider>
          <NoiseBackground />
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
