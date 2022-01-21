import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Task(props)
{
    return (
        <li className="tasks-item">{ props.taskName }</li>
    );
}

function TasksList()
{
    const tasksItemList = [
        "Follow Edukasyon.ph on Facebook.",
        "Follow AWS SIklab Pilipinas on Facebook.",
        "Follow Zuitt Coding Bootcamp on Facebook."
    ];

    return (
        <ul>
            {
                tasksItemList.map((task, index) => {
                    return <Task key={ index } taskName={ task }/>
                })
            }
        </ul>
    );
}

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