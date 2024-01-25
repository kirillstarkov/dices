import {createEntityAdapter, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Spell} from "entities/spell/";
import {SpellsPageSchema} from "pages/spells-page";
import {fetchSpellsList} from "pages/spells-page/model/services/fetch-spells-list";
import {StateSchema} from "store/config/state-schema";
import {FetchedSpells} from "entities/spell/model/types/spell.type";

const spellsAdapter = createEntityAdapter<Spell>({
  selectId: (spell) => spell._id
})

export const getSpells = spellsAdapter.getSelectors<StateSchema>(
    (state) => state.spellsPage || spellsAdapter.getInitialState()
)

const spellsPageSlice = createSlice({
  name: 'spellsPageSlice',
  initialState: spellsAdapter.getInitialState<SpellsPageSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {
    }
  }),
  reducers: {
  },
  extraReducers: (builder) => {
    builder
        .addCase(fetchSpellsList.pending, (state) => {
          state.error = undefined
          state.isLoading = true
        })
        .addCase(fetchSpellsList.fulfilled, (state, action: PayloadAction<Spell[]>) => {
          state.isLoading = false;
          spellsAdapter.setAll(state, action.payload)
        })
        .addCase(fetchSpellsList.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        });
  }
});

export const { reducer: spellsPageReducer, actions: spellsPageActions } = spellsPageSlice;
