import Htag from "@/components/Htag/Htag";
import Ptag from "@/components/Ptag/Ptag";
import Rating from "@/components/Rating/Rating";
import { FC } from "react";
import { ICompanyDetails } from "./CompanyDescription.props";


const CompanyDetails: FC<ICompanyDetails> = ({
  average_rating,
  company_ritual,
  max_rating,
  min_rating,
  total_rating_requests,
}) => {
  return (
    <>
      <Htag tag="h2">{company_ritual}</Htag>
      <Rating isEditable={true} rating={Number(average_rating)} />
      <Ptag size="medium">Отзывов: 501</Ptag>
      <Ptag size="medium">Рейтинг: {average_rating} </Ptag>
      <Ptag size="medium">Положительных: {max_rating}</Ptag>
      <Ptag size="medium">Отрицательных: {min_rating}</Ptag>
      <Ptag size="medium">Всего: {total_rating_requests}</Ptag>
    </>
  );
};

export default CompanyDetails;
