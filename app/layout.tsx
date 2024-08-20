import type { Metadata, Viewport } from "next";
import { Schibsted_Grotesk as SchibstedGrotesk, Lora } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SiteHeader } from "@/components/site-header";
import Providers from "@/components/providers";
import { siteConfig } from "@/config/site";
import SiteFooter from "@/components/site-footer";

const schibstedGrotesk = SchibstedGrotesk({
  subsets: ["latin"],
  variable: "--font-sans",
});
const lora = Lora({ subsets: ["latin"], variable: "--font-serif" });

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? siteConfig.url),
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-pt-[4rem]">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          schibstedGrotesk.variable,
          lora.variable
        )}
      >
        <Providers>
          <div className="relative flex min-h-dvh flex-col bg-background">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
        </Providers>
      </body>
    </html>
  );
}
