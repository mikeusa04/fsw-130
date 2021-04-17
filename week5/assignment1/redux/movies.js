function getMovie() {
    return {
        type: "GET_MOVIE",
    }
}

function addMovie(movie) {
    return {
        type: "ADD_MOVIE",
        data: movie
    }
}

function removeMovie(movie) {
    return {
        type: "REMOVE_MOVIE",
        data: movie
    }
}

function movieReducer(movies = [], action) {
    switch(action.type) {
        case "ADD_MOVIE":
            return [...movies, action.data]
        case "REMOVE_MOVIE": {
            const updatedArr = movies.filter(movie => movie.toLowerCase() !== action.data.toLowerCase())
            return updatedArr
        }
        case "GET_MOVIE": {
            return movies
        }
        default:
            return movies
    }
}

module.exports = {getMovie, addMovie, removeMovie, movieReducer}