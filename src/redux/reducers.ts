import { combineReducers } from '@reduxjs/toolkit';
import itemsReducer from './actions';

const rootReducer = combineReducers({
    items: itemsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
