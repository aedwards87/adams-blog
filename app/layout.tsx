import type { Metadata } from "next";
import { Schibsted_Grotesk as SchibstedGrotesk, Lora } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SiteHeader } from "@/components/site-header";

const schibstedGrotesk = SchibstedGrotesk({
  subsets: ["latin"],
  variable: "--font-sans",
});
const lora = Lora({ subsets: ["latin"], variable: "--font-serif" });

export const metadata: Metadata = {
  title: "Adam's Portfolio",
  description: "Graphic Designer and Web Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          schibstedGrotesk.variable,
          lora.variable
        )}
      >
        <div className="relative flex min-h-dvh flex-col bg-background">
          <SiteHeader />
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}
