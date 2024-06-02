"use client";
import { FC } from "react";
import styles from "./NavigationDesktop.module.css";
import LinkTag from "@/components/LinkTag/LinkTag";
import { navigationLink } from "../const/navigationLink";

const NavigationDesktop: FC = () => {
  return (
    <ul className={styles.navigation_item}>
      {navigationLink.map((link) => (
        <li key={link.id}>
          <LinkTag url={link.route} appearance={"ghost"}>
            {link.name}
          </LinkTag>
        </li>
      ))}
    </ul>
  );
};

export default NavigationDesktop;
