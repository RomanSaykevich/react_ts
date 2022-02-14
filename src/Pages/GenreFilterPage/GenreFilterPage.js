import React, {useCallback, useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {getGenresFilterById} from "../../Slices";
import MovieList from "../../Components/MoviesList/MovieList";
import genreFilterPage from "./genreFilterPage.css"

const GenreFilterPage = () => {

    const {id} = useParams();

    const {results} = useSelector(store => store.genreFilter.genreFilter);

    const page = useSelector(store => store.genreFilter.page)

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getGenresFilterById({id, page}));
    }, [id]);

    const submitBack = useCallback(() => {
        dispatch((getGenresFilterById({id, page: page - 1})))
    }, [page]);

    const submitNext = useCallback(() => {
        dispatch((getGenresFilterById({id, page: page + 1})))
    }, [page]);

    return (

        <div className={'genre-filter-page-full'}>
            <div className={'genre-filter-page'}>
                <div className={'genre-filter-page1'}>

                {results && results.map(movie => <MovieList key={movie.id} movie={movie}/>)}

                </div>
            </div>

            <div className={'genre-filter-page-btn'}>
                <button onClick={submitBack} className={'btn-genre'}> Back</button>
                <button onClick={submitNext} className={'btn-genre'}> Next</button>
            </div>

        </div>
    );
};

export default GenreFilterPage;