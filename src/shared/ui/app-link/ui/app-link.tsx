import React, { FC, memo } from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import cls from './app-link.module.scss';
import { AppLinkType } from './app-link.types';

export const AppLink: FC<AppLinkType> = memo((props: AppLinkType) => {
  const {
    to, className, children, ...otherProps
  } = props;

  return (
    <Link
      to={to}
      className={cn(className, cls.appLink)}
      {...otherProps}
    >
      {children}
    </Link>
  );
});
