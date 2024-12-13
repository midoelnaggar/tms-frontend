import showError from "@/helpers/showError";
import tasksServices from "@/services/tasksServices";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const createTaskThunk = createAsyncThunk(
    "tasks/create",
    async (payload: CreateTaskPayload, { rejectWithValue, dispatch }) => {
        try {
            const res = await tasksServices.createTask(payload);
            if (res.status === 201) {
                dispatch(getTasksThunk())
            }
            return res;
        } catch (err: any) {
            showError(err)
            return rejectWithValue(err.response.data);
        }
    }
);

export const getTasksThunk = createAsyncThunk(
    "tasks/get",
    async (_, { rejectWithValue }) => {
        try {
            const res = await tasksServices.getTasks();
            return res;
        } catch (err: any) {
            showError(err)
            return rejectWithValue(err.response.data);
        }
    }
);

export const updateTaskThunk = createAsyncThunk(
    "tasks/update",
    async (payload: UpdateTaskPayload, { rejectWithValue, dispatch }) => {
        try {
            const res = await tasksServices.updateTaskCompliation(payload);
            if (res.status === 200) {
                dispatch(getTasksThunk())
            }
            return res;
        } catch (err: any) {
            showError(err)
            return rejectWithValue(err.response.data);
        }
    }
);

export const deleteTaskThunk = createAsyncThunk(
    "tasks/delete",
    async (payload: DeleteTaskPayload, { rejectWithValue, dispatch }) => {
        try {
            const res = await tasksServices.deleteTaskCompliation(payload);
            if (res.status === 200) {
                dispatch(getTasksThunk())
            }
            return res;
        } catch (err: any) {
            showError(err)
            return rejectWithValue(err.response.data);
        }
    }
);