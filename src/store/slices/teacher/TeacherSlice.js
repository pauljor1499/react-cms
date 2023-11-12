import { createSlice } from "@reduxjs/toolkit";

const TeacherSlice = createSlice({
    name: "Teacher",
    initialState: {
        error: null,
        loading: null,
        isLogin: false,
        user: null,
    },
    reducers: {
        isLogin: (state, { payload }) => {},
        teacherLogin: (state, { payload }) => {},
    },
});

export const { isLogin } = TeacherSlice.actions;

export default TeacherSlice;
