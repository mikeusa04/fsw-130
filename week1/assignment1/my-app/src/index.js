/*import React from "react"
import ReactDOM from "react-dom"

import App from "./App"
import ThemeContext from "./themeContext"

ReactDOM.render(
    <ThemeContext.Provider value={"dark"}>
        <App />
    </ThemeContext.Provider>, 
    document.getElementById("root")
)*/





//the correct way
import React from "react"
import ReactDOM from "react-dom"

import App from "./App"
import {ThemeContextProvider} from "./themeContext"

ReactDOM.render(
    <ThemeContextProvider>
        <App />
    </ThemeContextProvider>, 
    document.getElementById("root")
)
