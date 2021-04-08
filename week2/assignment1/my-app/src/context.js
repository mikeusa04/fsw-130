import React, {Component} from "react"
const {Provider, Consumer} = React.createContext()

class ContextProvider extends Component {
    state = {
        movies: []
    }
    
    addMovie = (newItem) => {
        this.setState({
            movies: [...this.state.movies, newItem]
        })
    }
    
    render() {
        return (
            <Provider value={{movies: this.state.movies, addMovie: this.addMovie}}>
                {this.props.children}
            </Provider>
        )
    }
}

export {ContextProvider, Consumer as ContextConsumer}

