import React, {FC, memo} from 'react';
import cn from "classnames";
import cls from './nav-link.module.scss'
import {Link, LinkProps, useLocation} from "react-router-dom";



export const NavLink: FC<LinkProps> = memo((props: LinkProps) => {
  const { to, children, onClick } = props;
  const location = useLocation()
  const isActive = to === location.pathname

  return (
      <Link to={to} className={cn(cls.navLink, isActive && cls.active)} onClick={onClick}>
        {children}
      </Link>
  );
});
