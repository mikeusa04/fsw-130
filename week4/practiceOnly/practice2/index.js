const redux = require("redux")

//action1
function changeCount(amount = 1) {
    return {
        type: "CHANGE_COUNT",
        payload: amount
    }
}

//action2
function addFavoriteThing(thing) {
    return {
        type: "ADD_FAVORITE_THING",
        payload: thing
    }
}

//initializing state
const initialState = {
    count: 0,
    favoriteThings: []
}


//reducer to change the state
function reducer(state = initialState, action) {
    switch(action.type) {
        case "CHANGE_COUNT":
            return {
                ...state,
                count: state.count + action.payload
            }
        case "ADD_FAVORITE_THING":
            return {
                ...state,
                favoriteThings: [...state.favoriteThings, action.payload]
            }
        default:
            return state
    }
}

//creating store
const store = redux.createStore(reducer)
store.subscribe(() => {
    console.log(store.getState())
})

//dispatcher
store.dispatch(changeCount(2))
store.dispatch(addFavoriteThing("Raindrops on roses"))
store.dispatch(addFavoriteThing("Whiskers on kittens"))