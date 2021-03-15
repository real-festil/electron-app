/* eslint-disable no-underscore-dangle */
import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';

import * as articlesSlice from './ducks/articles';

// tslint:disable:no-var-requires
const reduxModule = require(`redux`);

reduxModule.__DO_NOT_USE__ActionTypes.INIT = `@@redux/INIT`;
reduxModule.__DO_NOT_USE__ActionTypes.REPLACE = `@@redux/REPLACE`;

const reducers = combineReducers({
  articles: articlesSlice.articleSlice.reducer,
});

// export type State = ReturnType<typeof reducer>;

// const rootReducer = (state: State, action: AnyAction) => {
//   switch (action.type) {
//     default:
//       return reducer(state, action);
//   }
// };

const storage = require(`redux-persist/lib/storage`).default;

const persistConfig = {
  key: `root`,
  storage,
  whitelist: [`articles`],
};

// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, reducers);

export default configureStore({
  reducer: persistedReducer,
  devTools: true,
  middleware: getDefaultMiddleware({ serializableCheck: false }),
});
