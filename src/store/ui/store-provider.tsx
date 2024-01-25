import {StoreProviderProps} from "store/ui/store-provider.types";
import {FC} from "react";
import {useNavigate} from "react-router-dom";
import {createReduxStore} from "store/store";
import {StateSchema} from "store/config/state-schema";
import {ReducersMapObject} from "@reduxjs/toolkit";
import {Provider} from "react-redux";

export const StoreProvider: FC<StoreProviderProps> = (props: StoreProviderProps) => {
  const { children, initialState, asyncReducers } = props;
  const navigate = useNavigate();

  const store = createReduxStore(
      initialState as StateSchema,
      asyncReducers as ReducersMapObject<StateSchema>,
      navigate,
  );

  return(
      <Provider store={store}>
        {children}
      </Provider>
  )
}
