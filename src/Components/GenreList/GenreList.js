import React from 'react';
import {NavLink} from "react-router-dom";

import genreList from "./genreList.css"

const GenreList = ({genre: {id, name}}) => {


    return (
        <div className={'genre-list'}>
            <strong>
                <NavLink to={id.toString()}>
                    {name}
                </NavLink>
            </strong>
        </div>
    );
};

export default GenreList;