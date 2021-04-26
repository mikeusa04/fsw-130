import { createStore } from 'redux'

const redux = require("redux")

export function addContact(name) {
    return {
        type: "ADD_CONTACT",
        payload: name
    }
}

export function removeContact(id) {
    return {
        type: "REMOVE_CONTACT",
        payload: id
    }
}

export function setInputs(name, value) {
    return {
        type: "SET_INPUTS",
        payload: {name, value}
    }
}

const initialState ={
    contacts: [], // we could do contacts:[{name: "mike", age: 21, phone: 77777, email: "hi @ yahoo.com"}] to let it show on the page at the begining the we can add to this existing object.
    name: "",
    age: "",
    phone: "",
    email: ""
}

export function reducer(state = initialState, action) {

    switch(action.type) {

        case "ADD_CONTACT":
            return {
                ...state,
                contacts: [...state.contacts, {name: state.name, age: state.age, phone: state.phone, email: state.email}],
                name: "",
                age: "",
                phone: "",
                email: ""
            }

        case "REMOVE_CONTACT":
            let newContact = [...state.contacts] 
            newContact.splice(action.payload, 1)
            return {
              ...state,
                contacts: newContact
            }

        case "SET_INPUTS": 
            console.log(action.payload)
            return {
                ...state,
                [action.payload.name] : action.payload.value
            } 

        default:
            return state
    }
}

const store = createStore(reducer)
store.subscribe(() => console.log(store.getState()))
export default store