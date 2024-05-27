"use client";

import LikeDislike from "@/components/LikeDislike/LikeDislike";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";
import Rating from "@/components/Rating/Rating";
import Header from "@/Layout/Header/Header";
import Main from "@/Layout/Main/Main";
import { useState } from "react";
import Companies from "@/Layout/components/Companies/Companies";
import Banner from "@/Layout/Banner/Banner";

export default function Home() {
  const [rating, setRating] = useState<number>(4);

  return (
    <main className={styles.main}>
      <Header />
      <Banner/>
      <Main />
    </main>
  );
}
