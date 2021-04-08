/*import React,{useState} from "react"
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
