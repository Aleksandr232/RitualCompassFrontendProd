import { FC } from "react";
import styles from "./AboutTitle.module.css";
import { IAboutTitleProps } from "./AboutTitle.props";


const AboutTitle: FC<IAboutTitleProps> = ({ children }) => {
  return <header className={styles.header}>{children}</header>;
};

export default AboutTitle;
