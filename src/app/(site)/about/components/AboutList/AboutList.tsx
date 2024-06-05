import { FC } from "react";
import styles from "./AboutList.module.css";
import LinkTag from "@/components/LinkTag/LinkTag";
import { HelpersItemsQuestions } from "../../[slug]/const";


const AboutList: FC = () => {
  return (
    <ul className={styles.list}>
      {HelpersItemsQuestions.map((item) => (
        <li key={item.slug}>
          <LinkTag url={item.slug} appearance={"ghost"}>
            {item.title}
          </LinkTag>
        </li>
      ))}
    </ul>
  );
};

export default AboutList;
