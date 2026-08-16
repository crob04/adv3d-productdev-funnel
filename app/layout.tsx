import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const gaId = process.env.NEXT_PUBLIC_GA_ID?.trim();

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
});

// Production canonical URL for metadataBase + og:url (see brief.md section 7).
const SITE_URL = "https://adv3d-productdev-funnel.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Medical Device Prototyping & Short-Run Production | Advanc3D",
  description:
    "Advanc3D helps medical device startups and engineering teams iterate faster — 24hr quotes, 3–7 day builds, no MOQ, biocompatible materials. Book a discovery call.",
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "From CAD File to Functional Prototype — Without the 6-Week Wait.",
    description:
      "Design collaboration, material flexibility, and short-run production for medical device teams.",
    siteName: "Advanc3D",
  },
  twitter: {
    card: "summary_large_image",
    title: "From CAD File to Functional Prototype — Without the 6-Week Wait.",
    description:
      "Design collaboration, material flexibility, and short-run production for medical device teams.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable}`}>
      <body className="bg-brand-black text-brand-text antialiased">
        {children}
        {gaId ? (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
            <Script id="gtag-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                window.gtag = gtag;
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        ) : null}
      </body>
    </html>
  );
}
