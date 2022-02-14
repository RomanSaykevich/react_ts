import {NavLink} from "react-router-dom";

import {imageUrl300} from "../../Urls";
import movieList from "./movieList.css"

const MovieList = ({movie}) => {

    const {id, poster_path, original_title, vote_average} = movie

    return (
        <div className={'movie-list-full'}>
            <NavLink to={id.toString()} state={movie}>

                <div className={'movie-list-img'}><img src={imageUrl300 + poster_path} alt="photo"/></div>

                <div>
                    <div className={'movie-list-text'}>
                        <div>{original_title}</div>
                        <div className={'movie-list-text1'}>{vote_average}</div>
                    </div>

                </div>

            </NavLink>

        </div>
    );
};

export default MovieList;