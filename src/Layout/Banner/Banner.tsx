import Htag from "@/components/Htag/Htag";
import Ptag from "@/components/Ptag/Ptag";

import styles from "./Banner.module.css";
import { FC } from "react";

const Banner: FC = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.bannerContent}>
        <Htag tag="h1"> Ритуальные услуги в Казани</Htag>
        <Ptag size="medium">
          Оказываем бесплатную информативную помощь по ритуальным услагуам
        </Ptag>
      </div>
    </div>
  );
};

export default Banner;
