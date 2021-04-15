const redux = require("redux")

function changeCount(amount = 1) {
    return {
        type: "CHANGE_COUNT",
        payload: amount
    }
}

function addFavoriteThing(thing) {
    return {
        type: "ADD_FAVORITE_THING",
        payload: thing
    }
}

function removeFavoriteThing(thing) {
    return {
        type: "REMOVE_FAVORITE_THING",
        payload: thing
    }
}

const initialState = {
    count: 0,
    favoriteThings: []
}

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
        case "REMOVE_FAVORITE_THING": { // the curly braket here and the closing one, we could use them if we have more than
            //  one arrCopy=[...] otherwise we have to name each one differently for ex arrCopy1=[...], arrCopy2=[..]...etc
            // we could use  const arrCopy = [...state.favoriteThings]
            
            const updatedArr = state.favoriteThings.filter(thing => thing.toLowerCase() !== action.payload.toLowerCase())
            return {
                ...state,
                favoriteThings: updatedArr
            }
        
        }
        case "REMOVE_FAVORITE_THING":
            const updatedArr = state.favoriteThings.filter(thing => thing !== action.payload)
            return {
                ...state,
                favoriteThings: updatedArr
            }
        
        default:
            return state
    }
}

const store = redux.createStore(reducer)
store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(addFavoriteThing("Raindrops on roses"))
store.dispatch(addFavoriteThing("Whiskers on kittens"))

/**
 * Challenge: implement an action creator called `removeFavoriteThing` which takes the string
 * of the favorite thing you want to remove from the array and removes it
 */
store.dispatch(removeFavoriteThing("raindrops on roses"))
store.dispatch(removeFavoriteThing("Raindrops on roses"))

/* the explaination of 

case "REMOVE_FAVORITE_THING":
            const updatedArr = state.favoriteThings.filter(thing => thing !== action.payload)
            return {
                ...state,
                favoriteThings: updatedArr
            }

it means go through the things or names in our example and if u find the thing(name) is not equal to the actio.payload
which is the action.payload is the (Raindrops on roses) take it out and put it in new array which is the updatedArr.
so if we run the program before the remove function we will see that we have an array of ["Whiskers on kittens", "Raindrops on roses"]
and when u make the remove function and want to remove ("Raindrops on roses") the dispatch will send this to the action
aso the (thing) in the action is the parameter which is ("Raindrops on roses") and the payload=thing it means paload="Raindrops on roses"
and when we come to excute the filter method it's gonna be like go on each name in the array and if the name "Raindrops on roses"
is not "Raindrops on roses" in the action.payload which is "Raindrops on roses" which is the same but "Whiskers on kittens" is NOT
so go ahead and put that thing or name or "Whiskers on kittens" in the updatedArr because as we said "Whiskers on kittens"
is NOT "Raindrops on roses".           
*/