import LinkTag from "@/components/LinkTag/LinkTag";
import {useState } from "react";
import styles from "./NavigationMobile.module.css";
import ButtonCloseModal from "@/components/ButtonCloseModal/ButtonCloseModal";
import cn from "classnames";
import { navigationLink } from "../const/navigationLink";

const NavigationMobile = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className={styles.navigation_mobile}>
      <div className={styles.burger_menu} onClick={toggleMenu}>
        <span className={styles.burger_line}></span>
        <span className={styles.burger_line}></span>
        <span className={styles.burger_line}></span>
      </div>

      {isMenuOpen && (
        <ul
          className={cn(styles.mobile_menu, {
            [styles.mobile_menu_open]: isMenuOpen,
           
          })}
        >
          <span className={styles.button_close}>
            <ButtonCloseModal setIsOpen={setIsMenuOpen} />
          </span>

          {navigationLink.map((link) => (
            <li key={link.id}>
              <LinkTag url={link.route} appearance={"ghost"}>
                {link.name}
              </LinkTag>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavigationMobile;
