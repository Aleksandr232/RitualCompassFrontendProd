import Button from "@/components/Button/Button";
import Ptag from "@/components/Ptag/Ptag";
import { FC } from "react";
import { ICompanyRequestForm } from "../interfaces/interface";
import styles from "../Form.module.css";

const QuickRequestForm: FC<ICompanyRequestForm> = ({submitForm,isSuccess,isError }) => {
  return (
    <form onSubmit={submitForm} className={styles.form_wrapper}>
      {isError && (
        <div>
          <Ptag size="medium">Произошла ошибка. Попробуйте снова.</Ptag>
        </div>
      )}
      {isSuccess && !isError && (
        <div>
          <Ptag size="medium">Ваш запрос отправлен.</Ptag>
        </div>
      )}
      <label htmlFor="name">
        Имя:
        <input type="text" name="name" id="name" />
      </label>
      <label htmlFor="phone">
        Телефон:
        <input type="text" name="phone" id="phone" />
      </label>

      <label htmlFor="message">
        Описание:
        <textarea name="message" />
      </label>
      <Button appearance="medium">Отправить</Button>
    </form>
  );
};

export default QuickRequestForm;
