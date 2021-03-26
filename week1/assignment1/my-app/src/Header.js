/*import React, {Component} from "react"
import ThemeContext from "./themeContext"

function Header(props) {
    return (
        <ThemeContext.Consumer>
            {theme => (
                <header className={`${theme}-theme`}>
                    <h2>Header</h2>
                    <h2>{theme === "light" ? "Light" : "Dark"} Theme</h2>
                </header>
            )}
        </ThemeContext.Consumer>
    )    
}

export default Header*/






//the correct way
import React, {Component} from "react"
import {ThemeContextConsumer} from "./themeContext"

function Header(props) {
    return (
        <ThemeContextConsumer>
            {context => (
                <header className={`${context.theme}-theme`}>
                    <h2>{context.theme === "light" ? "Light" : "Dark"} Theme</h2>
                </header>
            )}
        </ThemeContextConsumer>
    )    
}

export default Header
