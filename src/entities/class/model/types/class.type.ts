import { ReactNode } from 'react';

export type ClassTitle = 'Бард' | 'Варвар' | 'Винахідник' | 'Воїн' | 'Друїд' | 'Жрець' | 'Заклинач' | 'Монах' | 'Паладин' | 'Пройдисвіт' | 'Рейнджер' | 'Чарівник' | 'Чорнокнижник'

interface ProfProps {
  armor: string;
  weapons: string;
  tools: string;
  savThrow: ReactNode;
  skills: string;
}

interface EquipmentProps {
  items: string[];
  gold: string;
}

export interface IFeature {
  name: string;
  description?: string;
}

export interface FeaturesProps {
  lvl1: IFeature[];
  lvl2: IFeature[];
  lvl3: IFeature[];
  lvl4: IFeature[];
  lvl5: IFeature[];
  lvl6: IFeature[];
  lvl7: IFeature[];
  lvl8: IFeature[];
  lvl9: IFeature[];
  lvl10: IFeature[];
  lvl11: IFeature[];
  lvl12: IFeature[];
  lvl13: IFeature[];
  lvl14: IFeature[];
  lvl15: IFeature[];
  lvl16: IFeature[];
  lvl17: IFeature[];
  lvl18: IFeature[];
  lvl19: IFeature[];
  lvl20: IFeature[];
}

export interface IClass {
  _id?: string;
  name: ClassTitle;
  hitDice: number;
  proficiency: ProfProps;
  equipment: EquipmentProps;
  features: FeaturesProps;
  knownSpells?: number[];
}
