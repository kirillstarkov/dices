import React, { FC, memo } from 'react';
import cn from 'classnames';
import { Img } from 'shared/ui/img';
import { IconType } from './icon.types';

export const Icon: FC<IconType> = memo((props: IconType) => {
  const {
    pathToIcon, size, filter, className, onClick, loadingSpin = false,
  } = props;

  return (
    <Img
      onClick={onClick}
      loadingSpin={loadingSpin}
      className={cn(className)}
      style={{
        height: size, width: size, minHeight: size, minWidth: size, filter,
      }}
      src={pathToIcon}
    />
  );
});
