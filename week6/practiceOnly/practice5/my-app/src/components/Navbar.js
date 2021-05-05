import React from "react"
import { Link } from "react-router-dom"

function NavBar() {

    return (
        <div className='navbar'>
            <span className='navlink'>
                <Link to="/">Home</Link>
                
            </span>
            <span className='navlink'>
                <Link to="/tvshows">TV Shows</Link>
            </span>
            <span className='navlink'>
                <Link to="/movies">Movies</Link>
            </span>
        </div>
    )
}

export default NavBar