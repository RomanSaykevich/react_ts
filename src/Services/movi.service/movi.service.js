import {axiosService} from "../axios.service/axios.service";
import {urls} from "../../Urls";

export const moviesService = {

    getAll: (page) => axiosService.get(urls.movies(page))
        .then(value => value.data),

    getById: (id) => axiosService.get(urls.movieId(id))
        .then(value => value.data),

}