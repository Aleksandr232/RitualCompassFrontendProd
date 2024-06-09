import { FC } from "react";
import styles from "./AboutTitle.module.css";
import { IAboutTitleProps } from "./AboutTitle.props";


const AboutTitle: FC<IAboutTitleProps> = ({ children }) => {
  return <div className={styles.header}>{children}</div>;
};

export default AboutTitle;
