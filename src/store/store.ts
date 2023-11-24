import { configureStore } from "@reduxjs/toolkit";
import question from "../components/AddQuestion/questionSlice";

const store = configureStore({
    reducer: { question },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
