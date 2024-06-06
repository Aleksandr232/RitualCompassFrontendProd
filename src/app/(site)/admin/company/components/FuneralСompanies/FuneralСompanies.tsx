import { FC, useState } from "react";
import styles from "./FuneralСompanies.module.css";
import { FuneralСompaniesProps } from "./FuneralСompanies.props";
import Ptag from "@/components/Ptag/Ptag";
import { useGetCompanyAllQuery } from "@/service/CompanyService";
import Link from "next/link";
import { ICompanyData } from "@/interface/interface";
import ImgTag from "@/components/ImgTag/ImgTag";
import ReactPaginate from "react-paginate";
import DeleteCompany from "../DeleteCompany/DeleteCompany";
import ChangeCompany from "../ChangeCompany/ChangeCompany";

import CompanyDetails from "./components/CompanyDetails/CompanyDetails";
import CompanyDescription from "./components/CompanyDescription/CompanyDescription";

const FuneralСompanies: FC<FuneralСompaniesProps> = () => {
  const {
    data: companiesData,
    isLoading: loadingCompanies,
    error: errorCompanies,
  } = useGetCompanyAllQuery({ sortByRating: false });
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;
  if (!companiesData) {
    return;
  }

  console.log(companiesData);

  const handlePageClick = (event: { selected: number }) => {
    setCurrentPage(event.selected);
  };

  const displayedCompanies = companiesData.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );
  console.log(companiesData);

  return (
    <>
      {loadingCompanies && <div>Идет загрузка ритуальных компаний...</div>}
      {errorCompanies && <div>Не удалось загрузить ритуальные компании</div>}
      <div className={styles.companies}>
        {displayedCompanies.map((company: ICompanyData) => {
          return (
            <div key={company.id} className={styles.company_wrapper}>
              <div className={styles.company_image}>
                <ImgTag
                  url={`${company.paths[0]}`}
                  height={300}
                  width={300}
                  alt="company"
                />
              </div>
              <div className={styles.company_title}>
                <span className={styles.icons_wrapper}>
                  <ChangeCompany
                    company_ritual={company.company_ritual}
                    phone_ritual={company.phone_ritual}
                    description_ritual={company.description_ritual}
                    address_ritual={company.address_ritual}
                    work_time_ritual={company.work_time_ritual}
                    service_ritual={company.service_ritual}
                    site_ritual={company.site_ritual}
                    paths={company.paths}
                    id={company.id}
                    // social_network_ritual={company.social_network_ritual}
                  />
                  <DeleteCompany id={company.id} />
                </span>
                <CompanyDetails
                  company_ritual={company.company_ritual}
                  average_rating={company.average_rating}
                  max_rating={company.max_rating}
                  min_rating={company.min_rating}
                  total_rating_requests={company.total_rating_requests}
                />
              </div>
              <div className={styles.company_description}>
                <CompanyDescription
                  phone_ritual={company.phone_ritual}
                  address_ritual={company.address_ritual}
                  work_time_ritual={company.work_time_ritual}
                  service_ritual={company.service_ritual}
                  site_ritual={company.site_ritual}
                  social_network_ritual={company.social_network_ritual}
                />
              </div>
              <div className={styles.company_full_description}>
                <Ptag size="small">{company.description_ritual}</Ptag>
              </div>
            </div>
          );
        })}
        <ReactPaginate
          previousLabel={"Назад"}
          nextLabel={"Вперед"}
          breakLabel={"..."}
          pageCount={Math.ceil(companiesData.length / itemsPerPage)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={styles.pagination}
          activeClassName={styles.active}
        />
      </div>
    </>
  );
};

export default FuneralСompanies;
