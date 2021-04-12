import React from 'react'

const {Provider, Consumer} = React.createContext()

class ContextProvider extends React.Component {
    state = {
        toDos: [
            {title: "Doll",
            description: "Ugly doll",
            image: "https://images.unsplash.com/photo-1613679074451-9ddcc1103cc8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTF8fHVnbHklMjBkb2xsfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"},
            {title: "Building",
            description: "Very old house",
            image: "https://images.unsplash.com/photo-1528314369071-bc452ff14bc8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8dWdseSUyMGJ1aWxkaW5nfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"},
            {title: "Car",
            description: "Broken car",
            image: "https://images.unsplash.com/photo-1610047217419-bb8cd1ccdd7f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8dWdseSUyMGNhcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"}
        ]
      }

    addToDo = (toDo) => {
        this.setState({toDos: [...this.state.toDos, toDo]})
    }

    render() {
        const {toDos} = this.state
        return (
            <Provider value={{toDos,addToDo: this.addToDo}}>
                {this.props.children}
            </Provider>
        )
    }
}

export {ContextProvider, Consumer as ContextConsumer}