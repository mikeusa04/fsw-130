import React from "react"
import {connect} from "react-redux"
import {addContact, removeContact, setInputs} from "./redux/store"



function App(props) {    
    const handleChange = (event) => {
        event.preventDefault()
        const {name, value} = event.target
        console.log(props)
        props.setInputs(name, value)
    }
    
    const onclickUpdate = (event) => {
      event.preventDefault()
      props.addContact()
    }

    const onclickDelete = (event, index) => {
      event.preventDefault()
      props.removeContact(index)
    }


    return (
        <div>
            <form className="form">
            <h1>Contact List</h1>

                <input 
                    id="input"
                    type="text" 
                    name="name"
                    value={props.name}                  
                    placeholder="name" 
                    onChange={handleChange} 
                />
                <br />
                <h3>{props.name}</h3>
                <br />

                <input 
                    id="input"
                    type="text"                  
                    name="age"
                    value={props.age}
                    placeholder="How old are you?" 
                    onChange={handleChange} 
                />
                <br />
                <p>{props.age}</p>
                <br />

                <input 
                    id="input"
                    type="text"                  
                    name="phone"
                    value={props.phone}
                    placeholder="phone" 
                    onChange={handleChange} 
                />
                <br />
                <p>{props.phone}</p>
                <br />

                <input 
                    id="input"
                    type="text" 
                    name="email"
                    value={props.email}                  
                    placeholder="email" 
                    onChange={handleChange} 
                />
                <br />
                <p>{props.email}</p>
                <br />
                <button className="submitButton" onClick={onclickUpdate}>Submit</button> 
            </form>            

            {props.contacts.map((contact, index) => 
            <div className="contacts">
                
                <p>Name: {contact.name}</p>
                <p>Age: {contact.age}</p>
                <p>Phone number: {contact.phone}</p>
                <p>Email address: {contact.email}</p>

                <button className="deleteButton" onClick={(event) => onclickDelete (event, index) }>Delete</button>
            </div>
            )}



        </div>
    )
}

export default connect(state => ({contacts: state.contacts, name: state.name, age: state.age, phone: state.phone, email: state.email}), {addContact, removeContact, setInputs})(App)