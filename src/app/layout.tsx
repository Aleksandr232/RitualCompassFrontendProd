import type { Metadata } from "next";
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
      <link type="image/x-icon" rel="shortcut icon" href="/favicon.ico"/>
      <link type="image/png" sizes="16x16" rel="icon" href="/favicon-16x16.png"/>
      <link type="image/png" sizes="32x32" rel="icon" href="/favicon-32x32.png"/>
      <link type="image/png" sizes="96x96" rel="icon" href="/favicon-96x96.png"/>
      <link type="image/png" sizes="120x120" rel="icon" href="/favicon-120x120.png"/>
      <link type="image/png" sizes="72x72" rel="icon" href="/android-icon-72x72.png"/>
      <link type="image/png" sizes="96x96" rel="icon" href="/android-icon-96x96.png"/>
      <link type="image/png" sizes="144x144" rel="icon" href="/android-icon-144x144.png"/>
      <link type="image/png" sizes="192x192" rel="icon" href="/android-icon-192x192.png"/>
      <link type="image/png" sizes="512x512" rel="icon" href="/android-icon-512x512.png"/>
      <link sizes="57x57" rel="apple-touch-icon" href="/apple-touch-icon-57x57.png"/>
      <link sizes="60x60" rel="apple-touch-icon" href="/apple-touch-icon-60x60.png"/>
      <link sizes="72x72" rel="apple-touch-icon" href="/apple-touch-icon-72x72.png"/>
      <link sizes="76x76" rel="apple-touch-icon" href="/apple-touch-icon-76x76.png"/>
      <link sizes="114x114" rel="apple-touch-icon" href="/apple-touch-icon-114x114.png"/>
      <link sizes="120x120" rel="apple-touch-icon" href="/apple-touch-icon-120x120.png"/>
      <link sizes="144x144" rel="apple-touch-icon" href="/apple-touch-icon-144x144.png"/>
      <link sizes="152x152" rel="apple-touch-icon" href="/apple-touch-icon-152x152.png"/>
      <link sizes="180x180" rel="apple-touch-icon" href="/apple-touch-icon-180x180.png"/>
      <link color="#e52037" rel="mask-icon" href="/safari-pinned-tab.svg"/>
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
