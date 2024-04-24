import React, { FC, memo } from 'react';
import cn from 'classnames';
import { Button } from 'shared/ui/button';
import { useMediaQuery } from 'shared/lib/hooks/use-media-query';
import cls from './content-side.module.scss';
import { ContentSideType } from './content-side.types';

export const ContentSide: FC<ContentSideType> = memo((props: ContentSideType) => {
  const {
    className, side, title, onClose, active, children, activeClass,
  } = props;
  const isTablet = useMediaQuery(1200);

  if (isTablet && side === 'left' && active) {
    return null;
  }

  return (
    <div className={cn(className, cls[side], cls.contentSide, active && (activeClass || cls.active))}>
      {side === 'right'
          && (
            <div className={cls.header}>
              <h1 className={cls.title}>{title}</h1>
              <Button onClick={onClose} theme="clear" className={cls.closeButton} />
            </div>
          )}
      <div className={cn(side === 'right' && cls.scrollWrapper)}>
        <div className={cn(side === 'right' && cls.content)}>
          {children}
        </div>
      </div>
    </div>
  );
});
