import { useEffect, useRef, useState } from "react";
import FilmDetail from "./FilmDetail";
import './FilmLibrary.css';
import FilmRow from "./FilmRow";
import {TMDB_API_KEY} from "./TMDB";
import { useParams } from "react-router-dom";

function FilmLibrary() {

  const [posterBaseURL, setPosterBaseURL] =  useState(null)
  const [backdropBaseURL, setBackdropBaseURL] =  useState(null)
  const [selectedAllFilm, setSelectedAllFilm] = useState(null)
  const [selectedFavFilm, setSelectedFavFilm] = useState(null)
  const [favFilms, setFavFilms] =  useState([])
  const [selectAllView, setSelectAllView] = useState(true)
  const [page, setPage]  = useState(1)  
  const [totalFilms, setTotalFilms] = useState(0)
  const [filmTMDB, setFilmTMDB] = useState([])
  const [year, setYear] = useState(()=>{ 
    return new Date().getFullYear()    
  })
  const [hasMore, setHasMore] = useState(true)
  const filmRef = useRef(null)

  const GetFilmFromTMDB = () => {
    
    // Get information from themoviedb.org - set include_adult=false to exclude adult content movies
    const url = `https://api.themoviedb.org/3/discover/movie?page=${page}&primary_release_year=${year}&sort_by=popularity.desc&api_key=${TMDB_API_KEY}&include_adult=true`
    try {      
      fetch(url)
      .then(res => {        
          if (res.ok) {
            res.json()
            .then(res=> {              
              if (res.length === 0) {
                setHasMore(false)                
              } else {
                setFilmTMDB([...filmTMDB, ...res.results])
                setTotalFilms(res.total_results)
                if (page < res.total_pages) setPage(page+1)
              }
            })
          } else {
            // Stop fetching more movies if error occurred (ok === false)
            setHasMore(false)
          }
      })
    } catch (error) {
      console.log("Error while fetching data: ", error)
    }
  }  

  // Trigger when the page reaches the end
  const onIntersection = entries => {    
    const firstEntry = entries[0]    
    if (firstEntry.isIntersecting && hasMore) {
      GetFilmFromTMDB()
    }
  }
  useEffect(()=>{
    
    const obs = new IntersectionObserver(onIntersection)
    if (obs && filmRef.current) {
      obs.observe(filmRef.current)
    }

    return () => {
      if (obs) {
        obs.disconnect()
      }
    }
  }, [filmTMDB, selectAllView])

  const handleAddOrRemoveFavFilm = (idAddOrRemove) => {

    // Find the film id to decide add or remove
    if (favFilms.length > 0 && favFilms.find((favFilm)=> favFilm.id === idAddOrRemove)) {
      setFavFilms(favFilms.filter((favFilm) => favFilm.id !== idAddOrRemove))
    } else {      
      setFavFilms(favFilms=>[...favFilms,...filmTMDB.filter(film=>film.id === idAddOrRemove)])
    }    
  }

  const handleChangeFilmView = isAll => {

    //Only change if user clicks on different category view
    if (selectAllView !== isAll) {
      setSelectAllView(isAll)
    }    
  }

  const handleSelectFilm = filmID => {
    const url=`https://api.themoviedb.org/3/movie/${filmID}?api_key=${TMDB_API_KEY}`

    try {
      fetch(url)
        .then(res => {          
          if (res.ok) {
            res.json()
            .then( res => {              
              selectAllView ? setSelectedAllFilm(res) : setSelectedFavFilm(res)
            }).catch(err => { console.log('Error while fetching data:', err)})
          } else {
            console.log(res)
          }
        })
    } catch(error) {
      console.log("Error code: ", error.status)
    }
    
    
  }
  
  const handleYearChange = (event) => {    
    if (event.target.value > 1900 && event.target.value <= new Date().getFullYear()) {
      setYear(event.target.value)
      setFilmTMDB([])
      setPage(1)
    }
      
  }
  
  const getTMDBConfig = () => {
    const url=`https://api.themoviedb.org/3/configuration?api_key=${TMDB_API_KEY}`
    try {
      fetch(url)
      .then(res => {
        if (res.ok) {
          res.json()
          .then( res => {            
            setBackdropBaseURL(res.images.secure_base_url+res.images.backdrop_sizes[2])
            setPosterBaseURL(res.images.secure_base_url+res.images.poster_sizes[5])
          })
        }
      })
    } catch(error) {
      console.log(error)
    }
  }
  
  // Trigger when DidMount
  useEffect(()=>getTMDBConfig,[])

  // Process the URL to get filmID, return undefined if no filmID passed through URL
  const param = useParams()  
  if (param !== undefined && param.filmID !== undefined) {
    // Only proceed when user did not click over the FAVES tab.
    selectAllView &&  handleSelectFilm(param.filmID) 
  }
  return (
    TMDB_API_KEY
    ?
    <div className="FilmLibrary">
      <div className="film-list">
        <h1 className="section-title">MOST POPULAR 
          <input className="input_year" 
              type="number" 
              min={1900}
              value={year} 
              onChange={handleYearChange}
          /> FILMS ({new Intl.NumberFormat('en-IN').format(totalFilms)}) </h1>
        <div className="film-list-filters">
          <button className={selectAllView ? 'film-list-filter is-active' : 'film-list-filter'}
                  onClick={()=>handleChangeFilmView(true)}
          >
            ALL
            <span className="section-count">{filmTMDB.length}</span>
          </button>
          <button className={selectAllView ? 'film-list-filter' : 'film-list-filter is-active'}
                  onClick={()=>handleChangeFilmView(false)}
          >
            FAVES
            <span className="section-count">{favFilms.length}</span>
          </button>          
        </div>        
        { selectAllView
          ?
            <>
              {filmTMDB.map((film, index) =>          
                <FilmRow key={index}
                    id={film.id}
                    adult={film.adult}
                    imgURL={film.poster_path}
                    title={film.title}
                    year={new Date(film.release_date).getFullYear()}
                    tagline={film.tagline}
                    handleSelectFilm={()=>handleSelectFilm(film.id)}
                    handleAddOrRemoveFavFilm={()=>handleAddOrRemoveFavFilm(film.id)}
                    isInFavFilms={favFilms.find((favFilm)=> favFilm.id === film.id)}
                    posterBaseURL={posterBaseURL}
                />
              )}
              {hasMore && <div ref={filmRef}>Loading data...</div>}
            </>
          :
          favFilms.map((favFilm, index) =>
            <FilmRow key={index}
              id={favFilm.id}
              adult={favFilm.adult}
              imgURL={favFilm.poster_path}
              title={favFilm.title}
              year={new Date(favFilm.release_date).getFullYear()}
              tagline={favFilm.tagline}
              handleSelectFilm={()=>handleSelectFilm(favFilm.id)}
              handleAddOrRemoveFavFilm={()=>handleAddOrRemoveFavFilm(favFilm.id)}
              isInFavFilms={true}
              posterBaseURL={posterBaseURL}
            />          
          )      
        }
        
      </div>

      <div className="film-details">        
        {selectAllView
          ?
            <>              
              <h1 className="section-title">{selectedAllFilm !== null && selectedAllFilm.title}</h1>              
              <FilmDetail                  
                adult={selectedAllFilm !== null && selectedAllFilm.adult}
                title={selectedAllFilm !== null && selectedAllFilm.title}
                tagline={selectedAllFilm !== null && selectedAllFilm.tagline}
                overview={selectedAllFilm !== null && selectedAllFilm.overview}
                poster_path={selectedAllFilm !== null && selectedAllFilm.poster_path}
                posterBaseURL={selectedAllFilm !== null && posterBaseURL}
                backdrop_path={selectedAllFilm !== null && selectedAllFilm.backdrop_path}
                backdropBaseURL={selectedAllFilm !== null && backdropBaseURL}
              />            
            </>            
          :           
            <>
            <h1 className="section-title">{selectedFavFilm !== null && selectedFavFilm.title}</h1>
              <FilmDetail              
                adult={selectedFavFilm !== null && selectedFavFilm.adult}
                title={selectedFavFilm !== null && selectedFavFilm.title}
                tagline={selectedFavFilm !== null && selectedFavFilm.tagline}
                overview={selectedFavFilm !== null && selectedFavFilm.overview}
                poster_path={selectedFavFilm !== null && selectedFavFilm.poster_path}
                posterBaseURL={selectedFavFilm !== null && posterBaseURL}
                backdrop_path={selectedFavFilm !== null && selectedFavFilm.backdrop_path}
                backdropBaseURL={selectedFavFilm !== null && backdropBaseURL}
              />             
          </>}        
      </div>
    </div>
  :
  <h1>No API Key found!</h1>
  );
}

export default FilmLibrary