/*Requirements:
Must use Redux for State Management
Must create 2 reducers, one for TV shows and one for Movies
Must use React to display the data being managed by Redux
Must use React Router Dom to have at least 2 separate pages to present the tv show and movie data.
Must be fully styled and responsive.
Must have had collaborative work from all parties involved, this will be tracked through the new repository you created on Github.

install react
1. npx create-react-app my-app
install redux
1. npm install redux react-redux --save
install Router
1. npm i react-router-dom
install redux-thunk
1. npm install redux-thunk --save
*/



import React from 'react'
import { Switch, Route } from "react-router-dom"
import NavBar from "./components/Navbar"
import Home from './pages/Home'
import TvShows from './pages/TvShows'
import Movies from './pages/Movies'
import './App.css';

function App() {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route path="/tvshows" component={TvShows}></Route>
                <Route path="/movies" component={Movies}></Route>
            </Switch>
        </div>
    )
}

export default App