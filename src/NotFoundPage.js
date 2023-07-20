import { Link } from "react-router-dom"
import "./NotFoundPage.css"

export default function NotFoundPage () {
    return (
        <div className="not_found_page">
            <h1>404 Page not found</h1>
            <p>Uh oh, that page doesn't exist.</p>
            <p>Click <Link to='/'>here</Link> to return to home page.</p>
        </div>
    )
}