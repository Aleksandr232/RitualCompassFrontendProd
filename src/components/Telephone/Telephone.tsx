import { routers } from "@/utils/routers";
import styles from "./Telephone.module.css";
import { FC } from "react";
import LinkTag from "../LinkTag/LinkTag";

const Telephone: FC = () => {
  return <LinkTag className={styles.telephone} appearance="ghost" url={routers.telephone}>{routers.number}</LinkTag>;
};

export default Telephone;
