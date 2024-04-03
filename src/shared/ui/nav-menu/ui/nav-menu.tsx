import React, {FC, memo} from 'react';
import cn from "classnames";
import cls from './nav-menu.module.scss'
import { Menu } from '@headlessui/react'
import {NavMenuType} from "./nav-menu.types";
import {RoutePath} from "shared/config/route-config";
import {NavLink} from "shared/ui/nav-link";


export const NavMenu: FC<NavMenuType> = memo((props: NavMenuType) => {
  const {} = props;

  return (
      <Menu as="div" className={cls.menu}>
        {({open}) => (
            <>
              <Menu.Button className={cn(cls.menuButton, open && cls.opened, cls.arrow)}>
                <span className={cls.line} />
                <div className={cls.spanWrapper}>
                  <span className={cls.line} />
                  <span className={cls.line} />
                </div>
                <span className={cls.line} />
              </Menu.Button>
              <Menu.Items className={cls.menuItems}>
                <div className={cls.itemsCol}>
                  <Menu.Item as={NavLink} to={RoutePath.classes}>
                    Класси
                  </Menu.Item>
                  <Menu.Item as={NavLink} to={RoutePath.races}>
                    Раси
                  </Menu.Item>
                  <Menu.Item as={NavLink} to={RoutePath.feats}>
                    Риси
                  </Menu.Item>
                  <Menu.Item as={NavLink} to={RoutePath.backgrounds}>
                    Передісторії
                  </Menu.Item>
                  <Menu.Item as={NavLink} to={RoutePath.spells}>
                    Чари
                  </Menu.Item>
                </div>
                <div className={cls.itemsCol}>
                  <Menu.Item as={NavLink} to={RoutePath.weapons}>
                    Зброя
                  </Menu.Item>
                  <Menu.Item as={NavLink} to={RoutePath.armors}>
                    Обладунки
                  </Menu.Item>
                  <Menu.Item as={NavLink} to={RoutePath.items}>
                    Спорядження
                  </Menu.Item>
                  <Menu.Item as={NavLink} to={RoutePath.magic_items}>
                    Магічні предмети
                  </Menu.Item>
                  <Menu.Item as={NavLink} to={RoutePath.bestiary}>
                    Бестіарій
                  </Menu.Item>
                </div>
              </Menu.Items>
            </>
        )}
      </Menu>
  );
});
