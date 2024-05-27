import Button from "@/components/Button/Button";
import { FC, useState } from "react";
import styles from "./Contact.module.css";
import LinkTag from "@/components/LinkTag/LinkTag";
import ModalCompanyRequest from "@/Layout/components/Modal/ModalCompanyRequest/ModalCompanyRequest";

interface IContact {
  companyId: number;
}

const Contact: FC<IContact> = ({ companyId }) => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  const companyRequest = () => {
    setModalIsOpen((prev) => !prev);
  };
  return (
    <div className={styles.contact}>
      <LinkTag appearance="medium" url="tel:+1234567890">
        Позвонить
      </LinkTag>
      <Button appearance="medium" onClick={companyRequest}>
        Оформить
      </Button>
      <ModalCompanyRequest
        setModalIsOpen={setModalIsOpen}
        modalIsOpen={modalIsOpen}
        companyId={companyId}
      />
    </div>
  );
};

export default Contact;
