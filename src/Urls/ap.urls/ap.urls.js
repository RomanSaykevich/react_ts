import {apKey} from "../key.urls/key.urls";


export const urls = {

        movies: (page) => `/discover/movie?api_key=${apKey}&page=${page}`,

        movieId: (id) => `/movie/${id}?api_key=${apKey}`,

        genres: `/genre/movie/list?api_key=${apKey}`,

        genresIdFilter:(id, page)=>`/discover/movie?&language=uk-UK&api_key=${apKey}&with_genres=${id}&page=${page}`
};
