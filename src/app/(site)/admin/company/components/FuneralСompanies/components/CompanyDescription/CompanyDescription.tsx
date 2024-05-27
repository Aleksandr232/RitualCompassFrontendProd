import ImgTag from "@/components/ImgTag/ImgTag";
import Ptag from "@/components/Ptag/Ptag";
import Link from "next/link";
import { FC } from "react";
import styles from "./CompanyDescription.module.css";
import { ICompanyDescription } from "./CompanyDescription.props";



const CompanyDescription: FC<ICompanyDescription> = ({address_ritual,phone_ritual,service_ritual,site_ritual,social_network_ritual,work_time_ritual}) => {
  return (
    <>
      {" "}
      <span className={styles.company_details}>
        Телефон:
        <Ptag size="large">{phone_ritual}</Ptag>
      </span>
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
      <span className={styles.company_details}>
        Сайт:
        <Link href={`${site_ritual}`}>
          <ImgTag
            width={20}
            height={20}
            url="https://img.icons8.com/glyph-neue/20/internet.png"
            alt="internet"
          />
        </Link>
      </span>
      <span className={styles.company_details}>
        Социальные сети:
        {social_network_ritual.map((link, index) => (
          <div key={index}>
            {link.includes("https://vk.com/") ? (
              <Link href={link}>
                <ImgTag
                  width={20}
                  height={20}
                  url="https://img.icons8.com/ios-filled/50/vk-com.png"
                  alt="vk-com"
                />
              </Link>
            ) : link.includes("https://wa.me/") ? (
              <Link href={link}>
                <ImgTag
                  width={20}
                  height={20}
                  alt="whatsapp--v1"
                  url={
                    "https://img.icons8.com/material-rounded/50/whatsapp--v1.png"
                  }
                />
              </Link>
            ) : link.includes("https://t.me/") ? (
              <Link href={link}>
                <ImgTag
                  width={20}
                  height={20}
                  alt="telegram"
                  url={"https://img.icons8.com/ios-filled/20/telegram.png"}
                />
              </Link>
            ) : null}
            {/* <Ptag size="medium">{link}</Ptag> */}
          </div>
        ))}
      </span>{" "}
    </>
  );
};

export default CompanyDescription;
