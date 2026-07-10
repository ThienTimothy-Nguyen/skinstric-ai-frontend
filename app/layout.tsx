import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/global/Header";

const robotoSans = Roboto({
  variable: "--font-roboto-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Skinstric AI",
  description: "AI-powered skincare analysis platform that helps users understand their skin and receive personalized skincare insights.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${robotoSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />  
          {children}
      </body>
    </html>
  );
}
