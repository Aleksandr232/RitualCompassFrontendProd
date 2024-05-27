import { FC, FormEvent, useState } from "react";
import ButtonCloseModal from "@/components/ButtonCloseModal/ButtonCloseModal";
import ReactModal from "react-modal";
import styles from '../Modal.module.css';
import { IPostModalQuickRequest } from "@/interface/interface";
import postQuickRequest from "@/helpers/postQuickRequest/postQuickRequest";
import API from "@/utils/api/api";
import QuickRequestForm from "@/components/Form/QuickRequestForm/QuickRequestForm";

interface IModalCompanyRequest {
  setModalIsOpen: (prev: boolean) => void;
  modalIsOpen: boolean;
  companyId: number;
}

const ModalCompanyRequest: FC<IModalCompanyRequest> = ({
  modalIsOpen,
  setModalIsOpen,
  companyId,
}) => {
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const submitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSuccess(false);
    setIsError(false);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    const formPost: IPostModalQuickRequest = {
      name: data.name.toString(),
      phone: data.phone.toString(),
      message: data.message.toString(),
    };

    try {
      const responseData = await postQuickRequest(
        API.compass.quick_request + `/${companyId}`,
        formPost
      );
      if (responseData) {
        setIsSuccess(true);
        setIsError(false);
        setTimeout(() => {
          setModalIsOpen(false);
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
      shouldCloseOnOverlayClick={true}
      style={{
        overlay: {
          backgroundColor: "#0e0d0df2",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
      }}
      isOpen={modalIsOpen}
      ariaHideApp={false}
      onRequestClose={() => setModalIsOpen(false)}
      className={styles.modal_window}
    >
      <div className={styles.container}>
        <QuickRequestForm
          submitForm={submitForm}
          isError={isError}
          isSuccess={isSuccess}
        />
        <ButtonCloseModal setIsOpen={setModalIsOpen} />
      </div>
    </ReactModal>
  );
};

export default ModalCompanyRequest;
