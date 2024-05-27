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
      <div>
        <span className={styles.company_details}>
          Адрес:
          <Ptag size="medium">{address_ritual}</Ptag>
        </span>

        <span className={styles.company_details}>
          Режим работы:
          <Ptag size="small">{work_time_ritual}</Ptag>
        </span>
        <span className={styles.company_details}>
          Услуги:
          <Ptag size="medium">{service_ritual}</Ptag>
        </span>
      </div>
      <Contact companyId={company_id} />
    </>
  );
};

export default CompanyDescription;
