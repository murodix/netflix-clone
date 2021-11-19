import useFetchMovies from '../../hooks/useFetchMovies';
import './movieList.scss';
import { HiPlay, HiPlusCircle, HiThumbUp, HiThumbDown } from 'react-icons/hi'

const MovieList = ({ category, requestURL }) => {

    const [movies, setMovies] = useFetchMovies(requestURL);

    const BASE_URL = "https://image.tmdb.org/t/p/w1280";

    return (
        <div className="movieList">
            <h1 className="movieList__title">{category}</h1>
            <div className="movieList__container">
                {movies?.map((movie) => {
                    return (
                        <div key={movie.id} className="movie">
                            <div className="movie__content">
                                <div className="icons-container">
                                    <HiPlay title="" className="movie__button"></HiPlay>
                                    <HiPlusCircle title="Add to my list" className="movie__button"></HiPlusCircle>
                                    <HiThumbUp title="I like this" className="movie__button"></HiThumbUp>
                                    <HiThumbDown title="No for me" className="movie__button"></HiThumbDown>
                                </div>
                            </div>
                            <img src={`${BASE_URL}${movie.backdrop_path}`} alt={movie.title || movie.name} className="movie__image" />
                        </div>)
                })}

            </div>
        </div>
    )
}

export default MovieList
