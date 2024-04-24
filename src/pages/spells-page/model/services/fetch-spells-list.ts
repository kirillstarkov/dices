import { createAsyncThunk } from '@reduxjs/toolkit';
import { Spell } from 'entities/spell/';
import { ThunkConfig } from 'store/config/state-schema';
import { FetchedSpells } from 'entities/spell/model/types/spell.type';

interface FetchSpellsListProps {
  text: string
}

export const fetchSpellsList = createAsyncThunk<Spell[], FetchSpellsListProps, ThunkConfig<string>>(
  'spellsPage/fetchSpellsList',
  async (props, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;
    const { text } = props;
    try {
      const response = await extra.external.get<string>('/spells-dices.db', {
        params: {

        },
      });

      if (!response.data) {
        throw new Error();
      }
      const splitResponse = response.data.split('\n');
      splitResponse.pop();
      return splitResponse.map((e: string) => JSON.parse(e));
    } catch (e) {
      return rejectWithValue('error when loading spells list');
    }
  },
);
