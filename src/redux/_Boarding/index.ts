import {doSetBoardingDone} from './actions';
import {createSlice} from '@reduxjs/toolkit';
import * as actions from './actions';
import {RootState} from '../store';

const initialState = {
  boardingDone: false,
};

const slice = createSlice({
  name: 'boarding',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(doSetBoardingDone, (state: any) => {
      state.boardingDone = true;
    });
  },
});

export const selectIsBoardingDone = (state: RootState) =>
  state.boarding.boardingDone;

const Boarding = {
  slice,
  actions,
};

export default Boarding;
