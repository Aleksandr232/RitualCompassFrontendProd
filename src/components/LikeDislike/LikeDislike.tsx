import { FC } from "react";
import UpThumb from "../../../public/thumb_up.svg";
import DownThumb from "../../../public/thumb_down.svg";
import { ILikeDislike } from "./LikeDislike.props";
import style from "./LikeDislike.module.css";
import cn from "classnames";

const LikeDislike: FC<ILikeDislike> = ({
  count,
  appearance,
  isActiveLike,
  isActiveDislike,
  ...props
}) => {
  switch (appearance) {
    case "up":
      return (
        <span className={style.like_span} {...props}>
          <UpThumb
            className={cn(style.like, {
              [style.isActiveLike]: isActiveLike,
            })}
          />
          {count}
        </span>
      );
    case "down":
      return (
        <span className={style.dislike_span} {...props}>
          <DownThumb
            className={cn(style.dislike, {
              [style.isActiveDislike]: isActiveDislike,
            })}
          />
          {count}
        </span>
      );
    default:
      return <></>;
  }
};

export default LikeDislike;
