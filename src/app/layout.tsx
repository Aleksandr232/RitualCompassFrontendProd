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
      <Head>
      <link rel="icon"  href="/favicon-96x96.png"/>
      </Head>

      <body className={MontserratFamily.className}>
        <StoreProvider>
          {/* <Header /> */}
          {children}
        </StoreProvider>
      </body>
      
    </html>
  );
}
