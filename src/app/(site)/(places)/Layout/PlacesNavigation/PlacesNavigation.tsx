"use client";
import LinkTag from "@/components/LinkTag/LinkTag";
import { FC } from "react";
import styles from "./PlacesNavigation.module.css";
import { routers } from "@/utils/routers";
import { usePathname } from "next/navigation";

const PlacesNavigation: FC = () => {
  const router = usePathname();

  return (
    <nav className={styles.navigation}>
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
    </nav>
  );
};

export default PlacesNavigation;
