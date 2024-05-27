import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface IAdminLayout
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
}
