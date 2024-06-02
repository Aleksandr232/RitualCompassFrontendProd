import ImgTag from "@/components/ImgTag/ImgTag";
import Ptag from "@/components/Ptag/Ptag";
import styles from "./feedbackIcon.module.css";
import { FC } from "react";
import { IFeedBackIconProps } from "./FeedBackIcon.props";

const FeedBackIcon: FC<IFeedBackIconProps> = ({ max, min }) => {
  return (
    <div className={styles.feedback}>
      <span className={styles.feedback_block_img}>
        <ImgTag
          url={"./good-vibes.svg"}
          alt={"good-vibes"}
          width={35}
          height={35}
        />
        <Ptag size="medium">{max}</Ptag>
      </span>
      <span className={styles.feedback_block_img}>
        <ImgTag
          url={"./bad-vibes.svg"}
          alt={"good-vibes"}
          width={35}
          height={35}
        />
        <Ptag size="medium">{min}</Ptag>
      </span>
    </div>
  );
};

export default FeedBackIcon;
