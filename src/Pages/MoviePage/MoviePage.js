import React, {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getAllMovies} from "../../Slices";
import MovieList from "../../Components/MoviesList/MovieList";
import moviePage from "./moviePage.css"

const MoviePage = () => {

    const {results} = useSelector(store => store.movie.movies);

    const page = useSelector(store => store.movie.page);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllMovies(page));
    }, []);

    const submitPrev = useCallback(() => {
        dispatch((getAllMovies(page - 1)))
    }, [page]);


    const submit = useCallback(() => {
        dispatch((getAllMovies(page + 1)))
    }, [page]);

    return (
        <div className={'movie-page-full'}>
            <div className={'movie-page-full2'}>
                <div>

                    <div className={'movie-page-film'}>
                        {results && results.map(movie => <MovieList key={movie.id} movie={movie}/>)}
                    </div>

                </div>

                <div className={'movie-page-btn'}>
                    <button onClick={submitPrev} className={'btn-page'}>Back</button>
                    <button onClick={submit} className={'btn-page'}>Next</button>
                </div>

            </div>

        </div>
    );
};

export default MoviePage;