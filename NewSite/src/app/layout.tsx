import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Binding Plus Jakarta Sans to the variable name '--font-inter' as requested for config compatibility
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-inter", 
  display: "swap",
});

export const metadata: Metadata = {
  title: "GovCon Inc. | Systematic Government Contracting",
  description: "From Concept to Continuity. The Engine of Government Contracting.",
  keywords: ['government contracting', 'win government contracts', 'GovCon', 'SAM registration', 'GSA', 'proposal writing'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jakarta.variable} antialiased min-h-screen flex flex-col`}>
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:bg-white focus:px-3 focus:py-2 focus:rounded-md focus:shadow">Skip to main content</a>
        <Header />
        <main id="main" className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}