import React, {FC, memo} from 'react';
import cn from "classnames";
import cls from './navbar.module.scss'
import {ThemeSwitcher} from "features/theme-switcher";
import {Link} from "react-router-dom";
import {RoutePath} from "shared/config/route-config";
import {Icon} from "shared/ui/icon";
import {ICONS} from "shared/lib/constants/images";
import {NavMenu} from "shared/ui/nav-menu";


export const Navbar: FC = memo(() => {
  return (
      <div className={cn(cls.navbar)}>
        <div className={cls.wrapper}>
          <Link to={RoutePath.main}>
            <Icon pathToIcon={ICONS.logo} size={46}/>
          </Link>
          <NavMenu/>
        </div>
        <ThemeSwitcher/>
      </div>
  );
});
