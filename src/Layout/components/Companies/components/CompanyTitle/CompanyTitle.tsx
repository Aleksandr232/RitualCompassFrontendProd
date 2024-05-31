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
      <RatingCompanies
        isEditable={isEditable}
        ratings={Number(average_rating)}
        company_id={company_id}
      />
      <span className={styles.show_reviews} onClick={showReviews}>
        <Ptag size="medium" title="Открыть/Закрыть (Отзывы)">
          Отзывы:
        </Ptag>
        <ImgTag
          url={"./roundedSolid.svg"}
          alt={"отзывы"}
          width={20}
          height={20}
        />
      </span>

      <div className={styles.rating_position}>
      <Ptag size="large">{average_rating} </Ptag>
      </div>
      <Ptag size="medium">
      <svg className={styles.positive} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" >
        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 0 0-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634Zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 0 1-.189-.866c0-.298.059-.605.189-.866Zm2.023 6.828a.75.75 0 1 0-1.06-1.06 3.75 3.75 0 0 1-5.304 0 .75.75 0 0 0-1.06 1.06 5.25 5.25 0 0 0 7.424 0Z" clipRule="evenodd" />
      </svg>
         {max_rating}</Ptag>
      <Ptag size="medium"><svg className={styles.negative} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" >
  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 0 0-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634Zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 0 1-.189-.866c0-.298.059-.605.189-.866Zm-4.34 7.964a.75.75 0 0 1-1.061-1.06 5.236 5.236 0 0 1 3.73-1.538 5.236 5.236 0 0 1 3.695 1.538.75.75 0 1 1-1.061 1.06 3.736 3.736 0 0 0-2.639-1.098 3.736 3.736 0 0 0-2.664 1.098Z" clipRule="evenodd" />
</svg>
{min_rating}</Ptag>
      {/* <Ptag size="medium">Всего: {total_rating_requests}</Ptag> */}

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
