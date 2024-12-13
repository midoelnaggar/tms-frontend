import showError from "@/helpers/showError";
import { axiosInstance } from "@/services";
import userServices from "@/services/userServices";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const registerThunk = createAsyncThunk(
    "user/register",
    async (payload: RegisterPayload, { rejectWithValue }) => {
        try {
            const res = await userServices.register(payload);
            if (res.status === 201) {
                axiosInstance.defaults.headers.common["Authorization"] =
                    `Bearer ${res.data.token}`;
            }
            return res;
        } catch (err: any) {
            showError(err)
            return rejectWithValue(err.response.data);
        }
    }
);


export const loginThunk = createAsyncThunk(
    "user/login",
    async (payload: LoginPayload, { rejectWithValue }) => {
        try {
            const res = await userServices.login(payload);
            if (res.status === 200) {
                axiosInstance.defaults.headers.common["Authorization"] =
                    `Bearer ${res.data.token}`;
            }
            return res;
        } catch (err: any) {
            showError(err)
            return rejectWithValue(err.response.data);
        }
    }
);