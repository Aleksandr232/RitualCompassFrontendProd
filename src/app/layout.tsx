import type { Metadata } from "next";
import Head from "next/head";
import { Montserrat } from "next/font/google";
import "./globals.css";
// import Header from "@/Layout/Header/Header";
import StoreProvider from "./StoreProvider";

const MontserratFamily = Montserrat({
  subsets: ["cyrillic"],
  weight: ["400", "600", "800"],
});

export const metadata: Metadata = {
  title: "Организация похорон в Казани",
  description: "Бесплатная помощь в организации похорон в Казани",
  keywords: [
    "Ритуальные услуги",
    "Организация похорон в Казани",
    "Похороны",
    "Памятники",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="120x120" href="/favicon-120x120.png" />
        <link rel="manifest" href="/site.webmanifest" />
      <meta name="google-site-verification" content="qMkF8mo5iBwpHPxlXmL0mi098687P7dcsagc9TWvdvw" />
      <meta name="yandex-verification" content="714505a43000fc0f" />
      </head>

      <body className={MontserratFamily.className}>
        <StoreProvider>
          {/* <Header /> */}
          {children}
        </StoreProvider>
      </body>
      
    </html>
  );
}
