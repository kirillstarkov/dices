import React, {FC, memo} from 'react';
import cn from "classnames";
import cls from './page.module.scss'
import {PageType} from "./page.types";


export const Page: FC<PageType> = memo((props: PageType) => {
  const { children, className } = props;

  return (
      <div className={cn(className, cls.pageWrapper)}>
        {children}
      </div>
  );
});
