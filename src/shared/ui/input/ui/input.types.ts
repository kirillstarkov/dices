import { InputHTMLAttributes } from 'react';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>

export interface InputProps extends HTMLInputProps{
  value?: string | number;
  className?: string;
  onChange?: (value: string) => void;
  readOnly?: boolean;
}

export type InputType = InputProps;
