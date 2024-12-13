import { createSlice } from "@reduxjs/toolkit";
import { createTaskThunk, deleteTaskThunk, getTasksThunk, updateTaskThunk } from "../thunks/tasksThunks";

interface InitialState {
    loading: boolean;
    listLoading: boolean;
    tasks: Task[];
}

const initialState: InitialState = {
    loading: false,
    listLoading: false,
    tasks: []
}

const tasksSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        resetTasks: (state) => {
            state = initialState;
            return state;
        },
    },
    extraReducers(builder) {
        //create
        builder.addCase(createTaskThunk.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(createTaskThunk.fulfilled, (state) => {
            state.loading = false;
        });
        builder.addCase(createTaskThunk.rejected, (state) => {
            state.loading = false;
        });

        //get all
        builder.addCase(getTasksThunk.pending, (state) => {
            state.listLoading = true;
        });
        builder.addCase(getTasksThunk.fulfilled, (state, { payload }) => {
            state.listLoading = false;
            state.tasks = payload.data
        });
        builder.addCase(getTasksThunk.rejected, (state) => {
            state.listLoading = false;
        });

        //update
        builder.addCase(updateTaskThunk.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(updateTaskThunk.fulfilled, (state) => {
            state.loading = false;
        });
        builder.addCase(updateTaskThunk.rejected, (state) => {
            state.loading = false;
        });

        //delete
        builder.addCase(deleteTaskThunk.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(deleteTaskThunk.fulfilled, (state) => {
            state.loading = false;
        });
        builder.addCase(deleteTaskThunk.rejected, (state) => {
            state.loading = false;
        });
    }
});
export const { resetTasks } = tasksSlice.actions;
const tasksReducer = tasksSlice.reducer;
export default tasksReducer;