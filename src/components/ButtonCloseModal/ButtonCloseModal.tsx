import { FC } from "react";
import Button from "../Button/Button";
import ImgTag from "../ImgTag/ImgTag";
import styles from './ButtonCloseModal.module.css'

interface IIsOpen {
  setIsOpen: (isOpen: boolean) => void;
}

const ButtonCloseModal: FC<IIsOpen> = ({ setIsOpen }) => {
  return (
    <Button appearance="svgIcon" onClick={() => setIsOpen(false)}>
      {/* <ImgTag url={"./delete.svg"} alt={"svg"} width={20} height={20} /> */}
      <span className={styles.cross}></span>
    </Button>
  );
};

export default ButtonCloseModal;
