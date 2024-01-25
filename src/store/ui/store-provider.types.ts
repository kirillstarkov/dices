import {ReactNode} from "react";
import {StateSchema} from "store/config/state-schema";
import {ReducersMapObject} from "@reduxjs/toolkit";

export interface StoreProviderProps {
  children?: ReactNode;
  initialState?: DeepPartial<StateSchema>
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
}
