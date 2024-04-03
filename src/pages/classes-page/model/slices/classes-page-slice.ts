import {createEntityAdapter, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IClass} from "entities/class";
import {StateSchema} from "store/config/state-schema";
import {ClassesPageSchema} from "pages/classes-page/model/types/classes-page-schema";
import {fetchClassesList} from "pages/classes-page/model/services/fetch-class-list";

const classesAdapter = createEntityAdapter<IClass>({
  selectId: (role) => role.name
})

export const getClasses = classesAdapter.getSelectors<StateSchema>(
    (state) => state.classesPage || classesAdapter.getInitialState()
)

const classesPageSlice = createSlice({
  name: 'classesPageSlice',
  initialState: classesAdapter.getInitialState<ClassesPageSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {}
  }),
  reducers: {},
  extraReducers: (builder)=> {
    builder
        .addCase(fetchClassesList.pending, (state) => {
          state.error = undefined;
          state.isLoading = true;
        })
        .addCase(fetchClassesList.fulfilled, (state, action: PayloadAction<IClass[]>) => {
          state.isLoading = false;
          classesAdapter.setAll(state, action.payload);
        })
        .addCase(fetchClassesList.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        })
  }
})

export const {reducer: classesPageReducer, actions: classesPageActions} = classesPageSlice;
