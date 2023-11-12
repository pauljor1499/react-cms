import { configureStore } from "@reduxjs/toolkit";
import TeacherSlice from "./slices/teacher/TeacherSlice";
import StudentSlice from "./slices/student/StudentSlice";

export const Store = configureStore({
    reducer: {
        Teacher: TeacherSlice.reducer,
        Student: StudentSlice.reducer,
    },
});
