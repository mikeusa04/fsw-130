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

export default App

