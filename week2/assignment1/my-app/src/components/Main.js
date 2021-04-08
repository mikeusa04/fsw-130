import React,{useState} from "react"

function Main(props) {
  const [movies,setMovies]=useState([
    {id:1, name:'Braveheart'},
    {ide:2, name:'Star Wars'},
    {id:3, name:'The Godfather'},
  ]);

  return (
    <div>
      <h1>Movies</h1>
      <ul>{
        props.movies.map(movie => 
          <li key={movie}>{movie}</li>
        
        )}
      </ul>
    </div>
  )
}
export default Main;
