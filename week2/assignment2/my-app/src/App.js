/*You are going to build a React app that allows a user to post things that they think are ugly. The data of ugly things should be managed by React Context.
Requirements
Must have 3 input fields:
Img url field (A url to an image of an ugly thing)
Title field (The title of the image that the user wants to give)
Description field (why the user thinks it is ugly)
Must have Submit button that submits the data
Must display a list of posted images with their associated titles and descriptions
Must store the array of ugly thing objects in the Context store
Must be able to delete an ugly thing
Must be able to edit an ugly thing
Have 3 images horizontally on each row
Allow each image to have one or more user-submitted comments
Allow the ability to delete specific comments
*/




import React from 'react';
import './App.css';
import {ContextConsumer} from './ToDoContext'

class App extends React.Component {
  state = {
    toDo: {title: "", image: "", description: ""}
  }

  handleChange = (e) => {
    const {name, value} = e.target
    this.setState({[name]: value})
  }

  render() {
    return(
      <div>
        <h1 className="title">Ugly Things</h1>
        <ContextConsumer>
          {({toDos, addToDo}) => (
        <main>
        <input
          className="input"
          type="text"
          name="image"
          placeholder="Image"
          value={this.state.image}
          onChange={this.handleChange}
        />
        <input
          className="input"
          type="text"
          name="title"
          placeholder="Title"
          value={this.state.title}
          onChange={this.handleChange}
        />
        <input
          className="input"
          type="text"
          name="description"
          placeholder="Why it is ugly?"
          value={this.state.description}
          onChange={this.handleChange}
        />
        <br></br>
        <button onClick={() => {
          console.log(this.state)
          this.setState(prevState => ({
          title: "",
          image: "",
          description: ""
        }))
      addToDo({
          title: this.state.title,
          image: this.state.image,
          description: this.state.description
      })}}>Add!</button>
          <br></br>
          <div>
                
          <ul>
            {toDos.map(toDo => 
            (<li style={{listStyle: "none"}}>
            <h2>{toDo.title}</h2>
            <p>{toDo.description}</p>
            <img src={toDo.image}></img>
            </li>))}
          </ul>
                
          </div>
          </main>
          )}
        </ContextConsumer>
      </div>
    )
  }
}

export default App;
