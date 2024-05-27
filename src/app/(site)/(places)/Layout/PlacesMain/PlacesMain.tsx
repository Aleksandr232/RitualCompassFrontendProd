import { FC } from "react";
import { IPlacesMainProps } from "./PlacesMain.props";
import styles from "./PlacesMain.module.css";

const PlacesMain: FC<IPlacesMainProps> = ({ children }) => {
  return <main className={styles.main}>{children}</main>;
};

export default PlacesMain;
