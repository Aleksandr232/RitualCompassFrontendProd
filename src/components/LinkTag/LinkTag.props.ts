import { AnchorHTMLAttributes, ReactNode } from "react";

export interface ILinkTagProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  isActive? : boolean
  url: string;
  appearance: "small" | "medium" | "large" | "ghost" | "ghostBorder" | 'isActive';
}
