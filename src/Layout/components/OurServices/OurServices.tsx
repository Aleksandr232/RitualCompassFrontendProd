import Htag from "@/components/Htag/Htag";
import Ptag from "@/components/Ptag/Ptag";
import { FC, useState } from "react";
import styles from "./OurServices.module.css";
import Button from "@/components/Button/Button";
import Link from "next/link";
import ModalWindow from "../Modal/ModalQuickRequest/ModalQuickRequest";
import LinkTag from "@/components/LinkTag/LinkTag";
import { routers } from "@/utils/routers";

const OurServices: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const pressCheckout = () => {
    setIsModalOpen(true);
  };
  return (
    <div className={styles.service_wrapper}>
      <Htag tag={"h2"}>Услуги которые мы предоставляем</Htag>
      <div className={styles.service_box}>
        <div className={styles.service_item}>
          <Htag tag={"h2"}>Помощь в поиске ритуальной компании или агента</Htag>
          <Ptag size="medium">Мы все сделаем за вас</Ptag>
          <LinkTag url={routers.telephone} appearance={"medium"}>
            Позвонить
          </LinkTag>
        </div>
        <div className={styles.service_item}>
          <Htag tag={"h2"}> Онлайн оформление</Htag>
          <Ptag size="medium">
            Ваша заявка попадет сразу к нашим операторам и они с вами свяжутся
          </Ptag>
          <Button appearance="medium" onClick={pressCheckout}>
            Оформить
          </Button>
          <ModalWindow isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
        </div>
        <div className={styles.service_item}>
          <Htag tag={"h2"}>Бесплатная консультация</Htag>
          <Ptag size="medium">
            Куда идти, за что платить и что делать в случае смерти человека
          </Ptag>
          <LinkTag url={routers.telephone} appearance={"medium"}>
            Позвонить
          </LinkTag>
        </div>
        <div className={styles.service_item}>
          <Htag tag={"h2"}>Мгновенная помощь ( БОТ )</Htag>
          <Ptag size="medium">
            Обратитесь к нашему онлайн помощнику и он ответит на вопросы
          </Ptag>
          <LinkTag
            url={routers.telegram}
            target="_blank"
            rel="noopener noreferrer"
            appearance={"medium"}
          >
            Написать
          </LinkTag>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
