import { useState, useEffect } from "react";
import axiosClient from '../utils/AxiosClient';

export default function useFetchMovies(requestUrl) {


    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const request = axiosClient.get(requestUrl).then((res) => {
            const results = res.data.results;
            setMovies(results);
            return results;
        });

        return () => {
            return request;
        }
    }, [requestUrl]);


    return [movies, setMovies];
}