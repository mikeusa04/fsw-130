import React, {Component} from "react"
import ThemeContext from "./themeContext"

function Footer(props) {
    return (
        <ThemeContext.Consumer>
            {theme => (
            <footer className={`${theme}-theme`}>© 2021 Mike Saleh</footer>
            )}
        </ThemeContext.Consumer>    
    )
}

export default Footer