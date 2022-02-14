import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {NavLink, useParams} from "react-router-dom";

import {getById} from "../../Slices";
import {imageUrl500} from "../../Urls";
import Collection from "../../Collection/Collection";
import genremovieinfo from './genremovieinfo.css'

const MovieInfo = () => {

    const {movieOne} = useSelector(store => store.oneMovie);
    const {
        backdrop_path,
        original_title,
        overview,
        release_date,
        vote_average,
        vote_count,
        genres
    } = movieOne;

    const {id} = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getById(id))
    }, [])

    return (

        <div className={'genre-movie-full'}>
            <div className={'genre-movie-info'}>

                <h1>{original_title}</h1>

                <div className={'genre-movie-img'}><img src={imageUrl500 + backdrop_path} alt="poster"/></div>
                <div className={'genre-movie-over'}><strong>{overview}</strong></div>
            </div>

            <div className={'genre-movie-page'}>
                <div>
                    <div><strong>Release_date:</strong> {release_date}</div>
                    <div><strong>Vote_average:</strong> {vote_average}</div>
                    <div><strong>Vote_count:</strong> {vote_count}</div>
                </div>

                <div>
                    {genres && genres.map(value => <div> ganre - {value.name} </div>)}
                </div>
            </div>

            <div className={'genre-movie-btn'}>

                <a href={Collection}> {Collection}</a>

                <NavLink to={'/'}>
                    <button>Back</button>
                </NavLink>

            </div>
        </div>
    );
};

export default MovieInfo;