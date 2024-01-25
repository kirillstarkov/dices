import {StateSchema} from "store/config/state-schema";

export const getSpellsPageIsLoading = (state: StateSchema) => state.spellsPage?.isLoading || false;
export const getSpellsPageError = (state: StateSchema) => state.spellsPage?.error
