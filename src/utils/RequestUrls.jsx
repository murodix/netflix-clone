const API_KEY = "10dc4a62212a5fb4c1cd9a7c0210948a";

const RequestUrls = {
    trendingMovies: `trending/all/day?api_key=${API_KEY}`,
    popularMovies: `movie/popular?api_key=${API_KEY}&language=en-US`,
    topRatedMovie: `movie/top_rated?api_key=${API_KEY}&language=en-US`,
    upcomingMovies: `movie/upcoming?api_key=${API_KEY}&language=en-US`,
    releasesMovies: `movie/now_playing?api_key=${API_KEY}&language=en-US`,
    actionMovies: `discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28`
};

export default RequestUrls;