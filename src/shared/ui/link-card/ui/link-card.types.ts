import { LinkProps } from 'react-router-dom';

export interface LinkCardProps extends LinkProps{
  children: React.ReactNode;
  className?: string;
  linkClassname?: string
}

export type LinkCardType = LinkCardProps
