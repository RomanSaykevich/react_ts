import React from 'react';
import {Route, Routes} from "react-router-dom";

import MoviePage from "./Pages/MoviePage/MoviePage";
import Collection from "./Collection/Collection";
import MovieInfo from "./Components/MovieInfo/MovieInfo";
import GenrePage from "./Pages/GenrePage/GenrePage";
import GenreFilterPage from "./Pages/GenreFilterPage/GenreFilterPage";
import GenreMovieInfo from "./Components/GenreMovieInfo/GenreMovieInfo";
import appp from "./appp.css"

const App = () => {

    return (

        <div className={'app-cc'}>

            <Routes>

                <Route path={'/'} element={<Collection/>}>
                    <Route path={'movie'} element={<MoviePage/>}/>
                    <Route path={'/movie/:id'} element={<MovieInfo/>}/>

                    <Route path={'genres'} element={<GenrePage/>}>
                        <Route path={'/genres/:id'} element={<GenreFilterPage/>}/>
                        <Route path={'/genres/:id/:id'} element={<GenreMovieInfo/>}/>
                    </Route>

                </Route>

            </Routes>

        </div>
    );
};

export default App;