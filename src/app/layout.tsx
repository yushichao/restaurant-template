import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { siteConfig, themeConfig } from "@/config";
import { Footer, Header } from "@/components/layout";
import { getThemeCssVars } from "@/lib/theme/css-vars";
import "./globals.css";

const inter = Inter({
  variable: "--font-family-body",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-family-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
      style={getThemeCssVars(themeConfig)}
    >
      <body className="flex min-h-full flex-col font-body">
        <Header />
        <main className="flex flex-1 flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
