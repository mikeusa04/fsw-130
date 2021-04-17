/* REDUX IN REACT
use redux to:
Display an initial count.
Display a button whose onclick action will be to increment or decrement the counter using Redux.
Each button click should update the initial count.

to install redux:
npm install redux react-redux --save then hit enter*/


import Counter from "./Counter"
import './App.css';
import { createStore } from "redux";
import { Provider } from "react-redux";

const initialState = {
  count: 0
};
function reducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1
      };
    case "DECREMENT":
      return {
        count: state.count - 1
      };
    default:
      return state;    
  }
}
const store = createStore(reducer);
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Counter />
      </div>
    </Provider>
  );
}

export default App;
