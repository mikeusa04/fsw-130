/*Using what you have just learned about React Context, you are tasked with making a ThemeProvider context for a new application. Your goal is to build a homepage that offers a dark and a light theme. This theme can be toggled by the user.

You must:
Provide a Dark and a Light theme
Have at least 3 display components:
ex: Navbar, Footer, Main
Create a ThemeProvider component that manages the themes using Context.



import React from "react"
import {useState} from "react"
import Header from "./Header"
import Main from "./Main"
import Button from "./Button"
import Footer from "./Footer"
import ThemeContext from "./themeContext"
import "./styles.css"

function App() {
    const [theme, setTheme] = useState("light")
    function changeTheme() {
        if (theme === "light") {
            setTheme("dark");
        } else {
            setTheme("light")
        }
    };
    return (
        <div>
            <Header />
            <Main />
            <ThemeContext.Consumer>
                {theme => (
                    <Button theme={theme} setTheme={setTheme} onClick={changeTheme}/>
                )}
            </ThemeContext.Consumer>
            <Footer />
        </div>
    )
}

export default App*/




//the correct way
import React from "react"
import Footer from "./Footer"
import Main from "./Main"
import Header from "./Header"
import Button from "./Button"
import "./styles.css" 
//import {ThemeContextConsumer} from "./themeContext"

function App() {
    return (
        <div>
            <Header />
            <Main />
            <Button />
            <Footer />
        </div>
    )
}

export default App


/* we can add an extra button like bellow to the div above but we have to uncomment the import above
<ThemeContextConsumer>
    {context => (
         <button onClick={context.toggleTheme} className={`${context.theme}-theme`}>Switch Theme</button>
    )}
</ThemeContextConsumer> */
