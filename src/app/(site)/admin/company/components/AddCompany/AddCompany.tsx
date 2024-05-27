import { FormEvent, useState } from "react";
import styles from "./AddCompany.module.css";
import API from "@/utils/api/api";
import Cookies from "js-cookie";

import AddCompanyForm from "@/components/Form/AddCompanyForm/AddCompanyForm";
import usePostRequest from "@/helpers/usePostRequest/usePostRequest";


const AddCompany = () => {
  const [showForm, setShowForm] = useState(false);
  const [messageValidation, setMessageValidation] = useState({
    isError: false,
    message: "",
    isSuccess: false,
    isSubmitting: false,
  });
  const token = Cookies.get("token");
  const { addNewCompany } = usePostRequest();
  const CloseFormDateMS = 1000;
  const CloseFormDateSeconds = CloseFormDateMS / 1000;

  const toggleForm = () => {
    setShowForm((prevShowForm) => !prevShowForm);
    setMessageValidation({
      isError: false,
      isSuccess: false,
      message: "",
      isSubmitting: false,
    });
  };

  const submitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessageValidation({
      isError: false,
      isSuccess: true,
      message: "",
      isSubmitting: true,
    });
    const formData = new FormData(e.currentTarget);

    if (token) {
      try {
        await addNewCompany({
          api: API.compass.post_ritual,
          token: token,
          body: formData,
        });
        setMessageValidation({
          isError: false,
          message:
            "Компания успешно добавлена, окно автоматически закроется через",
          isSuccess: true,
          isSubmitting: false,
        });
        setTimeout(() => {
          setShowForm(false);
          setMessageValidation({
            isError: false,
            message: "",
            isSuccess: false,
            isSubmitting: false,
          });
          window.location.reload();
        }, CloseFormDateMS);
      } catch (err) {
        const message =
          err instanceof Error ? err.message : "Неизвестная ошибка!";
        setShowForm(true);
        setMessageValidation({
          isError: true,
          message: message,
          isSuccess: false,
          isSubmitting: false,
        });
      }
      // }
    }
  };
  return (
    <div>
      <div className={styles["form-open"]} onClick={toggleForm}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </div>
      {showForm && (
        <div className={styles["form-container"]}>
          <AddCompanyForm
            submitForm={submitForm}
            isSuccess
            isError
            messageValidation={messageValidation}
            CloseFormDateSeconds={CloseFormDateSeconds}
          />
        </div>
      )}
    </div>
  );
};

export default AddCompany;
