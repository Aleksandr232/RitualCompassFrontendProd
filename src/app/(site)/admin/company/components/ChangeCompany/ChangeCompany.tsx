import { FC, useEffect, useState } from "react";
import Cookies from "js-cookie";
import {
  useChangeCompanyMutation,
  useGetCompanyAllQuery,
} from "@/service/CompanyService";
import Button from "@/components/Button/Button";
import ImgTag from "@/components/ImgTag/ImgTag";
import styles from "./ChangeCompany.module.css";
import ReactModal from "react-modal";
import { IChangeCompany } from "./ChangeCompany.props";
import ChangeCompanyForm from "@/components/Form/ChangeCompanyForm/ChangeCompanyForm";

const ChangeCompany: FC<IChangeCompany> = (props) => {
  const token = Cookies.get("token");
  const [changeCompany, { isLoading }] = useChangeCompanyMutation();
  const [formData, setFormData] = useState(props);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { refetch } = useGetCompanyAllQuery({ sortByRating: false });

  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = originalStyle;
    }
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, [isModalOpen]);

  const handleChangeCompany = () => {
    setIsModalOpen((prev) => !prev);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const submitForm = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!token) return;

    const updatedData = { ...formData, id: props.id };

    try {
      await changeCompany({ id: props.id, token, data: updatedData }).unwrap();
      console.log("Компания обновлена успешно");
      setIsModalOpen(false);
      refetch();
    } catch (error) {
      console.error("Ошибка при обновлении компании", error);
    }
  };

  return (
    <div className={styles.company_change}>
      <span>
        <Button appearance="svgIcon" onClick={handleChangeCompany}>
          <ImgTag url={"./change.svg"} alt={"svg"} width={20} height={20} />
        </Button>
      </span>

      {isModalOpen && (
        <ReactModal
          isOpen={isModalOpen}
          ariaHideApp={false}
          onRequestClose={() => setIsModalOpen(false)}
          className={styles.modal_overlay}
        >
          
          <ChangeCompanyForm
            submitForm={submitForm}
            handleChange={handleChange}
            isLoading={isLoading}
            handleChangeCompany={() => setIsModalOpen(false)} 
            formData={formData}
          />
        </ReactModal>
      )}
    </div>
  );
};

export default ChangeCompany;
