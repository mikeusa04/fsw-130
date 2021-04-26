/*Requirements:
Must use Redux for State Management
Must create 2 reducers, one for TV shows and one for Movies
Must use React to display the data being managed by Redux
Must use React Router Dom to have at least 2 separate pages to present the tv show and movie data.
Must be fully styled and responsive.
Must have had collaborative work from all parties involved, this will be tracked through the new repository you created on Github.

install redux
1. npm install redux react-redux --save
install Router
1. npm i react-router-dom
install redux-thunk
1. npm install redux-thunk --save
install react-redux-form
1. npm install react-redux-form
*/




import React from "react"
import { Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Movies from './components/Movies'
import TV from './components/TV'

function App() {
  return (
    <div>
      <Navbar />      
      <Switch>
      <Route 
          path="/movies"
          render={() => <Movies />}
        />
        <Route 
          path="/tv"
          render={() => <TV />}
        />
      </Switch>
    </div>
  
  )
}
        

export default App