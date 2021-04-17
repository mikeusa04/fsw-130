/*Create a plain JavaScript application using Redux for state management
The state you will maintain is in 2 parts:
Movies
TV Shows
You will create a separate reducer and action creators for each.
Use Combine Reducers to create your store out of both reducers.
The following actions should be dispatched.
Add a Movie and Add a TV show
Delete a Movie and Delete a TV show
Get all Movies and Get all TV shows
Remember that since you will be creating this in Node and not Scrimba, you will need to use 
require() and module.exports to import/export your files just like import and export default.

install redux
1. npm install --save redux
2. run the program in the terminal by typing
3. node index.js hit enter
to make easier and to watch all changes rightaway without keep running node index.js every time
install nodemon
1. npm i nodemon
2 to  run the program type
3. nodemon index.js
*/



const store = require("./redux/store")
const {addMovie, removeMovie, getMovie} = require("./redux/movies")
const {addTvShow, removeTvShow, getTvShow} = require("./redux/tvShows")


store.dispatch(addMovie("Superman"))
store.dispatch(addMovie("Braveheart"))
store.dispatch(addMovie("The God Father"))

store.dispatch(addTvShow("North Park"))
store.dispatch(addTvShow("Game Of Throan"))
store.dispatch(addTvShow("Sex In The City "))

store.dispatch(removeMovie("Superman"))

store.dispatch(removeTvShow("Game of Throan"))

store.dispatch(getMovie())

store.dispatch(getTvShow())