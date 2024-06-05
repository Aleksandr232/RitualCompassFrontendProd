import styles from "./page.module.css";
import Header from "@/Layout/Header/Header";
import Main from "@/Layout/Main/Main";
import Banner from "@/Layout/Banner/Banner";

export default function Home() {

  return (
    <main className={styles.main}>
      <Header />
      <Banner/>
      <Main />
    </main>
  );
}
