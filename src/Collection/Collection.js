import React from 'react';
import {NavLink, Outlet} from "react-router-dom";

import collection from './collection.css'

const Collection = () => {

    return (

        <div className={'collection-full'}>
            <div className={'collection-cs'}>

                <h2>
                    <div className={'collect-di'}>
                        <div className={'collection-css'}>
                            <NavLink to={"/genres"}>
                                <button className={'btn-css'}>Genres</button>
                            </NavLink>
                        </div>

                        <br/>

                        <div className={'collection-css'}>
                            <NavLink to={"/movie"}>
                                <button className={'btn-css'}>Movie</button>
                            </NavLink>
                        </div>
                    </div>
                </h2>

            </div>

            <Outlet/>

        </div>
    );
};

export default Collection;