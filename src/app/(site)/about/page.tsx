import Header from "@/Layout/Header/Header";
import { Metadata } from "next";
import styles from "./page.module.css";
import AboutTitle from "./Layout/AboutTitle/AboutTitle";
import Htag from "@/components/Htag/Htag";
import Ptag from "@/components/Ptag/Ptag";
import AboutMain from "./Layout/AboutMain/PlacesMain";
import AboutList from "./components/AboutList/AboutList";
import Telephone from "@/components/Telephone/Telephone";

export const metadata: Metadata = {
  title: "Памятники Ритуальные услуги в Казани",
  description: "Какие ритуальные услуги выбрать в Казани?",
  keywords: [
    "Ритуальные услуги",
    "Организация похорон в Казани",
    "Похороны",
    "Памятники",
    "установка памятников",
    "Кремация",
    "Что делать, если умер человек?",
  ],
};
export default function Morgue() {
  return (
    <main className={styles.main}>
      <Header />
      <AboutTitle>
        <Htag tag="h1">С чем мы помогаем ?</Htag>
        <Telephone />
        
      </AboutTitle>

      <AboutMain>
        <AboutList />
      </AboutMain>
    </main>
  );
}
