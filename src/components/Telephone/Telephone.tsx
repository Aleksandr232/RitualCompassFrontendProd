import { routers } from "@/utils/routers";
import styles from "./Telephone.module.css";
import { FC } from "react";

const Telephone: FC = () => {
  return <span className={styles.telephone}>{routers.number}</span>;
};

export default Telephone;
