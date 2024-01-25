import React, {FC, memo} from 'react';
import cn from "classnames";
import cls from './button.module.scss'
import {ButtonProps} from "./button.types";


export const Button: FC<ButtonProps> = memo((props: ButtonProps) => {
  const {
    className, children, square, disabled, theme = 'outlined', size = 'm', ...otherProps
  } = props;

  return (
      <button
          disabled={disabled}
          type="button"
          className={cn(cls.button, cls[theme], cls[size], className)}
          {...otherProps}
      >
        {children}
      </button>
  );
});
