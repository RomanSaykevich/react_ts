import React from 'react';

import {imageUrl300} from "../../Urls";
import {NavLink} from "react-router-dom";

const MovieList = ({movie}) => {


    const{id,poster_path, original_title, vote_average} = movie

    return (
        <div>
            <NavLink to={id.toString()} state={movie}>

                <div><img src={imageUrl300 + poster_path} alt="photo"/></div>

            <div>

                    <div>{original_title}</div>
                    <div>{vote_average}</div>

            </div>
            </NavLink>
        </div>
    );
};

export default MovieList;