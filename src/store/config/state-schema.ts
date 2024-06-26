import {
  AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject, Dispatch,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { NavigateOptions, To } from 'react-router-dom';
import { SpellsPageSchema } from 'pages/spells-page';
import { CounterScheme } from 'entities/counter';
import { ClassesPageSchema } from 'pages/classes-page/model/types/classes-page-schema';

export interface StateSchema {
  counter: CounterScheme
  // Async reducers
  spellsPage?: SpellsPageSchema;
  classesPage?: ClassesPageSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager
}

export interface ThunkExtraArg {
  api: AxiosInstance;
  external: AxiosInstance;
  navigate?: (to: To, options?: NavigateOptions) => void
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateSchema;
  dispatch?: Dispatch
}
