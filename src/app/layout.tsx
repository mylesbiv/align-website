import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Align — Compete On Screen Time",
  description:
    "Block distracting apps, compete with friends to stay off your phone, and build healthier screen time habits together.",
  metadataBase: new URL("https://myalign.app"),
  openGraph: {
    title: "Align — Compete On Screen Time",
    description:
      "Block distracting apps, compete with friends to stay off your phone, and build healthier screen time habits together.",
    url: "https://myalign.app",
    siteName: "Align",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Align — Compete On Screen Time",
    description:
      "Block distracting apps, compete with friends to stay off your phone, and build healthier screen time habits together.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
