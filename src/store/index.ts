import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import userReducer from "./slices/userSlice";
import tasksReducer from "./slices/tasksSlice";

const persistedReducer = persistReducer({
    key: "root",
    storage,
    blacklist: ["user"],
}, combineReducers({
    user: persistReducer({
        key: "user",
        storage,
        blacklist: ["loading"]
    }, userReducer),
    tasks: tasksReducer,
}));

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export const persistor = persistStore(store);

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;