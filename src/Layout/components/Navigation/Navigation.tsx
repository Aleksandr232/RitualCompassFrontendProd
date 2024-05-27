import { FC } from "react";
import styles from "./Navigation.module.css";
import LinkTag from "@/components/LinkTag/LinkTag";
import { routers } from "@/utils/routers";

const Navigation: FC = () => {
  return (
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
  );
};

export default Navigation;
