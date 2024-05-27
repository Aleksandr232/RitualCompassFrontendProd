import Button from "@/components/Button/Button";
import ButtonCloseModal from "@/components/ButtonCloseModal/ButtonCloseModal";
import { FC } from "react";

import styles from "../Form.module.css";
import { IChangeCompanyForm } from "../interfaces/interface";


const ChangeCompanyForm: FC<IChangeCompanyForm> = ({
  submitForm,handleChange,isLoading,handleChangeCompany,formData
}) => {
  return (
    <form onSubmit={submitForm} className={styles.form_wrapper}>
      <div className={styles.icons_wrapper}>
       
        <ButtonCloseModal setIsOpen={handleChangeCompany} />
      </div>

      <label htmlFor="company_ritual">
        Название компании :
        <input
          type="text"
          name="company_ritual"
          value={formData.company_ritual}
          onChange={handleChange}
        />
      </label>

      <label htmlFor="phone_ritual">
        Телефон :
        <input
          type="text"
          name="phone_ritual"
          value={formData.phone_ritual}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="description_ritual">
        Описание :
        <textarea
          name="description_ritual"
          value={formData.description_ritual}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="address_ritual">
        Адрес :
        <input
          type="text"
          name="address_ritual"
          value={formData.address_ritual}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="work_time_ritual">
        Рабочее время :
        <input
          type="text"
          name="work_time_ritual"
          value={formData.work_time_ritual}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="service_ritual">
        Услуги :
        <input
          type="text"
          name="service_ritual"
          value={formData.service_ritual}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="site_ritual">
        Сайт :
        <input
          type="text"
          name="site_ritual"
          value={formData.site_ritual}
          onChange={handleChange}
        />
      </label>
      <Button appearance="large" disabled={isLoading}>
          Сохранить изменения
        </Button>
    </form>
  );
};

export default ChangeCompanyForm;
