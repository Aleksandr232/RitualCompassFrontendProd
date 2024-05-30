import ButtonCloseModal from "@/components/ButtonCloseModal/ButtonCloseModal";
import { FC, FormEvent, useState } from "react";
import ReactModal from "react-modal";
import styles from "../Modal.module.css";
import SendRatingForm from "@/components/Form/SendRatingForm/SendRatingForm";
import { IModalQuickRatingRequest } from "@/interface/interface";
import postRatingRequest from "@/helpers/postRatingRequest/postRatingRequest";
import API from "@/utils/api/api";
import { useGetCompanyAllQuery } from "@/service/CompanyService";

const ModalSendRating: FC<IModalQuickRatingRequest> = ({
  isOpen,
  setIsOpen,
  ratings,
  id,
}) => {
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const { refetch } = useGetCompanyAllQuery();

  const submitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    let { name, comment } = data;
    name = name || "Анонимный пользователь";
    comment = comment || "Пользователь не оставил комментарий";

    if (ratings) {
      try {
        const responseData = await postRatingRequest(
          API.compass.rating_request +
            `/${id}?rating=${ratings}&name=${name.toString()}&comment=${comment.toString()}`,
          { rating: ratings }
        );
        if (responseData) {
          setIsSuccess(true);
          setTimeout(() => {
            setIsOpen(false);
            refetch()
          }, 2000);
        }
      } catch (error) {
        console.error("Ошибка отправки:", error);
        setIsError(true);
      }
    }
  };
  return (
    <ReactModal
      bodyOpenClassName={styles.body_scroll}
      style={{
        overlay: {
          backgroundColor: "#0e0d0df2",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
      }}
      isOpen={isOpen}
      ariaHideApp={false}
      onRequestClose={() => setIsOpen(false)}
      className={styles.modal_window}
    >
      <div className={styles.container}>
        <SendRatingForm
          ratings={ratings}
          submitForm={submitForm}
          isSuccess={isSuccess}
          isError={isError}
          id={id}
        />
        <ButtonCloseModal setIsOpen={setIsOpen} />
      </div>
    </ReactModal>
  );
};

export default ModalSendRating;
