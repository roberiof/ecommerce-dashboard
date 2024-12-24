import type { Metadata } from "next";
// eslint-disable-next-line import/order
import { Nunito_Sans, Ubuntu } from "next/font/google";

import "./globals.css";
import { ToastContainer } from "react-toastify";

import QueryClientProviderApp from "@/store/providers/QueryClientApp";

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
      <QueryClientProviderApp>
        <body
          className={`${ubuntu.variable} ${nunitoSans.variable} antialiased overflow-x-hidden`}
        >
          <ToastContainer />
          {children}
        </body>
      </QueryClientProviderApp>
    </html>
  );
}
