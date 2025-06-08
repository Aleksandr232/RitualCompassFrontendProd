import { MainNav } from "@/features/nav/main-nav";
import styles from "./index.module.scss";
import Img from "/bgc.png";

export const MainPage = () => (
  <div className={styles.wrapper}>
    <MainNav />
    <section className={styles.hero}>
      <div className={styles.overlay} />
      <img src={Img} alt="Ритуальные кольца" className={styles.bg} />
      <div className={styles.heroContent}>
        <h1>Ритуальные услуги</h1>
        <p>Профессиональная помощь и поддержка в трудную минуту</p>
      </div>
    </section>
    <section className={styles.contact}>
      <h2>Как с нами связаться</h2>
      <p>
        Телефон: <a href="tel:+79999999999">+7 (999) 999-99-99</a>
      </p>
      <p>
        Email: <a href="mailto:info@ritual.ru">info@ritual.ru</a>
      </p>
      <button className={styles.contactBtn}>Заказать звонок</button>
    </section>
    <section className={styles.agencies}>
      <h2>Ритуальные агентства</h2>
      <div className={styles.agencyList}>
        <div className={styles.agencyCard}>
          <h3>Агентство «Покой»</h3>
          <p>г. Москва, ул. Примерная, 1</p>
          <a href="tel:+79998887766">+7 (999) 888-77-66</a>
        </div>
        <div className={styles.agencyCard}>
          <h3>Агентство «Вечность»</h3>
          <p>г. Москва, ул. Вечная, 2</p>
          <a href="tel:+79997776655">+7 (999) 777-66-55</a>
        </div>
      </div>
    </section>
  </div>
);
