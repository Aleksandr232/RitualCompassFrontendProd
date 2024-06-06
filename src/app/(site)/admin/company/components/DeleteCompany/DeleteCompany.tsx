import {
  useDeleteCompanyMutation,
  useGetCompanyAllQuery,
} from "@/service/CompanyService";
import Cookies from "js-cookie";
import { FC } from "react";
// import styles from "./DeleteCompany.module.css";
import Ptag from "@/components/Ptag/Ptag";
import ButtonCloseModal from "@/components/ButtonCloseModal/ButtonCloseModal";
import { IDeleteCompanyProps } from "./DeleteCompany.props";

const DeleteCompany: FC<IDeleteCompanyProps> = ({ id }) => {
  const token = Cookies.get("token");
  const [deleteCompany, { isLoading, isError }] = useDeleteCompanyMutation();
  const { refetch } = useGetCompanyAllQuery({ sortByRating: false });

  const handleDeleteCompany = async () => {
    if (!token) return;

    try {
      const response = await deleteCompany({ id: id, token: token }).unwrap();
      console.log("Компания удалена успешно", response);
      refetch();
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Неизвестная ошибка.";
      console.error(message);
    }
  };

  if (isLoading) return <Ptag size={"medium"}>Удаление...</Ptag>;
  if (isError) return <Ptag size={"medium"}>Ошибка при удалении</Ptag>;

  return (
    <span>
      <ButtonCloseModal setIsOpen={handleDeleteCompany} />
    </span>
  );
};

export default DeleteCompany;
