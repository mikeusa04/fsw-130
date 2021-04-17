function getTvShow() {
    return {
        type: "GET_SHOW"
    }
}

function addTvShow(show) {
    return {
        type: "ADD_SHOW",
        data: show
    }
}

function removeTvShow(show) {
    return {
        type: "REMOVE_SHOW",
        data: show
    }
}

function tvShowReducer(shows = [], action) {
    switch(action.type) {
        case "ADD_SHOW":
            return [...shows, action.data]
        case "REMOVE_SHOW": {
            const updatedArr = shows.filter(show => show.toLowerCase() !== action.data.toLowerCase())
            return updatedArr
        }
        case "GET_SHOW": {
            return shows
        }
        default:
            return shows
    }
}

module.exports = {getTvShow, addTvShow, removeTvShow, tvShowReducer}