import { Link } from "react-router-dom"
import "./HomePage.css"

export default function HomePage() {
    return (
    <div className="navbar">
        <div className="logo">Friday Night Films</div>

        <ul className="nav-links">

        <input type="checkbox" id="checkbox_toggle" />
        <label htmlFor="checkbox_toggle" className="hamburger">&#9776;</label>

        <div className="menu">

            <li><Link to='/'>Home</Link></li>
            
            <li className="services">
            <Link to='/films'>Movies</Link>
            <ul className="dropdown">
                <li><Link to='/films/popular'>Popular</Link></li>
                <li><Link to='/films/nowplaying'>Now Playing</Link></li>
                <li><Link to='/films/upcoming'>Upcoming</Link></li>
                <li><Link to='/films/toprated'>Top Rated</Link></li>                
            </ul>

            </li>

            <li><Link to='/tvshows'>TV Shows</Link></li>
            <ul className="dropdown">
                <li><Link to='/tvshows/popular'>Popular</Link></li>
                <li><Link to='/tvshows/airingtoday'>Airing Today</Link></li>
                <li><Link to='/tvshows/ontv'>On TV</Link></li>
                <li><Link to='/tvshows/torated'>Top Rated</Link></li>                
            </ul>

            <li><Link to='/people'>People</Link></li>
            <ul className="dropdown">
                <li><Link to='/people/popularpeople'>Popular People</Link></li>
            </ul>

            <li><Link to='/about'>About</Link></li>

        </div>
        </ul> 
    </div>
  )
}