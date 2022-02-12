import React from 'react';
import {NavLink} from "react-router-dom";

const GenreList = ({genre: {id, name}}) => {


    return (
        <div>
            <NavLink to={id.toString()}>
                {name}
            </NavLink>

        </div>
    );
};

export default GenreList;