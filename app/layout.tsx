import type { Metadata, Viewport } from "next";
import { Oswald, Manrope } from "next/font/google";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#141518",
};

const oswald = Oswald({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const siteUrl = "https://github.com/ashu75575/tejveer-portfolio";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Tejveer Singh — Full-Stack Developer & Generative AI Engineer",
    template: "%s | Tejveer Singh",
  },
  description:
    "Portfolio of Tejveer Singh, a Full-Stack Developer and Generative AI Engineer based in New Delhi, India. Building scalable web experiences, agentic workflows, and intelligent applications with Next.js, React, Node.js, and GenAI.",
  keywords: [
    "Tejveer Singh",
    "Tejveer Singh Portfolio",
    "Full-Stack Developer",
    "Generative AI Engineer",
    "AI Engineer Delhi",
    "Software Engineer",
    "Next.js Developer",
    "React Developer",
    "TypeScript",
    "Node.js",
    "Remotion Lambda",
    "Agentic AI",
    "New Delhi India",
  ],
  authors: [{ name: "Tejveer Singh", url: "https://github.com/ashu75575" }],
  creator: "Tejveer Singh",
  publisher: "Tejveer Singh",
  category: "technology",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "Tejveer Singh — Full-Stack Developer & Generative AI Engineer",
    description:
      "Full-Stack Developer and Generative AI Engineer based in New Delhi, India. Building scalable web platforms and intelligent AI systems.",
    url: siteUrl,
    siteName: "Tejveer Singh Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/tejveer2.jpg",
        width: 1200,
        height: 630,
        alt: "Tejveer Singh — Full-Stack Developer & Generative AI Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tejveer Singh — Full-Stack Developer & Generative AI Engineer",
    description:
      "Full-Stack Developer and Generative AI Engineer based in New Delhi, India. Building scalable web platforms and intelligent AI systems.",
    images: ["/tejveer2.jpg"],
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
  alternates: {
    canonical: siteUrl,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Tejveer Singh",
      jobTitle: "Full-Stack Developer & Generative AI Engineer",
      url: siteUrl,
      image: `${siteUrl}/tejveer2.jpg`,
      email: "mailto:tejveersingh.75575@gmail.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "New Delhi",
        addressCountry: "IN",
      },
      sameAs: [
        "https://github.com/ashu75575",
        "https://www.linkedin.com/in/tejveer755",
      ],
      knowsAbout: [
        "Full-Stack Web Development",
        "Generative AI",
        "Next.js",
        "React",
        "TypeScript",
        "Node.js",
        "Python",
        "Distributed Systems",
        "AI Agent Systems",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Tejveer Singh — Portfolio",
      description:
        "Personal portfolio and engineering showcase of Tejveer Singh.",
      publisher: {
        "@id": `${siteUrl}/#person`,
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${oswald.variable} ${manrope.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=BBH+Bogle&family=Pixelify+Sans:wght@400..700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
