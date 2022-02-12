import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {genreService} from "../../Services";

export const getAllGenres = createAsyncThunk(
    'genresSlice/getAllGenres',

    async () => {

        const genres = await genreService.getAll();

        return genres
    }
);

const initialState = {
    genres: [],
};

const genresSlice = createSlice({
    name: 'genresSlice',
    initialState,
    extraReducers: {
        [getAllGenres.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.genres = action.payload.genres
        }
    }
});

const genresReducer = genresSlice.reducer;

export default genresReducer;