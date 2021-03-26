/*import React from "react"
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
