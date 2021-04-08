/*You are going to build a React app that manages an array of objects (Ex: an array of movies, TV shows, animals, etc.) in context state.
Provide that state to your application and map out the array to the DOM.
Ex: If you do movies, the array of movies should appear on the webpage when the page loads
Create a method in context that allows you to add a new item to the array, then build the appropriate components that will use that method, (you will need to build a form component that consumes your context for this method)
When you add a new item through the form, it should be added to the array in context state and appear on the webpage with the rest of the initial data.
Fully style this webpage and make it responsive.
Requirements
Website displays an array of data that is managed using context.
Fully styled in CSS and responsive
You can add a new item to the array using a form




import React,{useState} from "react"
import './App.css';

function App() {
  const [movies,setMovies]=useState([
    {id:1, name:'Braveheart'},
    {ide:2, name:'Star Wars'},
    {id:3, name:'The Godfather'},
  ]);

  return (
    <div className="App">
      <Form />
      <h1>Movies</h1>
      <ul>{
        movies.map(movie => (
          <li key={movie.id}>{movie.name}</li>
        )
        )}
      </ul>
    </div>
  )
}
export default App;*/


import React, {Component} from 'react'
import Form from './components/Form'
import './App.css'


class App extends Component {
  render() {
    return (
        <div className="App">
           <Form />
        </div>
    )
  }
}
 export default App
