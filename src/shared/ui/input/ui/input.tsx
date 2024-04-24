import React, { FC, memo } from 'react';
import cn from 'classnames';
import cls from './input.module.scss';
import { InputType } from './input.types';

export const Input: FC<InputType> = memo((props: InputType) => {
  const {
    className, value, onChange, readOnly, placeholder, type = 'text', ...otherProps
  } = props;

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <input
      value={value}
      onChange={onChangeHandler}
      placeholder={placeholder}
      readOnly={readOnly}
      type={type}
      className={cn(className, cls.input)}
    />
  );
});
