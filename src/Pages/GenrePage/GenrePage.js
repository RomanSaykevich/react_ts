import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Outlet} from "react-router-dom";

import {getAllGenres} from "../../Slices";
import GenreList from "../../Components/GenreList/GenreList";

const GenrePage = () => {

    const {genres} = useSelector(store =>store.genre);
  const dispatch = useDispatch();

    useEffect(()=>{
      dispatch(getAllGenres(genres))
  },[])

    return (
        <div>
            {genres && genres.map(genre =><GenreList key={genre.id} genre={genre}/>)}
            <Outlet/>
        </div>

    );
};

export default GenrePage;