import { AnchorHTMLAttributes, ReactNode } from 'react';

export interface ILinkTagProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  url: string;
  appearance: 'small' | 'medium' | 'large';
}
