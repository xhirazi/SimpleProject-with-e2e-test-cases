import {combineReducers} from 'redux';
import {RootState} from '../store';

import {TypedUseSelectorHook, useSelector} from 'react-redux';
import cartReducer from '@Cart/redux/reducer';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['cartReducer'],
};
const rootReducer = combineReducers({
  cartReducer,
});

export default persistReducer(persistConfig, rootReducer);
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector; // use it instead of useSelector across app
