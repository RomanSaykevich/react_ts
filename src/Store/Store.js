import {configureStore} from "@reduxjs/toolkit";

import movieReducer from "../Slices/moviSlice/moveSlice";
import oneMovieReducer from "../Slices/oneMoviSlice/oneMoviSlice";
import genresReducer from "../Slices/genreSlice/genreSlice";
import genresFilterReducer from "../Slices/genreFilterSlice/genreFilterSlice";

const store = configureStore({

    reducer: {

        movie: movieReducer,
        oneMovie: oneMovieReducer,
        genre: genresReducer,
        genreFilter: genresFilterReducer
    }
});

export default store