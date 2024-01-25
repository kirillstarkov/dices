import React, {FC, memo} from 'react';
import cn from "classnames";
import cls from './navbar.module.scss'
import {ThemeSwitcher} from "features/theme-switcher";


export const Navbar: FC = memo(() => {
  return (
      <div className={cn(cls.navbar)}>
        <ThemeSwitcher/>
      </div>
  );
});
