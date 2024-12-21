import type { Metadata } from "next";
import { Nunito_Sans, Ubuntu } from "next/font/google";
import "./globals.css";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-ubuntu"
});

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito-sans"
});

export const metadata: Metadata = {
  title: "Eccomerce Dashboard",
  description: "A dashboard for your eccomerce"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${ubuntu.variable} ${nunitoSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
