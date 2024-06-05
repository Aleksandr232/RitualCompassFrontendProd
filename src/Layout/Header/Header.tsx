import { FC } from "react";
import { IHeaderProps } from "./Header.props";
import styles from "./Header.module.css";
import Navigation from "../components/Navigation/Navigation";
import ImgTag from "@/components/ImgTag/ImgTag";
import LinkTag from "@/components/LinkTag/LinkTag";
import { routers } from "@/utils/routers";

const Header: FC<IHeaderProps> = (props) => {
  return (
    <header className={styles.header} {...props}>
      <LinkTag
        className={styles.logo_wrapper}
        url={routers.home}
        appearance={"ghost"}
      >
        <ImgTag
          url={"./ritual_logo.svg"}
          alt={"отзывы"}
          width={350}
          height={100}
        />
      </LinkTag>
      <nav className={styles.navigation}>
        <Navigation />
      </nav>
    </header>
  );
};

export default Header;
