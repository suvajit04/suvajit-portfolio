import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Suvajit Sahoo | Software Engineer & Full Stack Developer",
    template: "%s | Suvajit Sahoo",
  },
  description: "Portfolio of Suvajit Sahoo — Software Engineer, Full Stack Developer, and backend-focused engineer with academic AI research experience.",
  keywords: ["Suvajit Sahoo", "Software Engineer", "Full Stack Developer", "Backend Developer", "React", "Node.js", "TypeScript", "HisNet"],
  authors: [{ name: "Suvajit Sahoo" }],
  openGraph: {
    title: "Suvajit Sahoo | Software Engineer",
    description: "Backend engineering, full-stack projects, and AI research.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#090b12",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
