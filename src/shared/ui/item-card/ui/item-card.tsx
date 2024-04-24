import React, { FC, memo } from 'react';
import cn from 'classnames';
import cls from './item-card.module.scss';
import { ItemCardType } from './item-card.types';

export const ItemCard: FC<ItemCardType> = memo((props: ItemCardType) => {
  const {
    title, description, leftBlock, onClick, className,
  } = props;

  return (
    <div className={cn(cls.itemCard, className)} onClick={onClick}>
      {leftBlock
          && (
            <div className={cls.leftBlock}>
              <div>{leftBlock}</div>
            </div>
          )}
      <div className={cls.textBlock}>
        <p className={cls.title}>{title}</p>
        {description && <div className={cls.description}>{description}</div>}
      </div>
    </div>
  );
});
