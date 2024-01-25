export type ActivationType = 'action' | 'bonus' | 'reaction' | 'minute' | 'hour'
export type DurationUnitType = 'inst' | 'round' | 'minute' | 'hour' | 'day'
export type SpellSchool = 'trs' | 'con' | 'evo' | 'div' | 'nec' | 'abj' | 'ill' | 'enc'

export interface SpellComponents {
  vocal: boolean;
  somatic: boolean;
  material:	boolean;
  ritual:	boolean;
  concentration: boolean;

}

export interface SpellSystem {
  description: {
    value: string;
  };
  source: string; /// для сортування по книгам або по классам????
  activation: {
    type: ActivationType;
    cost: number
  };
  duration: {
    value: string;
    units: DurationUnitType;
  };
  target: {
    value: string;
    width: string;
    units: string;
    type: string;
  };
  range: {
    value: number;
    long: string;
    units: string;
  }
  uses: {
    value: string;
    max: string;
    per: string;
    recovery: string
  }
  actionType: string;
  damage: [[string, string]];
  save: {
    ability: string;
    dc: string;
    scaling: string;
  }
  level: number;
  school: SpellSchool;
  components: SpellComponents;
  materials: {
    value	:	string;
    consumed	:	boolean;
    cost: number;
    supply: number;
  };
  scaling: {
    mode:	string
    formula:	string
  }
}

export interface Spell {
  name: string;
  type: string;
  system: SpellSystem;
  _id: string;
}

export interface FetchedSpells {
  entries: Spell[];
}
