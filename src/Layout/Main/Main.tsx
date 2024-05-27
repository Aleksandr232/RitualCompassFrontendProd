import { FC } from "react";
// import { IMainProps } from "./Main.props";
import styles from "./Main.module.css";
import Companies from "../components/Companies/Companies";
import OurServices from "../components/OurServices/OurServices";

const Main: FC = () => {
  return (
    <main className={styles.container}>
     
      <OurServices/>

      <Companies />
    </main>
  );
};

export default Main;
