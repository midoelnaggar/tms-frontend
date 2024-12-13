import { createSlice } from "@reduxjs/toolkit";
import { loginThunk, registerThunk } from "../thunks/userThunks";

interface InitialState {
    loading: boolean;
    userData: User | null;
}

const initialState: InitialState = {
    loading: false,
    userData: null
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        logout: (state) => {
            state = initialState;
            return state;
        },
    },
    extraReducers(builder) {
        //register
        builder.addCase(registerThunk.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(registerThunk.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.userData = payload.data
        });
        builder.addCase(registerThunk.rejected, (state) => {
            state.loading = false;
        });

        //login
        builder.addCase(loginThunk.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(loginThunk.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.userData = payload.data
        });
        builder.addCase(loginThunk.rejected, (state) => {
            state.loading = false;
        });
    }
});
export const { logout } = userSlice.actions;
const userReducer = userSlice.reducer;
export default userReducer;