import React, {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";


import {getAllMovies} from "../../Slices";
import MovieList from "../../Components/MoviesList/MovieList";
import {Outlet} from "react-router-dom";

const MoviePage = () => {

    const {results} = useSelector(store => store.movie.movies);

    const page = useSelector(store => store.movie.page);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(
            getAllMovies(page)
        )
    }, []);

    const submitBack = useCallback(() => {
        dispatch(
            getAllMovies(page - 1)
        )
    }, []);

    const submitNext = useCallback(() => {
        dispatch(
            getAllMovies(page + 1)
        )
    }, []);

    return (
        <div>
            <div>


                {results && results.map(movie => <MovieList key={movie.id} movie={movie}/>)}
                <button onClick={submitBack}> Back</button>
                <button onClick={submitNext}> Next</button>
            </div>
            
        </div>
    );
};

export default MoviePage;