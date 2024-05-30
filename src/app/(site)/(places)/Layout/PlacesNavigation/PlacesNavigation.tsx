"use client";
import LinkTag from "@/components/LinkTag/LinkTag";
import { FC, useState } from "react";
import styles from "./PlacesNavigation.module.css";
import { routers } from "@/utils/routers";
import { usePathname } from "next/navigation";

const PlacesNavigation: FC = () => {
  const router = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navigation}>
      <div className={styles.mobileMenu}>
        <button className={styles.burgerButton} onClick={toggleMenu}>
          <span className={styles.burgerIcon}></span>
        </button>
        {isOpen && (
          <div className={styles.mobileMenuContent}>
            <LinkTag
              url={routers.cemetery}
              appearance={"ghostBorder"}
              isActive={router === routers.cemetery}
            >
              Кладбища
            </LinkTag>
            <LinkTag
              url={routers.morgue}
              appearance={"ghostBorder"}
              isActive={router === routers.morgue}
            >
              Морги
            </LinkTag>
            <LinkTag
              url={routers.home}
              appearance={"ghostBorder"}
              isActive={router === routers.home}
            >
              Главная
            </LinkTag>
          </div>
        )}
      </div>
      <div className={styles.desktopMenu}>
        <LinkTag
          url={routers.cemetery}
          appearance={"ghostBorder"}
          isActive={router === routers.cemetery}
        >
          Кладбища
        </LinkTag>
        <LinkTag
          url={routers.morgue}
          appearance={"ghostBorder"}
          isActive={router === routers.morgue}
        >
          Морги
        </LinkTag>
        <LinkTag
          url={routers.home}
          appearance={"ghostBorder"}
          isActive={router === routers.home}
        >
          Главная
        </LinkTag>
      </div>
    </nav>
  );
};

export default PlacesNavigation;
