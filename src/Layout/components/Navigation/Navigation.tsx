'use client'
import { useState, FC } from "react";
import styles from "./Navigation.module.css";
import LinkTag from "@/components/LinkTag/LinkTag";
import { routers } from "@/utils/routers";

const Navigation: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navigation}>
      <div className={styles.navigation_desktop}>
        <ul className={styles.navigation_item}>
          <li>
            <LinkTag url={routers.home} appearance="ghost">
              Главная
            </LinkTag>
          </li>
          <li>
            <LinkTag url={routers.cemetery} appearance="ghost">
              Кладбища
            </LinkTag>
          </li>
          <li>
            <LinkTag url={routers.morgue} appearance="ghost">
              Морги
            </LinkTag>
          </li>
          <li>
            <LinkTag url={routers.about} appearance="ghost">
              О нас
            </LinkTag>
          </li>
          <li>
            <LinkTag url={routers.home} appearance="ghost">
              Контакты
            </LinkTag>
          </li>
        </ul>
      </div>

      <div className={styles.navigation_mobile}>
        <button className={styles.burger_menu} onClick={toggleMenu}>
          <span className={styles.burger_line}></span>
          <span className={styles.burger_line}></span>
          <span className={styles.burger_line}></span>
        </button>

        {isMenuOpen && (
          <ul className={styles.mobile_menu}>
            <li>
              <LinkTag url={routers.home} appearance="ghost">
                Главная
              </LinkTag>
            </li>
            <li>
              <LinkTag url={routers.cemetery} appearance="ghost">
                Кладбища
              </LinkTag>
            </li>
            <li>
              <LinkTag url={routers.morgue} appearance="ghost">
                Морги
              </LinkTag>
            </li>
            <li>
              <LinkTag url={routers.about} appearance="ghost">
                О нас
              </LinkTag>
            </li>
            <li>
              <LinkTag url={routers.home} appearance="ghost">
                Контакты
              </LinkTag>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
