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

function changeCount(amount = 1) { // the 1 here is a default we added we can keep it (amount) only but then we have to 
    return {                      // put some number in the bottom store.dispatch(changeCount(-4))
        type: "CHANGE_COUNT",
        payload: amount
    }
}

function reducer(state = {count: 0}, action) {
    switch(action.type) {
        case "CHANGE_COUNT":
            return {
                count: state.count + action.payload
            }
        default:
            return state
    }
}

const store = redux.createStore(reducer)
store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(changeCount())