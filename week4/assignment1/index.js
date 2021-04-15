/*Build a contact management system using Redux in a vanilla JavaScript environment (no React).
You should be able to dispatch actions that add a new person and remove an existing person from an array of contacts.
The contact objects can have whatever properties you want. For example:
 {firstName: 'Mike', phone: '555-444-3333', lastName: 'Saleh', age: 24} 

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



const redux = require('redux');

// The Initial State
const initialState = [
    {firstName: 'Mike', phone: '555-444-3333', lastName: 'Saleh', age: 24},
    {firstName: 'Janith', phone: '666-000-1111', lastName: 'Johon', age: 35}
];

// Action1 Add New Contact
const addNewContact = (newInfo) => {
    return {
        type: 'ADD_NEW_CONTACT',
        payload: newInfo
    }
};

// Action2  Remove Contact
const removeContact = (firstName) => {
    return {
        type: 'REMOVE_CONTACT',
        payload: firstName
    }
};

// Reducer to change state
const reducer = (state = initialState, action) => {
    switch(action.type) {

        case 'ADD_NEW_CONTACT':
            return [ ...state, action.payload ];

        /*another way
        case 'REMOVE_CONTACT': 
            const updatedContacts = state.filter(contact => {
                if(contact.firstName != action.payload) {
                    return contact
                }
            });
            return updatedContacts;*/

        case 'REMOVE_CONTACT': 
            const updatedContacts = state.filter(contact => contact.firstName !== action.payload) 
            return updatedContacts
            
        default: 
            return state;
    }
}

// Creating Redux Store
const store = redux.createStore(reducer);
store.subscribe(() => {
    console.log(store.getState());
})

// Dispatch to add new Contact
store.dispatch(addNewContact({firstName: 'Michelle', phone: '333-999-8888', lastName: 'Smith', age: 20}));

// Dispatch to remove one Contact
store.dispatch(removeContact('Janith'));


/*note
line55 means go through each contact in the array, find the contact with first name if it doesn't match the
action.payload which is 'Janith' filter that contact and put it in the updatedContact array. at the end the
contact 'Janith' will alone in its array and that's how we remove it.

line43
return [...state, action.payload] this will look like [{mike..},{janith..},{michelle}]

line56 
return updatedContacts this will looks like [{...}, {...}] in the console if we do
return {updatedContacts} this will looks like { [{...}, {...}] } if we do
return state, updatedContacts this will looks like [{...}, {...}] same as first 
return [...state, updatedContacts] it looks [{mike..}, {janith..}, {michelle}, [{mike..}, {michelle..}]]
return {...state, updatedContacts} it looks {{mike..},{janith..},{michelle..},updatedContacts:[{mike..},{michelle..}]}
return {state, updatedContacts} it looks {state:[{},{},{}],updatedContacts:[{},{}]}
*/