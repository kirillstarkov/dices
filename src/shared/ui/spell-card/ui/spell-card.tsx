import React, { FC, memo } from 'react';
import cn from 'classnames';
import { ItemCard } from 'shared/ui/item-card';
import cls from './spell-card.module.scss';
import { SpellCardType } from './spell-card.types';

export const SpellCard: FC<SpellCardType> = memo((props: SpellCardType) => {
  const { spell, className, onClick } = props;
  const { name, system } = spell;
  const { school, level, components } = system;

  let spellSchool = '';
  switch (school) {
  case 'abj':
    spellSchool = 'Перешкоджання';
    break;
  case 'con':
    spellSchool = "З'явлення";
    break;
  case 'div':
    spellSchool = 'Віщування';
    break;
  case 'enc':
    spellSchool = 'Зачарування';
    break;
  case 'evo':
    spellSchool = 'Втілення';
    break;
  case 'ill':
    spellSchool = 'Ілюзія';
    break;
  case 'nec':
    spellSchool = 'Некромантія';
    break;
  case 'trs':
    spellSchool = 'Перетворення';
    break;
  default:
    break;
  }

  const description = (
    <div className={cls.description}>
      <p>{spellSchool}</p>
      <div className={cls.components}>
        {components.concentration && <p className={cls.componentsWithBG}>К</p>}
        {components.ritual && <p className={cls.componentsWithBG}>Р</p>}
        {components.vocal ? <p>В</p> : <p className={cls.dot} />}
        {components.somatic ? <p>С</p> : <p className={cls.dot} />}
        {components.material ? <p>М</p> : <p className={cls.dot} />}
      </div>
    </div>
  );

  return (
    <ItemCard
      className={cn(className, cls.spellCard)}
      title={name}
      description={description}
      leftBlock={<p>{level}</p>}
      onClick={onClick}
    />
  );
});
