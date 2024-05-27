import { FC } from "react";
import styles from "../Form.module.css";
import Ptag from "@/components/Ptag/Ptag";
import Button from "@/components/Button/Button";
import { ISendRatingForm } from "../interfaces/interface";
import Rating from "@/components/Rating/Rating";

const SendRatingForm: FC<ISendRatingForm> = ({
  isError,
  isSuccess,
  submitForm,
  ratings,
}) => {
  if (!ratings) return;
  return (
    <form action="" onSubmit={submitForm} className={styles.form_wrapper}>
      {isError && <Ptag size="medium">Произошла ошибка. Попробуйте еще.</Ptag>}
      {isSuccess && !isError && (
        <Ptag size="medium">Ваш запрос отправлен.</Ptag>
      )}
      <span className={styles.rating_assessment}>
        <Ptag size="large">Ваша оценка:</Ptag>
        <Rating isEditable={false} rating={ratings} />
      </span>

      <label htmlFor="name">
        Имя:
        <input type="text" name="name" id="name" placeholder="Аноним" />
      </label>
      <label htmlFor="comment">
        Описание:
        <textarea name="comment" id="comment" placeholder="Аноним" />
      </label>
      <Button appearance="medium">Отправить</Button>
    </form>
  );
};

export default SendRatingForm;
