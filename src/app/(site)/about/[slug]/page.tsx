import { FC } from "react";

import AboutMainSlug from "./Layout/AboutMainSlug/AboutMainSlug";
import AboutHeaderSlug from "./Layout/AboutHeaderSlug/AboutHeaderSlug";

import styles from './page.module.css'



const AboutPage: FC = () => {
 
  return (
    <main className={styles.main}>
      <AboutHeaderSlug />
      <AboutMainSlug/>
    </main>
  );
};

export default AboutPage;
