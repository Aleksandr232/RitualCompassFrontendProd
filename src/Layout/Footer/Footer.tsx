import { FC } from "react";
import { IFooterProps } from "./Footer.props";
import Link from "next/link";
import styles from "./Footer.module.css";



const Footer: FC<IFooterProps> = (props) => {
  const currentYear = new Date().getFullYear();
  const createdYear = 2024;

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <Link href="/privacy.pdf" className={styles.privacyLink} target="_blank">
          Политика конфиденциальности
        </Link>
        <p className={styles.createdText}>
          © Ритуальный компас {currentYear === createdYear ? currentYear : `${createdYear} - ${currentYear}`}
        </p>
      </div>
    </footer>
  );
};

export default Footer;