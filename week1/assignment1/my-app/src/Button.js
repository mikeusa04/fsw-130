/*import React from "react"
import ThemeContext from "./themeContext"

function Button(props) {
    function changeTheme() {
        if (props.theme === "light") {
            props.setTheme("dark");
        } else {
            props.setTheme("light")
        }
    };
    return (
        <button className={`${props.theme}-theme`} onClick={changeTheme}>Switch Theme</button>
    )    
}

export default Button*/





//the correct way
import React from "react"
import {ThemeContextConsumer} from "./themeContext"

function Button(props) {
    return (
        <ThemeContextConsumer>
            {context => (
                <button onClick={context.toggleTheme} className={`${context.theme}-theme`}>Switch Theme</button>
            )}
        </ThemeContextConsumer>
    )    
}

export default Button
