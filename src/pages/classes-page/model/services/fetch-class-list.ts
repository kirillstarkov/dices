import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "store/config/state-schema";
import {IClass} from "entities/class";

export const fetchClassesList = createAsyncThunk<IClass[], {}, ThunkConfig<string>>(
    'classesPage/fetchClassesList',
    async (props, thunkApi) => {
      const {extra, rejectWithValue} = thunkApi;
      try {
        const response = await extra.api.get<any[]>('/classes', {
          params: {
          }
        });

        if(!response.data) {
          throw new Error();
        }
        console.log(response)
        return response.data
      } catch (e) {
        return rejectWithValue('error when loading spells list')
      }
    }
)
