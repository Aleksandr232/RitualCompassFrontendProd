import { FC } from "react";
import { IHtagProps } from "./Htag.props";

const Htag: FC<IHtagProps> = ({ tag, children }) => {
  switch (tag) {
    case "h1":
      return <h1>{children}</h1>;
    case "h2":
      return <h2>{children}</h2>;
    case "h3":
      return <h3>{children}</h3>;
    default:
      <> </>;
  }
};

export default Htag;
