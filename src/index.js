import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TasksList from "./components/TaskList";

function App()
{
    const inlineStyle = {
        "marginBottom": "15px"
    };

    return (
        <div className="app">
            <header className="app-header">
                <h1>React JS - Todo List App</h1>
                <p style={ inlineStyle }>The most simple and amazing todo-list React app.</p>

                <TasksList/>
            </header>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));