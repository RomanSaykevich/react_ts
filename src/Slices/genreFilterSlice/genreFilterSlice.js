import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {genreService} from "../../Services";

export const getGenresFilterById = createAsyncThunk(
    'genresFilterSlice/getGenresFilterById',
    async ({id,page})=>{
        const genreFil = await genreService.getByIdFilter(id,page)
        return genreFil
    }
)

const initialState = {
    genreFilter: [],
    page: 1
}

const genresFilterSlice = createSlice({
    name: 'genresFilterSlice',
    initialState,
    extraReducers: {
        [getGenresFilterById.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.genreFilter = action.payload
            state.page = action.payload.page
        }
    }
});
const genresFilterReducer = genresFilterSlice.reducer;
export default genresFilterReducer