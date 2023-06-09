import { configureStore } from "@reduxjs/toolkit";
import todosReducer from './features/todosSlice'
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, todosReducer)

const store = configureStore({
    reducer: {
        todos: persistedReducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({
            serializableCheck: false
        })
    }
})

const persistor = persistStore(store)

export {
    persistor,
    store
}