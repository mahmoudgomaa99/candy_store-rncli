import {combineReducers} from '@reduxjs/toolkit';
import User from './user';
import loadingSlice from './_loading';
import tokenReducer from './tokens/reducer';
import Splash from './_splash';
import Boarding from './_Boarding';
const combinedReducer = combineReducers({
  _loading: loadingSlice.reducer,
  tokens: tokenReducer,

  [User.slice.name]: User.slice.reducer,
  [Splash.slice.name]: Splash.slice.reducer,
  [Boarding.slice.name]: Boarding.slice.reducer,
});

export default combinedReducer;
