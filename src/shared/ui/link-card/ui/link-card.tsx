import React, {FC, memo} from 'react';
import cn from "classnames";
import cls from './link-card.module.scss'
import {LinkCardType} from "./link-card.types";
import {AppLink} from "shared/ui/app-link";


export const LinkCard: FC<LinkCardType> = memo((props: LinkCardType) => {
  const {to, className, linkClassname, children} = props;

  return (
        <AppLink to={to} className={cn(cls.linkCard, className)}>
          {children}
        </AppLink>
  );
});
