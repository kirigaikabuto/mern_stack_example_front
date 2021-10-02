import React from 'react'
import NavBar from "./navbar/NavBar";
import "./app.css"
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Register from "./register/Register";

function App() {
    return (
        <BrowserRouter>
            <div className="app">
                <NavBar/>
                <Switch>
                    <Route path="/register" component={Register}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
