import Rating from "@/components/Rating/Rating";
import { FC, useState } from "react";
import ModalSendRating from "../Modal/ModalSendRating/ModalSendRating";
import { IRatingCompaniesRequest } from "@/interface/interface";

const RatingCompanies: FC<IRatingCompaniesRequest> = ({
  isEditable,
  ratings,
  company_id,
}) => {
  const [rating, setRating] = useState<number>();
  const [modalRatingId, setModalRatingId] = useState<number | null>(null);

  const openModal = (newRating: number) => {
    setRating(newRating);
    setModalRatingId(company_id)
  };
  const closeModal = () => {
    setModalRatingId(null);
  };


  const isModalOpen = modalRatingId === company_id;

  return (
    <>
      <ModalSendRating
        isOpen={isModalOpen}
        id={company_id}
        ratings={rating}
        setIsOpen={closeModal}
      />
      <Rating isEditable={isEditable} setRating={openModal} rating={ratings} />
    </>
  );
};

export default RatingCompanies;
