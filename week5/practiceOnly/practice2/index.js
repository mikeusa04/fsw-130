import store from "./redux/index"
import {changeCount} from "./redux/count"
import {addFavoriteThing, removeFavoriteThing} from "./redux/favoriteThings"
import {setYouTubeTitle, incrementViewCount, upvoteVideo, downvoteVideo} from "./redux/youTubeVideo"
import {setUserDetails, removeUserDetails} from "./redux/user"

// to dispatch the user info
store.dispatch(setUserDetails({
    firstName: "Joe",
    lastName: "Schmoe",
    id: 1,
    email: "joe@schmoe.com"
}))
//result is {count: 0, favoriteThings: [], youTubeVideo: {title: "", viewCount: 0, votes: {up: 0, down: 0}}, user: {firstName: "Joe", lastName: "Schmoe", id: 1, email: "joe@schmoe.com"}}

// to dispatch the email only
store.dispatch(setUserDetails({
    email: "joe.schmoe@gmail.com"
}))
//result is {count: 0, favoriteThings: [], youTubeVideo: {title: "", viewCount: 0, votes: {up: 0, down: 0}}, user: {firstName: "Joe", lastName: "Schmoe", id: 1, email: "joe.schmoe@gmail.com"}}

// to dispatch remove
store.dispatch(removeUserDetails())
//result is {count: 0, favoriteThings: [], youTubeVideo: {title: "", viewCount: 0, votes: {up: 0, down: 0}}, user: {}}


/**
 * Challenge:
 * 
 * Create a new state property to hold the currently-logged-in user info. I.e. if our app wanted to allow a user to log in, we would likely want to keep track of some info from the logged in user. For this challenge, you'll save a user with these properties:
 * {
 *      firstName: ___,
 *      lastName: ___,
 *      id: ___,
 *      email: ___
 * }
 * 
 * This will require 
 *      (1) Creating a new file to hold our new Redux stuff re: the user (e.g. user.js),
 *      (2) Creating a new action creator (e.g. "setUserDetails"),
 *      (3) Creating a new reducer, and 
 *      (4) Adding that reducer to our rootReducer with combineReducers
 */

/**
 * Challenge:
 * 
 * 1. Bring in all the action creators we've made so far and dispatch them, just to make sure things are working
 */

store.dispatch(changeCount(42))
store.dispatch(addFavoriteThing("Door bells"))
store.dispatch(addFavoriteThing("Sleigh bells"))
store.dispatch(removeFavoriteThing("door bells"))
store.dispatch(setYouTubeTitle("Learning Redux is Fun!"))
store.dispatch(incrementViewCount())
store.dispatch(upvoteVideo())
store.dispatch(incrementViewCount())
store.dispatch(upvoteVideo())
store.dispatch(incrementViewCount())
store.dispatch(upvoteVideo())
store.dispatch(downvoteVideo())

/*

{count: 42, favoriteThings: [], youTubeVideo: {title: "", viewCount: 0, votes: {up: 0, down: 0}}}

{count: 42, favoriteThings: ["Door bells"], youTubeVideo: {title: "", viewCount: 0, votes: {up: 0, down: 0}}}

{count: 42, favoriteThings: ["Door bells", "Sleigh bells"], youTubeVideo: {title: "", viewCount: 0, votes: {up: 0, down: 0}}}

{count: 42, favoriteThings: ["Sleigh bells"], youTubeVideo: {title: "", viewCount: 0, votes: {up: 0, down: 0}}}

{count: 42, favoriteThings: ["Sleigh bells"], youTubeVideo: {title: "Learning Redux is Fun!", viewCount: 0, votes: {up: 0, down: 0}}}

{count: 42, favoriteThings: ["Sleigh bells"], youTubeVideo: {title: "Learning Redux is Fun!", viewCount: 1, votes: {up: 0, down: 0}}}

{count: 42, favoriteThings: ["Sleigh bells"], youTubeVideo: {title: "Learning Redux is Fun!", viewCount: 1, votes: {up: 1, down: 0}}}

{count: 42, favoriteThings: ["Sleigh bells"], youTubeVideo: {title: "Learning Redux is Fun!", viewCount: 2, votes: {up: 1, down: 0}}}

{count: 42, favoriteThings: ["Sleigh bells"], youTubeVideo: {title: "Learning Redux is Fun!", viewCount: 2, votes: {up: 2, down: 0}}}

{count: 42, favoriteThings: ["Sleigh bells"], youTubeVideo: {title: "Learning Redux is Fun!", viewCount: 3, votes: {up: 2, down: 0}}}

{count: 42, favoriteThings: ["Sleigh bells"], youTubeVideo: {title: "Learning Redux is Fun!", viewCount: 3, votes: {up: 3, down: 0}}}

{count: 42, favoriteThings: ["Sleigh bells"], youTubeVideo: {title: "Learning Redux is Fun!", viewCount: 3, votes: {up: 3, down: 1}}}


*/