import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {moviesService} from "../../Services";

export const getAllMovies = createAsyncThunk(
    "moveSlice/getAllMovies",
    async (page) => {
        const movies = await moviesService.getAll(page);
        return movies
    }
);

const initialState = {
    movies: [],
    page: 1
}

const moveSlice = createSlice({
    name: 'moveSlice',
    initialState,
    extraReducers: {
        [getAllMovies.fulfilled]: (state, action) => {
            state.status = "fulfilled"
            state.movies = action.payload
            state.page = action.payload.page
        }
    }
});
const movieReducer = moveSlice.reducer;

export default movieReducer