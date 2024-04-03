import {StateSchema} from "store/config/state-schema";

export const getClassesPageIsLoading = (state: StateSchema) => state.spellsPage?.isLoading || false;
export const getClassesPageError = (state: StateSchema) => state.spellsPage?.error
