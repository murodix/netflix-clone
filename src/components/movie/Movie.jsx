import React from 'react'
import { HiPlay, HiPlusCircle, HiThumbUp, HiThumbDown } from 'react-icons/hi';
import './movie.scss';

const Movie = ({ movie }) => {
    const BASE_URL = "https://image.tmdb.org/t/p/w1280";
    return (
        <div key={movie.id} className="movie">
            <div className="movie__content">
                <div className="movie__content-wrapper">
                    <div className="icons-container">
                        <HiPlay title="" className="movie__button"></HiPlay>
                        <HiPlusCircle title="Add to my list" className="movie__button"></HiPlusCircle>
                        <HiThumbUp title="I like this" className="movie__button"></HiThumbUp>
                        <HiThumbDown title="No for me" className="movie__button"></HiThumbDown>
                    </div>
                    <div className="movie__title">
                        {movie.title || movie.name}
                    </div>
                </div>

            </div>
            <img src={`${BASE_URL}${movie.backdrop_path}`} alt={movie.title || movie.name} className="movie__image" />
        </div>
    )
}

export default Movie
