import { TMDB_NO_POSTER_URL, TMDB_RESTRICTED_X18 } from './TMDB';
import './FilmRow.css';

export default function FilmRow({adult, imgURL, title, year, handleSelectFilm, handleAddOrRemoveFavFilm, isInFavFilms, posterBaseURL}) {

    return(
        <div className="FilmRow">
            <button className='btn_select_film'>
                { imgURL === null 
                    ?
                        <img src={TMDB_NO_POSTER_URL} alt='Poster Not Available'/> 
                    :
                        <img src={posterBaseURL+imgURL} alt="{film title} film poster" />
                }
            </button>
            
            <div className="film-summary">
                <h3>{title}</h3>
                <p>{year}</p>
                {adult && <img className="rating_18x" src={TMDB_RESTRICTED_X18} alt='Restrict 18+'/>}
                <div className="actions">                    
                    <button className="action"
                        onClick={handleAddOrRemoveFavFilm}
                    >
                        <span className="material-icons">{isInFavFilms ? 'remove_from_queue' : 'add_to_queue' }</span>
                    </button>
                    <button className="action"
                        onClick={handleSelectFilm}
                    >
                    <span className="material-icons">read_more</span>
                    </button>                    
                </div>

            </div>
        </div>
    )
}