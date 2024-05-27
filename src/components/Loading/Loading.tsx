import { FC } from "react";
import { ILoadingProps } from "./Loading.props";
import Link from "next/link";
import Htag from "../Htag/Htag";
import Ptag from "../Ptag/Ptag";
import styles from './Loading.module.css'

const Loading: FC<ILoadingProps> = () => {
  return (
    <div className={styles.loading_wrapper}>
      <Htag tag={"h2"}>Идет загрузка...</Htag>
      <Ptag size={"large"}>
        Если загрузка не происходит, вернитесь на начальную страницу...
      </Ptag>
      <Link className={styles.link} href={"/"}>Начальная страница</Link>
    </div>
  );
};

export default Loading;
