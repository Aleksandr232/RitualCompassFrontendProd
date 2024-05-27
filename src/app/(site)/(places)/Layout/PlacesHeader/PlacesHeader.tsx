import { FC } from "react";
import { IPlacesHeaderProps } from "./PlacesHeader.props";
import styles from "./PlacesHeader.module.css";

const PlacesHeader: FC<IPlacesHeaderProps> = ({ children }) => {
  return <header className={styles.header}>{children}</header>;
};

export default PlacesHeader;
