import React from 'react';
import MoviePage from "./Pages/MoviePage/MoviePage";
import {Route, Routes} from "react-router-dom";
import Collection from "./Collection/Collection";
import MovieInfo from "./Components/MovieInfo/MovieInfo";
import GenrePage from "./Pages/GenrePage/GenrePage";
import GenreFilterPage from "./Pages/GenreFilterPage/GenreFilterPage";


const App = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Collection/>}>
                    <Route path={'/movie'} element={<MoviePage/>}/>
                    <Route path={':id'} element={<MovieInfo/>}/>
                    <Route path={'/genres'} element={<GenrePage/>}>
                        <Route path={':id'} element={<GenreFilterPage/>}>
                            <Route path={':id'} element={<MovieInfo/>}/>
                        </Route>
                    </Route>

                </Route>
            </Routes>


        </div>
    );
};

export default App;