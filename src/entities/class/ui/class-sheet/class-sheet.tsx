import React, { FC, memo } from 'react';
import { AppDisclosure } from 'shared/ui/app-disclosure';
import { IFeature } from 'entities/class/model/types/class.type';
import { ClassTable } from 'entities/class/ui/class-table/class-table';
import cls from './class-sheet.module.scss';
import { ClassSheetType } from './class-sheet.types';

export const ClassSheet: FC<ClassSheetType> = memo((props: ClassSheetType) => {
  const { charClass } = props;
  const {
    hitDice, equipment, proficiency, features, knownSpells,
  } = charClass;
  const featuresArr: IFeature[][] = Object.values(features);
  return (
    <div>
      <AppDisclosure title="Здоров'я">
        <p>
          <b>Кістка здоров'я:</b>
          {' '}
          1к
          {hitDice}
          {' '}
          за кожен рівень
        </p>
        <p>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <b>Пункти здоров'я на першому рівні:</b>
          {' '}
          {hitDice}
          {' '}
          + ваш модифікатор
          {' '}
          <span className="const">Статури</span>
        </p>
        <p>
          <b>Пункти здоров’я на вищих рівнях:</b>
          {' '}
          1к
          {hitDice}
          {' '}
          (або
          {' '}
          {hitDice / 2 + 1}
          ) + ваш модифікатор
          {' '}
          <span className="const">Статури</span>
          {' '}
          за кожен рівень цього классу після першого (мінімум 1).
        </p>
      </AppDisclosure>
      <div>
        <ClassTable featuresArr={featuresArr} classTitle={charClass.name} knownSpells={knownSpells} />
      </div>
      <AppDisclosure title="Володіння">
        <p>
          <b>Обладунки:</b>
          {' '}
          {proficiency.armor}
        </p>
        <p>
          <b>Зброя:</b>
          {' '}
          {proficiency.weapons}
        </p>
        <p>
          <b>Інструменти:</b>
          {' '}
          {proficiency.tools}
        </p>
        <p>
          <b>Ряткидки:</b>
          {' '}
          <span dangerouslySetInnerHTML={{ __html: proficiency.savThrow as string }} />
          {' '}
        </p>
        <p>
          <b>Навички:</b>
          {' '}
          {proficiency.skills}
        </p>
      </AppDisclosure>
      <AppDisclosure title="Спорядження">
        <p>Ви починаєте з наступним спорядженням на додачу до спорядження, наданого передісторією:</p>
        <ul>
          {equipment.items.map((e, i) => (<li key={i}>{e}</li>))}
        </ul>
        <p>
          Як альтернатива базовому спорядженню, ви можете отримати
          {equipment.gold}
          {' '}
          золоті монети та вибрати собі спорядження самостійно.
        </p>
      </AppDisclosure>
      {featuresArr.map((level) => level.map((feat) => {
        if (!feat.description) {
          return null;
        }
        return (
          <AppDisclosure title={feat.name} key={feat.name} className={cls.feat}>
            <div dangerouslySetInnerHTML={{ __html: feat.description }} />
          </AppDisclosure>
        );
      }))}
    </div>
  );
});
