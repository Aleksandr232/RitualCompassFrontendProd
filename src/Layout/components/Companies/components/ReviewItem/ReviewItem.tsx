import Htag from "@/components/Htag/Htag";
import Ptag from "@/components/Ptag/Ptag";
import Rating from "@/components/Rating/Rating";
import { FC } from "react";
import styles from "./ReviewItem.module.css";

export interface IReviewItem {
  name: string;
  rating: string;
  comment: string;
}

const ReviewItem: FC<IReviewItem> = ({ comment, name, rating }) => {
  console.log(name);

  return (
    <>
      {name === "" && <Ptag size="small">Нет комментариев.</Ptag>}
      <div className={styles.reviews_item}>
        <Htag tag="h3">{name}</Htag>
        <Rating isEditable={false} rating={Number(rating)} />

        <Ptag size="small">{comment}</Ptag>
      </div>
    </>
  );
};

export default ReviewItem;
