const redux = require("redux")
const {combineReducers, createStore} = redux
const {tvShowReducer} = require("./tvShows")
const {movieReducer} = require("./movies")

const rootReducer = combineReducers({
    TVShows: tvShowReducer,
    Movies: movieReducer
})

const store = createStore(rootReducer)
store.subscribe(() => {
    console.log(store.getState())
})

module.exports = store