import Header from "@/Layout/Header/Header";
import Htag from "@/components/Htag/Htag";
import { Metadata } from "next";
import PlacesHeader from "../Layout/PlacesHeader/PlacesHeader";
import PlacesMain from "../Layout/PlacesMain/PlacesMain";
import PlacesItem from "../components/PlacesItem/PlacesItem";
import PlacesNavigation from "../Layout/PlacesNavigation/PlacesNavigation";
import { morgue } from "./const/morguePlaces";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Морги Казани",
  description: "Где находятся морги в Казани?",
  keywords: [
    "Морги Казани",
    "Где находятся морги в Казани?",
    "Морг",
  ],
};
export default function Morgue() {
  return (
    <main className={styles.main}>
      <Header />
      <PlacesHeader>
        <Htag tag="h1">МОРГИ КАЗАНИ</Htag>
      </PlacesHeader>
      <PlacesNavigation />
      <PlacesMain>
        <PlacesItem places={morgue} />
      </PlacesMain>
    </main>
  );
}
