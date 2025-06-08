import { useFetch } from "@/shared/lib";
import styles from "./index.module.scss";
export function Main() {
  const { fetchData } = useFetch("https://ritualcompass.ru/api/all/rituals");

  console.log(fetchData);

  return <div className={styles.main}>main</div>;
}
