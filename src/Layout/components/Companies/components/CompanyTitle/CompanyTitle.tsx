import { FC, useState } from "react";
import { ICompanyTitleProps } from "./CompanyTitle.props";
import RatingCompanies from "@/Layout/components/RatingCompanies/RatingCompanies";
import Htag from "@/components/Htag/Htag";
import Ptag from "@/components/Ptag/Ptag";
import ButtonCloseModal from "@/components/ButtonCloseModal/ButtonCloseModal";
import ImgTag from "@/components/ImgTag/ImgTag";
import styles from "./CompanyTitle.module.css";
import Button from "@/components/Button/Button";
import ReviewItem from "../ReviewItem/ReviewItem";
import FeedBackIcon from "./feedbackIcon/feedbackIcon";

const CompanyTitle: FC<ICompanyTitleProps> = ({
  average_rating,
  company_id,
  company_ritual,
  isEditable,
  max_rating,
  min_rating,
  total_rating_requests,
  user_names_reviews,
  user_comments_reviews,
  user_rating_reviews,
}) => {
  const [isReviewsVisible, setIsReviewsVisible] = useState<boolean>(false);
  const [visibleReviewsCount, setVisibleReviewsCount] = useState<number>(3);

  const showReviews = () => setIsReviewsVisible((prev) => !prev);

  const showMoreReviews = () => {
    if (visibleReviewsCount + 3 < user_names_reviews.length) {
      setVisibleReviewsCount((prev) => prev + 3);
    } else {
      setVisibleReviewsCount(user_names_reviews.length);
      setIsReviewsVisible(false);
    }
  };
  return (
    <>
      <Htag tag="h2">{company_ritual}</Htag>
      <div className={styles.rating_block}>
        <RatingCompanies
          isEditable={isEditable}
          ratings={Number(average_rating)}
          company_id={company_id}
        />
        <Ptag size="large">
          <strong>{average_rating} </strong>
        </Ptag>
      </div>

      <div className={styles.show_reviews_block}>
        <span className={styles.show_reviews} onClick={showReviews}>
          <Ptag size="large" title="Открыть/Закрыть (Отзывы)">
            <strong>Отзывы:</strong>
          </Ptag>
          <ImgTag
            url={"./roundedSolid.svg"}
            alt={"отзывы"}
            width={20}
            height={20}
          />
        </span>
        <FeedBackIcon max={max_rating} min={min_rating} />
      </div>

      {isReviewsVisible && (
        <div className={styles.reviews_wrapper}>
          <div className={styles.reviews}>
            {user_names_reviews
              .slice(0, visibleReviewsCount)
              .map((name: string, index: number) => (
                <ReviewItem
                  key={`${company_id}_${index}`}
                  name={name}
                  rating={user_rating_reviews[index]}
                  comment={user_comments_reviews[index]}
                />
              ))}
          </div>
          <div className={styles.buttons_wrapper}>
            <ButtonCloseModal setIsOpen={showMoreReviews} />
            {visibleReviewsCount < user_names_reviews.length && (
              <div className={styles.buttons_wrapper}>
                <Button appearance="svgIcon" onClick={showMoreReviews}>
                  <ImgTag
                    url={"./roundedSolid.svg"}
                    alt={"отзывы"}
                    width={30}
                    height={30}
                  />
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default CompanyTitle;
