import axios from "axios";

import baseURL from "../../Urls/movi.urls/movi.urls";

export const axiosService = axios.create({
    baseURL
})