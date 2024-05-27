import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface IPlacesMainProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
}
