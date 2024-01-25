import { ButtonHTMLAttributes } from 'react';

type ButtonTheme = 'clear' | 'background' | 'outlined' | 'backgroundInverted' | 'outlinedRed';
type ButtonSize = 's' | 'm' | 'l' | 'xl';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
  disabled?: boolean
}
