import { FC } from "react";
import { ICompanyDescriptionProps } from "./CompanyDescription.props";
import Ptag from "@/components/Ptag/Ptag";
import Contact from "@/Layout/components/Contact/Contact";
import styles from "./CompanyDescription.module.css";
import ImgTag from "@/components/ImgTag/ImgTag";

const CompanyDescription: FC<ICompanyDescriptionProps> = ({
  address_ritual,
  company_id,
  service_ritual,
  work_time_ritual,
}) => {
  return (
    <div className={styles.description_wrapper}>
      <div className={styles.description_details}>
        <div className={styles.detail}>
          <ImgTag url={"./address.svg"} alt={"address"} width={34} height={34}/>
          <Ptag size="medium">{address_ritual}</Ptag>
        </div>
        <div className={styles.detail}>
        <ImgTag url={"./service.svg"} alt={"address"} width={34} height={34}/>
          <Ptag size="medium">{service_ritual}</Ptag>
        </div>
        <div className={styles.detail}>
        <ImgTag url={"./workTime.svg"} alt={"address"} width={34} height={34}/>
          <Ptag size="medium">{work_time_ritual}</Ptag>
        </div>
      </div>

      <Contact companyId={company_id} />
    </div>
  );
};

export default CompanyDescription;

