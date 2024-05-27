import { FC } from "react";
import { ILinkTagProps } from "./LinkTag.props";
import Link from "next/link";
import cn from "classnames";
import styles from "./LinkTag.module.css";

const LinkTag: FC<ILinkTagProps> = ({ children, url, appearance,isActive, ...arg }) => {
  return (
    <Link
      href={url}
      className={cn(styles.link, {
        [styles.small]: appearance === "small",
        [styles.medium]: appearance === "medium",
        [styles.large]: appearance === "large",
        [styles.ghost]: appearance === "ghost",
        [styles.ghostBorder]: appearance === "ghostBorder",
        [styles.isActive]: isActive,
      })}
      {...arg}
    >
      {children}
    </Link>
  );
};

export default LinkTag;
