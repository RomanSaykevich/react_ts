import React, {useCallback, useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getGenresFilterById} from "../../Slices";
import MovieList from "../../Components/MoviesList/MovieList";

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
        <div>
            {results && results.map(movie => <MovieList key={movie.id} movie={movie}/> )}

            <button onClick={submitBack}> Back </button>
            <button onClick={submitNext}> Next </button>
        </div>

    );
};

export default GenreFilterPage;