import Header from "@/Layout/Header/Header";
import { Metadata } from "next";
import styles from "./page.module.css";
import AboutTitle from "./Layout/AboutTitle/AboutTitle";
import Htag from "@/components/Htag/Htag";
import AboutMain from "./Layout/AboutMain/PlacesMain";
import Telephone from "@/components/Telephone/Telephone";
import Footer from "@/Layout/Footer/Footer";
import AboutList from "./components/AboutList/AboutList";
import { FC } from "react";
import fetchAboutRequest from "@/helpers/fetchAboutRequest/fetchAboutRequest";
import API from "@/utils/api/api";
import { IAboutSlugProps } from "@/interface/interface.slug";

export const metadata: Metadata = {
  title: "Ритуальные услуги в Казани",
  description:
    "Оказываем бесплатную помощь в поиске проверенных ритуальных компаний",
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


const About: FC = async () => {
  const posts: IAboutSlugProps[] = await fetchAboutRequest<IAboutSlugProps[]>(API.params.aboutSlug);

  return (
    <main className={styles.main}>
      <Header />
      <AboutTitle>
        <Htag tag="h1">С чем мы помогаем ?</Htag>
        <Telephone />
      </AboutTitle>

      <AboutMain>
        <AboutList posts={posts} />
      </AboutMain>
      <Footer />
    </main>
  );
};

export default About;
