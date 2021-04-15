/* install redux
1. npm install --save redux
2. run the program in the terminal by typing
3. node index.js hit enter
to make easier and to watch all changes rightaway without keep running node index.js every time
install nodemon
1. npm i nodemon
2 to  run the program type
3. nodemon index.js 
*/


const redux = require("redux")

function increment() {
    return {
        type: "INCREMENT"
    }
}

function decrement() {
    return {
        type: "DECREMENT"
    }
}

function reducer(state = {count: 0}, action) {
    // return new state based on the incoming action.type
    switch(action.type) {
        case "INCREMENT":
            return {
                count: state.count + 1
            }
        case "DECREMENT":
            return {
                count: state.count - 1
            }
        default:
            return state
    }
}

const store = redux.createStore(reducer)
store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(increment())
store.dispatch(increment())
store.dispatch(increment())
store.dispatch(decrement())
store.dispatch({type:"WEIRD"})





/* or this way is the same above
const redux = require("redux")
const initialState = {
    count: 0
}

function reducer(state=initialState, action) {
    switch(action.type) {
        case "INCREMENT":
            return {
                count: state.count + 1
            }
        case "DECREMENT":
            return {
                count: state.count - 1
            }
        default:
            return state
    }
}

const store = redux.createStore(reducer)

store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch({type: "INCREMENT"})
store.dispatch({type: "INCREMENT"})
store.dispatch({type: "DECREMENT"})*/