"use client"
import { FC, useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import Ptag from "@/components/Ptag/Ptag";
import { useGetCompanyAllQuery } from "@/service/CompanyService";
import { ICompanyData } from "@/interface/interface";
import ImgTag from "@/components/ImgTag/ImgTag";
import ReactPaginate from "react-paginate";
import styles from "./Companies.module.css";
import CompanyTitle from "./components/CompanyTitle/CompanyTitle";
import CompanyDescription from "./components/CompanyDescription/CompanyDescription";
import { ICompaniesProps } from "./Companies.props";

const Companies: FC<ICompaniesProps> = () => {
  const [selectedSort, setSelectedSort] = useState('');
  const [sortByRating, setSortByRating] = useState(false);
  const [sortByPositiveReviews, setSortByPositiveReviews] = useState(false);
  const [sortByCountOrder, setSortByCountOrder] = useState(false);
  const [sortByCountCall, setSortByCountCall] = useState(false);
  const { data: companiesData, isLoading, error } = useGetCompanyAllQuery({ sortByRating, sortByPositiveReviews, sortByCountOrder, sortByCountCall});
  const [currentPage, setCurrentPage] = useState(0);
  const fadeIn = useSpring({
    opacity: companiesData ? 1 : 0,
    from: { marginTop: -500, opacity: 0 },
    to: { marginTop: 0, opacity: 1 },
    config: { duration: 2000 },
  });
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
  

  const handleSortChange = (event: { target: { value: string } }) => {
    const selectedValue = event.target.value;
    setSelectedSort(selectedValue);
  
    if (selectedValue === 'rating') {
      setSortByRating((prevState) => !prevState);
    }else if (selectedValue === 'positive_reviews'){
      setSortByPositiveReviews((prevState) => !prevState);
    }else if (selectedValue === 'count_order'){
      setSortByCountOrder((prevState) => !prevState);
    }else if(selectedValue === 'count_call'){
      setSortByCountCall((prevState) => !prevState);
    }
  };

  if (isLoading) {
    return <div>loading....</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  if (!companiesData || companiesData.length === 0) {
    return <Ptag size="medium">Список компаний пуст.</Ptag>;
  }

  return (
    <div className={styles.companies}>
      <div className={styles.select_wrapper}>
    <select
      className={styles.select}
      value={selectedSort} 
      onChange={handleSortChange}
    >
      <option value="" hidden>Сортировка по</option>
      <option value="rating">рейтингу</option>
      <option value="positive_reviews">положительным отзывам</option>
      <option value="count_order">количиство оформлений</option>
      <option value="count_call">количиство звонков</option>
    </select>
    <div className={styles.select_arrow}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 10L12 15L17 10H7Z"
          fill="#9CA3AF"
        />
      </svg>
    </div>
  </div>
      {displayedCompanies.map((company: ICompanyData) => {
        return (
          <animated.div style={fadeIn} key={company.id}>
            <div className={styles.company_wrapper}>
              <div className={styles.company_image}>
                <ImgTag
                  url={`${company.paths[0]}`}
                  height={300}
                  width={300}
                  alt="company"
                />
              </div>
              <div className={styles.company_title}>
                <CompanyTitle
                  average_rating={company.average_rating}
                  user_names_reviews={company.name}
                  user_comments_reviews={company.comment}
                  user_rating_reviews={company.ratings}
                  company_id={company.id}
                  company_ritual={company.company_ritual}
                  isEditable={true}
                  max_rating={company.max_rating}
                  min_rating={company.min_rating}
                  total_rating_requests={company.total_rating_requests}
                />
              </div>
              <div className={styles.company_description}>
                <CompanyDescription
                  address_ritual={company.address_ritual}
                  work_time_ritual={company.work_time_ritual}
                  service_ritual={company.service_ritual}
                  company_id={company.id}
                />
              </div>
              <div className={styles.company_full_description}>
                <Ptag size="small">{company.description_ritual}</Ptag>
              </div>
            </div>
          </animated.div>
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
  );
};

export default Companies;
