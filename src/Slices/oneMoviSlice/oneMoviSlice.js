import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {moviesService} from "../../Services";

export const getById = createAsyncThunk(

  'oneMoviSlice/getById',
  async (id)=>{
     const oneMovie = await moviesService.getById(id);
      return oneMovie

  }
);

const initialState={
    movieOne: []
};

const oneMoviSlice = createSlice({
    name:'oneMoviSlice',
    initialState,
    extraReducers:{
        [getById.fulfilled]:(state,action)=>{
            state.status = 'fulfilled'
            state.movieOne = action.payload
        }
    }
});

const oneMovieReducer = oneMoviSlice.reducer;
export default oneMovieReducer