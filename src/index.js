import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function App()
{
    return (
        <div className="app">
            <header className="app-header">
                <h1>React JS - Todo List App</h1>
                <p>The most simple and amazing todo-list React app.</p>
            </header>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));