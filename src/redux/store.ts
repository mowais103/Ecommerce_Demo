import {Action, AnyAction, configureStore, ThunkAction} from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';
import AsyncStorage from '@react-native-async-storage/async-storage';
import rootReducer from './slice';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
  version: 1,
};

type RootReducer = ReturnType<typeof rootReducer>;

const persistedReducer = persistReducer<RootReducer, AnyAction>(
  persistConfig,
  rootReducer,
);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);
persistor.flush();

type AppDispatch = typeof store.dispatch;
type AppStore = typeof store;
type RootState = ReturnType<typeof store.getState>;
type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>;

export type {AppDispatch, AppStore, RootState, AppThunk, RootReducer};

export {store, persistor};
