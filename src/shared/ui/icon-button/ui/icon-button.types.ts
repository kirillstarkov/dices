import { ButtonHTMLAttributes } from 'react';

interface IconButtonTypes extends ButtonHTMLAttributes<HTMLButtonElement>{
  iconPath: string;
  className?: string;
  size: number;
  disabled?: boolean
}

export type IconButtonProps = IconButtonTypes
