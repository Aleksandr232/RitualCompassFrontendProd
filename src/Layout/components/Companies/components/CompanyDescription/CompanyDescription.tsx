import { FC } from "react";
import { ICompanyDescriptionProps } from "./CompanyDescription.props";
import Ptag from "@/components/Ptag/Ptag";
import Contact from "@/Layout/components/Contact/Contact";
import styles from "./CompanyDescription.module.css";

const CompanyDescription: FC<ICompanyDescriptionProps> = ({
  address_ritual,
  company_id,
  service_ritual,
  work_time_ritual,
}) => {
  return (
    <>
      <span className={styles.company_details}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
        <path fill-rule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clip-rule="evenodd" />
      </svg>
          :
        <Ptag size="medium">{address_ritual}</Ptag>
      </span>

      <span className={styles.company_details}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
      <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clip-rule="evenodd" />
    </svg>
        :
        <Ptag size="small">{work_time_ritual}</Ptag>
      </span>
      <span className={styles.company_details}>
        Услуги:
        <Ptag size="medium">{service_ritual}</Ptag>
      </span>

      <Contact companyId={company_id} />
    </>
  );
};

export default CompanyDescription;
