import { TMDB_NO_IMAGE_URL, TMDB_NO_POSTER_URL, TMDB_RESTRICTED_X18 } from './TMDB'
import './FilmDetail.css'

function FilmDetail({filmDetailEmpty, adult, title, tagline, overview, poster_path, posterBaseURL, backdrop_path, backdropBaseURL}) {
    
  return (
    // Check if there is no film selected, then call FilmDetailEmpty(). Otherwise, show the film details
    filmDetailEmpty
      ?
        FilmDetailEmpty()
      :
      <div className="FilmDetail is-hydrated">
        <figure className="film-backdrop">
          { backdrop_path === null
            ?
              <img src={TMDB_NO_IMAGE_URL} alt='Backdrop Not Available'/>
            :
              <img src={backdropBaseURL+backdrop_path} alt={title} />
          }

          
          <h1 className="film-title">{title}</h1>
        </figure>        
      <div className="film-meta">        
        <p className="film-tagline">{tagline}</p>
        <p className="film-detail-overview">
          { poster_path === null
            ?
              <img src={TMDB_NO_POSTER_URL} className="film-detail-poster" alt="Poster Not Available"/>
            :
              <img src={posterBaseURL+poster_path} className="film-detail-poster" alt={title} />
          }          
          {overview} {adult && <img className="rating_18x" src={TMDB_RESTRICTED_X18} alt='Restricted 18+'/>}
        </p>
      </div>
      </div>
    
  )
}

function FilmDetailEmpty() {
  return (
    <div className="FilmDetail">
    <p>
      <i className="material-icons">subscriptions</i>
      <span>No film selected</span>
    </p>

  </div>
  )
}

export default FilmDetail