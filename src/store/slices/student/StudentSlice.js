import { createSlice } from "@reduxjs/toolkit";

const StudentSlice = createSlice({
    name: "Student",
    initialState: {
        login: false,
        user: {
            name: {
                first_name: "",
                middle_name: "",
                last_name: "",
            },
            account: {
                email: "",
                password: "",
            },
        },
    },
    reducers: {
        isLogin: (state, action) => {},
    },
});

export const { isLogin } = StudentSlice.actions;

export default StudentSlice;
