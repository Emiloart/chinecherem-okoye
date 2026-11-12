import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Okoye Melody Chinecherem | Medical Laboratory Technician",
  description:
    "Professional portfolio of Okoye Melody Chinecherem, Medical Laboratory Technician based in Lagos, Nigeria.",
  openGraph: {
    title: "Okoye Melody Chinecherem | Medical Laboratory Technician",
    description:
      "Practical laboratory experience in specimen collection, routine diagnostic investigations, quality control and patient-focused service.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
