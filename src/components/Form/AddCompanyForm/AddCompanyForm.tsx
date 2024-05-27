import { getSecondsText } from "@/app/(site)/admin/company/components/AddCompany/getSecondsText/getSecondsText";
import Button from "@/components/Button/Button";
import Ptag from "@/components/Ptag/Ptag";
import { FC } from "react";
import styles from "../Form.module.css";
import { IAddCompanyForm } from "../interfaces/interface";
import cn from "classnames";

const AddCompanyForm: FC<IAddCompanyForm> = ({
  submitForm,
  isError,
  isSuccess,
  CloseFormDateSeconds,
  messageValidation,
}) => {
  return (
    <form
      className={`${styles.form_wrapper} ${styles.add_company}`}
      onSubmit={submitForm}
    >
      <label htmlFor="company_ritual">
        Название компании:
        <input type="text" id="company_ritual" name="company_ritual" required />
      </label>

      <label htmlFor="phone_ritual">
        Телефон:
        <input type="tel" id="phone_ritual" name="phone_ritual" required />
      </label>

      <label htmlFor="description_ritual">
        Описание:
        <textarea
          id="description_ritual"
          name="description_ritual"
          required
        ></textarea>
      </label>

      <label htmlFor="address_ritual">
        Адрес:
        <input type="text" id="address_ritual" name="address_ritual" required />
      </label>

      <label htmlFor="work_time_ritual">
        Рабочее время:
        <input
          type="text"
          id="work_time_ritual"
          name="work_time_ritual"
          required
        />
      </label>

      <label htmlFor="service_ritual">
        Услуги:
        <input type="text" id="service_ritual" name="service_ritual" required />
      </label>

      <label htmlFor="site_ritual">
        Сайт:
        <input type="url" id="site_ritual" name="site_ritual" required />
      </label>

      <label htmlFor="social_network_ritual">
        Социальные сети:
        <input
          type="text"
          id="social_network_ritual"
          name="social_network_ritual"
          required
        />
      </label>

      <label htmlFor="files">
        Файлы:
        <input type="file" id="files" name="files[]" multiple />
      </label>
      <Button appearance="medium">
        {messageValidation.isSubmitting
          ? "Загрузка"
          : messageValidation.isError
          ? "Ошибка"
          : "Отправить"}
      </Button>
      {messageValidation.isError && (
        <Ptag size="medium" isError>
          {messageValidation.message}
        </Ptag>
      )}
      {messageValidation.isSuccess && (
        <Ptag size="medium" isSuccess>
          {`${
            messageValidation.message
          } ${CloseFormDateSeconds} ${getSecondsText(CloseFormDateSeconds)}`}
        </Ptag>
      )}
    </form>
  );
};

export default AddCompanyForm;
