import { configureStore } from '@reduxjs/toolkit'
import { devToolsEnhancer } from '@redux-devtools/extension'
import thunk from 'redux-thunk'
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'
import rootSlice from './slices/combinedSlices'

const middleware = [thunk]
const persistConfig = {
    key: 'root',
    version: 1,
    storage
}

const persistedReducer = persistReducer(persistConfig, rootSlice)

export const store = configureStore(
    {
        reducer: persistedReducer,
        middleware
    },
    devToolsEnhancer()
)
export const persistor = persistStore(store)
