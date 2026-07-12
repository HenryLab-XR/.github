import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HenryLab-XR | XR Reliability, Security, and Embodied AI",
  description:
    "HenryLab-XR is a research group focused on XR Reliability, XR Software Engineering, XR Security, and future-direction Embodied AI.",
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
    title: "HenryLab-XR | XR Reliability, Security, and Embodied AI",
    description:
      "Researching dependable immersive software across XR reliability, software engineering, security, and embodied AI.",
  },
  twitter: {
    card: "summary",
    title: "HenryLab-XR",
    description:
      "XR Reliability, Security, and Embodied AI.",
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
