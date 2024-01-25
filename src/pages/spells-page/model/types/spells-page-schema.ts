import {EntityState} from "@reduxjs/toolkit";
import {Spell} from "entities/spell/model/types/spell.type";

export interface SpellsPageSchema extends EntityState<Spell> {
  isLoading?: boolean;
  error?: string;
}
