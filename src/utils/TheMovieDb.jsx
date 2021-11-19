import axiosClient from './AxiosClient';
import RequestUrls from './RequestUrls';

const getBillboardMovie = () => {
    const request = axiosClient.get(RequestUrls.trendingMovies).then((res) => {
        const randomN = Math.floor(Math.random() * res.data.results.length);
        return res.data.results[randomN];
    });

    return request;
}



export default getBillboardMovie;
