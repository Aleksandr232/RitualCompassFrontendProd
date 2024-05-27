import { FC } from "react";
import Button from "../Button/Button";
import ImgTag from "../ImgTag/ImgTag";

interface IIsOpen {
  setIsOpen: (isOpen: boolean) => void;
}

const ButtonCloseModal: FC<IIsOpen> = ({ setIsOpen }) => {
  return (
    <Button appearance="svgIcon" onClick={() => setIsOpen(false)}>
      <ImgTag url={"./delete.svg"} alt={"svg"} width={20} height={20} />
    </Button>
  );
};

export default ButtonCloseModal;
