import PlacesHeader from "../Layout/PlacesHeader/PlacesHeader";
import Htag from "@/components/Htag/Htag";
import PlacesMain from "../Layout/PlacesMain/PlacesMain";
import PlacesNavigation from "../Layout/PlacesNavigation/PlacesNavigation";

import { cemetery } from "./const/cemeteryPlaces";
import { Metadata } from "next";
import Header from "@/Layout/Header/Header";
import PlacesItem from "../components/PlacesItem/PlacesItem";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Кладбища Казани",
  description: "Где находятся кладбища в Казани?",
  keywords: [
    "Кладбища Казани",
    "Полный гид по кладбищам города Казани",
    "Где находятся кладбища в Казани?",
    "Кладбища",
  ],
};

export default function Cemetery() {
  return (
    <main className={styles.main}>
      <Header />
      <PlacesHeader>
        <Htag tag="h1">КЛАДБИЩА КАЗАНИ (ФИЛИАЛЫ)</Htag>
      </PlacesHeader>
      <PlacesNavigation />
      <PlacesMain>
        <PlacesItem places={cemetery} />
      </PlacesMain>
    </main>
  );
}
