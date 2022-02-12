import React from 'react';
import {NavLink, Outlet} from "react-router-dom";

const Collection = () => {
    return (
        <div>
            <div>
                <h2>
                    <NavLink to={"/genres"}>
                        <button>Genres</button>
                    </NavLink>
                    <NavLink to={"/movie"}>
                        <button>Movie</button>
                    </NavLink>
                </h2>
                <Outlet/>
            </div>
        </div>
    );
};

export default Collection;