import { StateSchema } from 'store/config/state-schema';
import { buildSelector } from 'shared/lib/store';

export const [useSpellsPageIsLoading, getSpellsPageIsLoading] = buildSelector((state) => state.spellsPage?.isLoading);
export const getSpellsPageError = (state: StateSchema) => state.spellsPage?.error;
