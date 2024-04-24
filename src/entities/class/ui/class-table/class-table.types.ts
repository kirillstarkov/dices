import { ClassTitle, IFeature } from 'entities/class/model/types/class.type';

interface ClassTableProps {
  featuresArr: IFeature[][]
  classTitle: ClassTitle;
  knownSpells?: number[]
}

export type ClassTableType = ClassTableProps
