import { FC, useState } from "react";
import { ICompanyTitleProps } from "./CompanyTitle.props";
import RatingCompanies from "@/Layout/components/RatingCompanies/RatingCompanies";
import Htag from "@/components/Htag/Htag";
import Ptag from "@/components/Ptag/Ptag";
import Rating from "@/components/Rating/Rating";
import ButtonCloseModal from "@/components/ButtonCloseModal/ButtonCloseModal";
import ImgTag from "@/components/ImgTag/ImgTag";
import styles from "./CompanyTitle.module.css";

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
  const showReviews = () => {
    setIsReviewsVisible(!isReviewsVisible);
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
        <Ptag size="medium">Отзывы:</Ptag>
        <ImgTag
          url={"./roundedSolid.svg"}
          alt={"отзывы"}
          width={15}
          height={15}
        />
      </span>

      <Ptag size="medium">Рейтинг: {average_rating} </Ptag>
      <Ptag size="medium">Положительных: {max_rating}</Ptag>
      <Ptag size="medium">Отрицательных: {min_rating}</Ptag>
      <Ptag size="medium">Всего: {total_rating_requests}</Ptag>

      {isReviewsVisible && (
        <div className={styles.container}>
          <div className={styles.reviews_wrapper}>
            {user_names_reviews ? (
              user_names_reviews.map((name: string, index: number) => (
                <div key={index + company_id}>
                  <Htag tag="h3">{name}</Htag>
                  <Rating
                    isEditable={false}
                    rating={Number(user_rating_reviews[index])}
                  />

                  <Ptag size="small">{user_comments_reviews[index]}</Ptag>
                </div>
              ))
            ) : (
              <Ptag size="medium">О данной компании еще нет отзывов</Ptag>
            )}
          </div>
          <div className={styles.closeButtonWrapper}>
            <ButtonCloseModal setIsOpen={setIsReviewsVisible} />
          </div>
        </div>
      )}
    </>
  );
};

export default CompanyTitle;
