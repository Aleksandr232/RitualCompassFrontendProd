import { IAboutSlugProps } from "@/interface/interface.slug";
import { FC } from "react";
import styles from "./AboutMainSlug.module.css";
import Htag from "@/components/Htag/Htag";
import Ptag from "@/components/Ptag/Ptag";
import LinkTag from "@/components/LinkTag/LinkTag";
import { routers } from "@/utils/routers";

const AboutMainSlug: FC<Partial<IAboutSlugProps>> = ({ description, title }) => {
  
  const points = description;
  console.log(points);
  

  return (
    <div className={styles.main}>
      <Htag tag="h2">{title}</Htag>
      {points?.map((point, index) => (
        <Ptag key={index} size="medium">{point}</Ptag>
      ))}
      <LinkTag appearance="medium" url={routers.about}>Назад</LinkTag>
    </div>
  );
};

export default AboutMainSlug;
