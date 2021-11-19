import { useEffect, useState } from 'react';
import './billboard.scss';
import getBillboardMovie from '../../utils/TheMovieDb';

const Billboard = () => {
    const [billboard, setBillboard] = useState(null);

    useEffect(() => {
        getBillboardMovie().then((movie) => {
            setBillboard(movie);
        });
    }, [setBillboard])


    return (
        <div className="billboard" style={{ backgroundImage: billboard ? `url("https://image.tmdb.org/t/p/w1280/${billboard.backdrop_path}")` : "" }}>
            <div className="billboard__gradient">
                <div className="billboard__container">
                    <h1 className="billboard__title">
                        {billboard?.title || billboard?.name}
                    </h1>
                    <h4 className="billboard__synopsis">{billboard?.overview}</h4>
                    <div className="billboard__buttons">
                        <button className="button billboard__play">Play</button>
                        <button className="button billboard__moreInfo">More info</button>
                    </div>

                </div>
            </div>
            <div className="vignette"></div>
        </div>
    )
}

export default Billboard
