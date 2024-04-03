import React, {FC, memo} from 'react';
import cn from "classnames";
import cls from './class-table.module.scss'
import {ClassTableType} from "./class-table.types";


export const ClassTable: FC<ClassTableType> = memo((props: ClassTableType) => {
  const {featuresArr, classTitle, knownSpells} = props;

  let bm = 2;

  const isArtificer = classTitle === 'Винахідник'
  const isBard = classTitle === 'Бард'
  const isBarbarian = classTitle === 'Варвар'
  const isCleric = classTitle === 'Жрець'
  const isDruid = classTitle === 'Друїд'
  const isFighter = classTitle === 'Воїн'
  const isMonk = classTitle === 'Монах'
  const isPaladin = classTitle === 'Паладин'
  const isSorcerer = classTitle === 'Заклинач'
  const isRanger = classTitle === 'Рейнджер'
  const isRogue = classTitle === 'Пройдисвіт'
  const isWarlock = classTitle === 'Чорнокнижник'
  const isWizard = classTitle === 'Чарівник'

  const isKnowCantrips = isBard || isArtificer || isCleric || isWizard || isWarlock || isDruid || isSorcerer;
  const isKnowSpells = isBard || isWarlock || isSorcerer || isRanger;
  const isFullSpellCaster = isBard || isCleric || isWizard || isDruid || isSorcerer;
  const isHalfSpellCaster = isRanger || isArtificer || isPaladin;
  let startCantrips = isSorcerer ? 4 : (isCleric || isWizard) ? 3 : 2;

  return (
      <div className={cls.classTable}>
        <table>
          <thead>
            <tr>
              <th rowSpan={2} className={cls.lvlCol}>Рів.</th>
              <th rowSpan={2} className={cls.bmCol}>БМ</th>
              <th rowSpan={2} className={cls.featCol}>Вміння</th>
              {isArtificer && (
                  <th rowSpan={2}>Відомі Інфузії</th>
              )}
              {isArtificer && (
                  <th rowSpan={2}>Інфузії предметів</th>
              )}
              {isKnowCantrips && (
                  <th rowSpan={2}>Відомі замовляння</th>
              )}
              {isKnowSpells && (
                  <th rowSpan={2}>Відомі Чари</th>
              )}
              {(isFullSpellCaster || isHalfSpellCaster) && (
                  <th align="center" colSpan={isHalfSpellCaster ? 5 : 9}>Кількість доступних чарунків на рівень</th>
              )}
              {isBarbarian && (
                  <th>Лють</th>
              )}
              {isBarbarian && (
                  <th>Шкода Люті</th>
              )}
            </tr>
            {isFullSpellCaster && (
                <tr>
                  <th>1</th>
                  <th>2</th>
                  <th>3</th>
                  <th>4</th>
                  <th>5</th>
                  <th>6</th>
                  <th>7</th>
                  <th>8</th>
                  <th>9</th>
                </tr>
            )}
            {isHalfSpellCaster && (
                <tr>
                  <th>1</th>
                  <th>2</th>
                  <th>3</th>
                  <th>4</th>
                  <th>5</th>
                </tr>
            )}
          </thead>
          <tbody>
          {featuresArr.map((level, i) => {
            if (i !== 0 && i % 4 === 0) bm+=1
            return (
                <tr key={i}>
                  <td align="center" className={cls.lvlCol}>{i+1}</td>
                  <td align="center" className={cls.bmCol}>+{bm}</td>
                  <td className={cls.featCol}>{level.map((feat, index) => (
                      <span key={feat.name} className={cls.skill}>{feat.name}{level.length - 1 !== index && ","}&nbsp;</span>
                  ))}</td>
                  {isArtificer && (
                      <td align="center">{i === 0 ? "—" : i < 5 ? 4 : i < 9 ? 6 : i < 13 ? 8 : i < 17 ? 10 : 12 }</td>
                  )}
                  {isArtificer && (
                      <td align="center">{i === 0 ? "—" : i < 5 ? 2 : i < 9 ? 3 : i < 13 ? 4 : i < 17 ? 5 : 6 }</td>
                  )}
                  {isKnowCantrips && (
                      <td align="center">{i <= 2 ? startCantrips : i <= 8 ? startCantrips+1 : startCantrips+2}</td>
                  )}
                  {(isKnowSpells && knownSpells) && (
                      <td align="center">{knownSpells[i]}</td>
                  )}
                  {isFullSpellCaster && (
                      <>
                        <td align="center">{i >= 2 ? 4 : i === 1 ? 3 : 2}</td>
                        <td align="center">{i < 2 ? "—" : i === 2 ? 2 : 3}</td>
                        <td align="center">{i < 4 ? "—" : i === 4 ? 2 : 3}</td>
                        <td align="center">{i < 6 ? "—" : i === 6 ? 1 : i === 7 ? 2 : 3}</td>
                        <td align="center">{i < 8 ? "—" : i === 8 ? 1 : i < 17 ? 2 : 3}</td>
                        <td align="center">{i < 10 ? "—" : i < 18 ? 1 : 2}</td>
                        <td align="center">{i < 12 ? "—" : i < 19 ? 1 : 2}</td>
                        <td align="center">{i < 14 ? "—" : 1}</td>
                        <td align="center">{i < 16 ? "—" : 1}</td>
                      </>
                  )}
                  {isHalfSpellCaster && (
                      <>
                        <td align="center">{i === 0 ? isArtificer ? 2 : "—" : i < 2 ? 2 : i < 4 ? 3 : 4}</td>
                        <td align="center">{i < 4 ? "—" : i <= 5 ? 2 : 3}</td>
                        <td align="center">{i < 8 ? "—" : i <= 9 ? 2 : 3}</td>
                        <td align="center">{i < 12 ? "—" : i <= 13 ? 1 : i <= 15 ? 2 : 3}</td>
                        <td align="center">{i < 16 ? "—" : i <= 17 ? 1 : 2}</td>
                      </>
                  )}
                  {isBarbarian && (
                      <td align="center">{i < 2 ? 2 : i < 5 ? 3 : i < 11 ? 4 : i < 16 ? 5 : i < 19 ? 6 : "∞"}</td>
                  )}
                  {isBarbarian && (
                      <td align="center">+{i < 8 ? 2 : i < 15 ? 3 : 4}</td>
                  )}
                </tr>
            )
          })}
          </tbody>
        </table>
      </div>
  );
});
