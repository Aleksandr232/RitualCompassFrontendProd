"use client";
import { usePathname } from "next/navigation";
import CanWeHelp from "../../../components/CanWeHelp/CanWeHelp";
import { HelpersItemsQuestions } from "../../const";

import styles from './AboutMainSlug.module.css'

const AboutMainSlug = () => {
  const pathname = usePathname();
  const HelpersItems = HelpersItemsQuestions.filter((i) =>
    i.slug.includes(pathname)
  );
  return (
    <div className={styles.main}>
      {HelpersItems.map((i) => (
        <CanWeHelp key={i.slug} description={i.description} title={i.title} />
      ))}
    </div>
  );
};

export default AboutMainSlug;
