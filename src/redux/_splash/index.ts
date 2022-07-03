import {doSetSplashDone} from './actions';
import {createSlice} from '@reduxjs/toolkit';
import * as actions from './actions';
import { RootState } from '../store';

const initialState = {
  splashDone: false,
};

const slice = createSlice({
  name: 'splash',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(doSetSplashDone, (state: any) => {
      state.splashDone = true;
    });
  },
});

export const selectIsSplashDone = (state: RootState) => state.splash.splashDone;

const Splash = {
  slice,
  actions,
};

export default Splash;
