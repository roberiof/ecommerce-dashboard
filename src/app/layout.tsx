import type { Metadata } from "next";
import { Nunito_Sans, Ubuntu } from "next/font/google";
import "./globals.css";
import QueryClientProviderApp from "@/store/providers/QueryClientApp";
import { ToastContainer } from "react-toastify";

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
          className={`${ubuntu.variable} ${nunitoSans.variable} antialiased`}
        >
          <ToastContainer />
          {children}
        </body>
      </QueryClientProviderApp>
    </html>
  );
}
