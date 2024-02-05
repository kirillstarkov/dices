import React, {FC, memo} from 'react';
import cn from "classnames";
import cls from './content-side.module.scss'
import {ContentSideType} from "./content-side.types";
import {Button} from "shared/ui/button";


export const ContentSide: FC<ContentSideType> = memo((props: ContentSideType) => {
  const { className, side, title, onClose, active, children } = props;

  return (
      <div className={cn(className, cls[side], cls.contentSide, active && cls.active)}>
        {side === 'right' &&
          <div className={cls.header}>
            <h3>{title}</h3>
            <Button onClick={onClose} theme={'clear'} className={cls.closeButton}/>
          </div>
        }
        <div className={cn(side === 'right' && cls.content)}>
          {children}
        </div>
      </div>
  );
});
