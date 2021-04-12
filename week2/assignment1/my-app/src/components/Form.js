import React, {Component} from 'react'
import {ContextConsumer} from '../context'

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            movies: []
        }
    }

    addItem(e){
        e.preventDefault();
        //const {movies} = this.state;
        const newItem = this.newItem.value;

        this.setState({
            movies: [...this.state.movies, newItem]
        })
        console.log(this.state.movies)
    }

    render() {
        return (
        <ContextConsumer> 
        {context => (
        <div>
        <form onSubmit={(e) => {this.addItem(e)}}>
            <input
            className="input" 
            ref={input => this.newItem = input} 
            type="text" 
            placeholder="movie" 
            id="newItem"
            />
            <button type="submit">Add</button>
        </form>
        <ul>{
          this.state.movies.map(movie => 
          <li key={movie} style={{listStyle: "none"}}>{movie}</li>
        )}
        </ul>
        </div>)}
        </ContextConsumer>
        )
    }
}

export default Form