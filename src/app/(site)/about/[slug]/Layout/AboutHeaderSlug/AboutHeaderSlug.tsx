import Navigation from "@/Layout/components/Navigation/Navigation";
import Htag from "@/components/Htag/Htag";
import Telephone from "@/components/Telephone/Telephone";
import styles from "./AboutHeaderSlug.module.css";
const AboutHeaderSlug = () => {
  return (
    <header className={styles.header_wrapper}>
      <div className={styles.left_panel}>
        <Htag tag="h2">Для связи с нами:</Htag>
        <Telephone />
      </div>
      <nav className={styles.right_panel}>
        <Navigation />
      </nav>
    </header>
  );
};

export default AboutHeaderSlug;
