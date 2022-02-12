import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {getById} from "../../Slices";
import {imageUrl500} from "../../Urls";

const MovieInfo = () => {

    const {movieOne} = useSelector(store => store.oneMovie);
    const {
        backdrop_path,
        original_title,
        overview,
        release_date,
        vote_average,
        vote_count
    } = movieOne;

    const {id} = useParams();
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getById(id))
    },[])

    return (
        <div>
            <h1>{original_title}</h1>
            <div><img src={imageUrl500 + backdrop_path} alt="poster"/></div>
            <div>{overview}</div>
            <div><strong>Release_date:</strong> {release_date}</div>
            <div><strong>Vote_average:</strong> {vote_average}</div>
            <div><strong>Vote_count:</strong> {vote_count}</div>
        </div>
    );
};

export default MovieInfo;