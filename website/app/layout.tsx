import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HenryLab-XR | Reliable, Secure, and Intelligent XR Systems",
  description:
    "HenryLab-XR researches XR software engineering, reliability, security and privacy, AI-assisted testing and repair, and emerging embodied AI.",
  applicationName: "HenryLab-XR",
  keywords: [
    "extended reality",
    "XR software engineering",
    "XR reliability",
    "XR security",
    "embodied AI",
    "software testing",
  ],
  openGraph: {
    type: "website",
    siteName: "HenryLab-XR",
    title: "Engineering Reliable, Secure, and Intelligent XR Systems",
    description:
      "Researching XR software engineering, reliability, security and privacy, and emerging embodied AI.",
  },
  twitter: {
    card: "summary",
    title: "HenryLab-XR",
    description:
      "Engineering reliable, secure, and intelligent XR systems.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
