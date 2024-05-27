export interface ILikeDislike {
  count: number;
  appearance: "up" | "down";
  isActiveLike?: boolean;
  isActiveDislike?: boolean;
}
