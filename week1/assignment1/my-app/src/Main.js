/*import React, {Component} from "react"
import ThemeContext from "./themeContext"

function Main(props) {
    return (
        <ThemeContext.Consumer>
            {theme => (
                <main className={`${theme}-theme`}>
                    <h1>Main</h1>
                    <h1>{theme === "light" ? "Light" : "Dark"} Theme</h1>
                </main>
            )}
        </ThemeContext.Consumer>
    )    
}

export default Main*/





//the correct way
import React, {Component} from "react"
import {ThemeContextConsumer} from "./themeContext"

function Main(props) {
    return (
        <ThemeContextConsumer>
            {context => (
                <main className={`${context.theme}-theme`}>
                    <h1>Main</h1>
                    <h2>{context.theme === "light" ? "Light" : "Dark"} Theme</h2>
                </main>
            )}
        </ThemeContextConsumer>
    )    
}

export default Main