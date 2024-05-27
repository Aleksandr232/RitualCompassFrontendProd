import { FC } from "react";
import styles from "./AboutMain.module.css";
import { IAboutMainProps } from "./AboutMain.props";

const AboutMain: FC<IAboutMainProps> = ({ children }) => {
  return <main className={styles.main}>{children}</main>;
};

export default AboutMain;
