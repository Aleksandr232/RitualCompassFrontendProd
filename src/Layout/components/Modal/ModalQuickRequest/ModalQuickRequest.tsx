import { FC, FormEvent, useState } from "react";
import ReactModal from "react-modal";
import ButtonCloseModal from "@/components/ButtonCloseModal/ButtonCloseModal";
import postQuickRequest from "@/helpers/postQuickRequest/postQuickRequest";
import API from "@/utils/api/api";
import {
  IModalQuickRequest,
  IPostModalCompanyRequest,
} from "@/interface/interface";
import styles from '../Modal.module.css'
import CompanyRequestForm from "@/components/Form/CompanyRequestForm/CompanyRequestForm";

const ModalQuickRequest: FC<IModalQuickRequest> = ({ isOpen, setIsOpen }) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState<boolean>(false);

  const submitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsError(false);
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    const formPost: IPostModalCompanyRequest = {
      name: data.name.toString(),
      phone: data.phone.toString(),
      material: data.material.toString(),
      clothes: data.clothes.toString(),
      decoration: data.decoration.toString(),
      documents: data.documents.toString(),
      place: data.place.toString(),
      taxi: data.taxi.toString(),
      services: data.services.toString(),
    };

  

    try {
      const responseData = await postQuickRequest(
        API.compass.quick_request_company,
        formPost
      );
      if (responseData) {
        setIsSuccess(true);
        setTimeout(() => {
          setIsOpen(false);
        }, 3000);
      }
    } catch (error) {
      console.error("Ошибка отправки:", error);
      setIsError(true);
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
      shouldCloseOnOverlayClick={true}
      isOpen={isOpen}
      ariaHideApp={false}
      onRequestClose={() => setIsOpen(false)}
      className={styles.modal_window}
    >
      <div className={styles.container}>
        <CompanyRequestForm
          submitForm={submitForm}
          isSuccess={isSuccess}
          isError={isError}
        />
        <ButtonCloseModal setIsOpen={setIsOpen} />
      </div>
    </ReactModal>
  );
};

export default ModalQuickRequest;
