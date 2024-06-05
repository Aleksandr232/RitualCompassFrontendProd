import { FC } from "react";
import styles from "./AboutMain.module.css";
import { IAboutMainProps } from "./AboutMain.props";

const AboutMain: FC<IAboutMainProps> = ({ children }) => {
  return <div className={styles.main}>{children}</div>;
};

export default AboutMain;
