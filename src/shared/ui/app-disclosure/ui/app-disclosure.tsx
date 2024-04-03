import React, {FC, memo} from 'react';
import cn from "classnames";
import cls from './app-disclosure.module.scss'
import {AppDisclosureType} from "./app-disclosure.types";
import { Disclosure } from '@headlessui/react';



export const AppDisclosure: FC<AppDisclosureType> = memo((props: AppDisclosureType) => {
  const {title, children, className, titleClassName, descClassName} = props;

  return (
      <Disclosure as={"div"} className={cn(cls.appDisc, className)} defaultOpen>
        {({open}) => (
            <>
              <Disclosure.Button as={"div"} className={cn(cls.discBtn, !open && cls.inactive)}>
                <span className={cn(cls.sectionTitle, titleClassName)}>{title}</span>
                <p className={cls.more}>{open ? "➖" : "➕"}</p>
              </Disclosure.Button>
              <Disclosure.Panel className={cn(cls.description, descClassName)}>
                {children}
              </Disclosure.Panel>
            </>
        )}
      </Disclosure>
  );
});
