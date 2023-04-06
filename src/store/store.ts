import {combineReducers, configureStore} from "@reduxjs/toolkit";
import reducer from './reducers/Slice';

const rootReducer = combineReducers({
    reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']