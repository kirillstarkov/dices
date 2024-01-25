// import {CombinedState, Reducer, configureStore, ReducersMapObject} from "@reduxjs/toolkit";
// import {NavigateOptions, To} from "react-router-dom";
// import {StateSchema} from "store/config/state-schema";
// import {createReducerManager} from "store/config/reducer-manager";
//
// export function createReduxStore (
//     initialState?: StateSchema,
//     asyncReducers?: ReducersMapObject<StateSchema>,
//     navigate?: (to: To, options?: NavigateOptions) => void,
// ) {
//   const rootReducers: ReducersMapObject<StateSchema> = {
//     ...asyncReducers
//   };
//
//   const reducerManager = createReducerManager(rootReducers);
//
//   const store = configureStore({
//     reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
//     devTools: __IS_DEV__,
//     preloadedState: initialState,
//     middleware: (getDefaultMiddleware) => getDefaultMiddleware({
//       thunk: {
//         extraArgument: {
//           api:
//           navigate,
//         }
//       }
//     })
//   });
//   // @ts-ignore
//   store.reducerManager = reducerManager;
//
//   return store
// }
//
// export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']


import {
  CombinedState, Reducer, ReducersMapObject, configureStore,
} from '@reduxjs/toolkit';
import { NavigateOptions, To } from 'react-router-dom';
import { counterReducer } from 'entities/counter';
import {createReducerManager} from "store/config/reducer-manager";
import {StateSchema} from "store/config/state-schema";
import {$api} from "shared/api/api";


export function createReduxStore(
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
    navigate?: (to: To, options?: NavigateOptions) => void,
) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
  };

  const reducerManager = createReducerManager(rootReducers);

  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      thunk: {
        extraArgument: {
          api: $api,
          navigate,
        },
      },
    }),
  });
  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
