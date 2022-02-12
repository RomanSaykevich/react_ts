import {axiosService} from "../axios.service/axios.service";
import {urls} from "../../Urls";



export const genreService = {
    getAll: () => axiosService.get(urls.genres)
        .then(value => value.data),

    getByIdFilter:(id, page) => axiosService.get(urls.genresIdFilter(id, page))
        .then(value => value.data)
}