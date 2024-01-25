import {Spell} from "entities/spell";

export interface SpellCardProps {
  spell: Spell;
  className?: string;
  onClick?: () => void
}

export type SpellCardType = SpellCardProps
