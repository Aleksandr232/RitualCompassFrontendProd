import { FC } from "react";
import styles from "./Main.module.css";
import Companies from "../components/Companies/Companies";
import OurServices from "../components/OurServices/OurServices";

const Main: FC = () => {
  return (
    <div className={styles.container}>
      <OurServices />
      <Companies />
    </div>
  );
};

export default Main;
