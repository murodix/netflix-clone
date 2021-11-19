const API_KEY = "10dc4a62212a5fb4c1cd9a7c0210948a";

const MovieCategories = [{
    title: "Popular on Netflix",
    url: `movie/popular?api_key=${API_KEY}&language=en-US`
},
{
    title: "Trending Now",
    url: `trending/all/day?api_key=${API_KEY}`
},
{
    title: "New Releases",
    url: `movie/now_playing?api_key=${API_KEY}&language=en-US`
},
{
    title: "Top in the U.S today",
    url: `movie/top_rated?api_key=${API_KEY}&language=en-US`
},
{
    title: "Action Movies",
    url: `discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28`
},
{
    title: "Horror Movies",
    url: `discover/movie?api_key=${API_KEY}&language=en-US&with_genres=27`
}];

export default MovieCategories;