import useFetchMovies from '../../hooks/useFetchMovies';
import Movie from '../movie/Movie';
import './movieList.scss';

const MovieList = ({ category, requestURL }) => {

    const [movies, setMovies] = useFetchMovies(requestURL);

    return (
        <div className="movieList">
            <h1 className="movieList__title">{category}</h1>
            <div className="movieList-wrapper">
                <div className="movieList__container">
                    {movies?.map((movie) => {
                        return (<Movie movie={movie}></Movie>)
                    })}

                </div>
            </div>
        </div>
    )
}

export default MovieList
