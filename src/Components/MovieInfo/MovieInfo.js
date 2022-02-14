import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {NavLink, useParams} from "react-router-dom";

import {getById} from "../../Slices";
import {imageUrl500} from "../../Urls";
import Collection from "../../Collection/Collection";
import movieInfo from "./movieInfo.css"

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
        <div className={'movie-info'}>
            <h1>{original_title}</h1>

            <div className={'movie-info-img'}><img src={imageUrl500 + backdrop_path} alt="poster"/></div>
            <div className={'movie-info-title'}><h4>{overview}</h4></div>
            <div className={'movie-info-sbor'}>
                <div>
                    <div><strong>Release_date:</strong> {release_date}</div>
                    <div><strong>Vote_average:</strong> {vote_average}</div>
                    <div><strong>Vote_count:</strong> {vote_count}</div>
                </div>
                <div>
                    <div> {genres && genres.map(value => <div> {value.name} </div>)}</div>
                </div>
            </div>

            <div><a href={Collection}> {Collection}</a></div>

            <NavLink to={'/'}>
                <button className={'movie-info-btn'}>Home Page</button>
            </NavLink>
        </div>
    );
};

export default MovieInfo;