import type { Metadata, Viewport } from "next";
import { Neuton, Montserrat } from "next/font/google";
import "./globals.css";

const neuton = Neuton({
  subsets: ["latin"],
  weight: ["200", "300", "400", "700", "800"],
  variable: "--font-neuton",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export const metadata: Metadata = {
  title: "MODERN BIOTECH LAB | KSPCB Approved Water Testing & Laboratory Training",
  description: "Kerala State Pollution Control Board Approved B Grade Laboratory (License No. PCB/LAB/C11/2018-B). Professional water testing (Drinking & Waste water) and advanced laboratory training programs.",
  keywords: [
    "Modern Biotech Lab",
    "Water Quality Analysis",
    "Drinking Water Testing",
    "Waste Water Analysis",
    "KSPCB Approved Laboratory",
    "Pattambi Water Testing",
    "Kerala Water Quality Analysis",
    "Water Testing Laboratory Palakkad",
    "Laboratory Training Kerala",
    "Food Analysis Training",
    "Bioinformatics Training",
    "Computerized Drug Designing",
    "Molecular Docking Training"
  ],
  authors: [{ name: "Modern Biotech Lab" }],
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${neuton.variable} ${montserrat.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
