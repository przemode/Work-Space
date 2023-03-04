import { combineReducers } from '@reduxjs/toolkit';
import timersSlice from './TimersSlice';


const rootReducer = combineReducers({
    timers: timersSlice,
})

export default rootReducer