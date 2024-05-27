import { FC } from "react";
import styles from "./AboutList.module.css";

const AboutList: FC = () => {
  return (
    <ul className={styles.list}>
      <li>Получить бесплатную консультацию при жизни</li>
      <li>Что делать, если умер человек?</li>
      <li>Выбрать памятник</li>
      <li>Ритуальные услуги</li>
      <li>Кремация</li>
      <li>Выбрать кладбище</li>
      <li>Помощь в оформлении свидетельства о смерти</li>
    </ul>
  );
};

export default AboutList;
