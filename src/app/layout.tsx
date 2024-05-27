import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
// import Header from "@/Layout/Header/Header";
import StoreProvider from "./StoreProvider";

const OpenSans = Montserrat({
  subsets: ["cyrillic"],
  weight: ["400", "600", "800"],
});

export const metadata: Metadata = {
  title: "Организация похорон в Казани",
  description: "Бесплатная помощь в организации похорон в Казани",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={OpenSans.className}>
        <StoreProvider>
          {/* <Header /> */}
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
