import { configureStore } from "@reduxjs/toolkit";
import StudentSlice from "./slices/StudentSlice";

export const Store = configureStore({
    reducer: {
        Student: StudentSlice.reducer,
    },
});
