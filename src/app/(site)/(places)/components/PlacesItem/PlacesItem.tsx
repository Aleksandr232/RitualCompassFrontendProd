import { FC } from "react";
import Htag from "@/components/Htag/Htag";
import LinkTag from "@/components/LinkTag/LinkTag";
import { IPlacesItemProps } from "./PlacesItem.props";
import styles from './PlacesItem.module.css'
const PlacesItem: FC<IPlacesItemProps> = ({ places }) => {
  return (
    <ul className={styles.items_wrapper}>
      {places.map((places) => (
        <li key={places.id} className={styles.item}>
          <Htag tag="h2">{places.name}</Htag>
          <LinkTag
            target="_blank"
            rel="noopener noreferrer"
            appearance={"ghost"}
            url={places.coordinates}
          >
            Показать на карте
          </LinkTag>
        </li>
      ))}
    </ul>
  );
};

export default PlacesItem;
