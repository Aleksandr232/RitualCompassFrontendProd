import { FC } from "react";
import { IHeaderProps } from "./Header.props";
import styles from "./Header.module.css";
import Navigation from "../components/Navigation/Navigation";
import ImgTag from "@/components/ImgTag/ImgTag";

const Header: FC<IHeaderProps> = (props) => {
  return (
    <header className={styles.header} {...props}>
      <div className={styles.logo_wrapper}>
        <ImgTag
          url={"./ritual_logo.svg"}
          alt={"отзывы"}
          width={350}
          height={100}
        />
      </div>
      <nav className={styles.navigation}>
        <Navigation />
      </nav>
    </header>
  );
};

export default Header;

