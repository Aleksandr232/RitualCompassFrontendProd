import { FC } from "react";
import styles from "./AboutList.module.css";
import LinkTag from "@/components/LinkTag/LinkTag";
import { IAboutListProps } from "@/interface/interface.slug";


const AboutList: FC<IAboutListProps> = ({ posts }) => {
  return (
    <ul className={styles.list}>
      {posts.map((post) => (
        <li key={post.slug}>
          <LinkTag url={`about/${post.slug}`} appearance={"ghost"}>
            {post.title}
          </LinkTag>
        </li>
      ))}
    </ul>
  );
};

export default AboutList;
