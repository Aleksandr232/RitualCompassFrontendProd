import Button from "@/components/Button/Button";
import { FC } from "react";

import styles from "../Form.module.css";
import Ptag from "@/components/Ptag/Ptag";
import { ICompanyRequestForm } from "../interfaces/interface";

const CompanyRequestForm: FC<ICompanyRequestForm> = ({
  submitForm,
  isSuccess,
  isError,
}) => {
  return (
    <form onSubmit={submitForm} className={styles.form_wrapper}>
      {isError && <Ptag size="medium">Произошла ошибка. Попробуйте еще</Ptag>}
      {isSuccess && <Ptag size="medium">Ваш запрос отправлен.</Ptag>}
      <label htmlFor="name">
        Имя:
        <input type="text" name="name" id="name" />
      </label>
      <label htmlFor="phone">
        Телефон:
        <input type="text" name="phone" id="phone" />
      </label>
      <label htmlFor="material">
        Вам нужен памятник, какой материал?
        <input type="text" name="material" id="material" />
      </label>
      <label htmlFor="clothes">
        Ритуальная одежда для похорон?
        <input type="text" name="clothes" id="clothes" />
      </label>
      <label htmlFor="decoration">
        Похоронная атрибутика?
        <input type="text" name="decoration" id="decoration" />
      </label>
      <label htmlFor="documents">
        Оформить документы?
        <input type="text" name="documents" id="documents" />
      </label>
      <label htmlFor="place">
        Помощь с местом?
        <input type="text" name="place" id="place" />
      </label>
      <label htmlFor="taxi">
        Бесплатное такси?
        <input type="text" name="taxi" id="taxi" />
      </label>
      <label htmlFor="services">
        Требуются социальные похороны?
        <input type="text" name="services" id="services" />
      </label>

      <Button appearance="medium">Отправить</Button>
    </form>
  );
};

export default CompanyRequestForm;
