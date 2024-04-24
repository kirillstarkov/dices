import React, { FC, memo } from 'react';
import cn from 'classnames';
import { Button } from 'shared/ui/button';
import { Icon } from 'shared/ui/icon';
import cls from './icon-button.module.scss';
import { IconButtonProps } from './icon-button.types';

export const IconButton: FC<IconButtonProps> = memo((props: IconButtonProps) => {
  const {
    className, disabled, children, iconPath, size, onClick,
  } = props;

  return (
    <Button
      disabled={disabled}
      className={cn(cls.iconButton, className)}
      onClick={onClick}
      theme="clear"
    >
      <Icon
        pathToIcon={iconPath}
        size={size}
      />
    </Button>
  );
});
