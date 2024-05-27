import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface IAboutMainProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
}
