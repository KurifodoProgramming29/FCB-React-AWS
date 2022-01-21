import { useState } from "react";
import Task from "./Task";

function TasksList()
{
    const [ tasksItemList, setTaskItemsList ] = useState([
        "Follow Edukasyon.ph on Facebook.",
        "Follow AWS SIklab Pilipinas on Facebook.",
        "Follow Zuitt Coding Bootcamp on Facebook."
    ]);

    const [ taskValue, setTaskValue ] = useState("");

    const inputChangeHandler = (e) => setTaskValue(e.target.value);

    const addTaskHandler = (e) => {
        setTaskItemsList([taskValue, ...tasksItemList]) // '...' = SPREAD OPERATOR
        setTaskValue("")
    }

    // <></> THIS IS CALLED 'FRAGMENT'
    // YOU CAN USED THIS INSTEAD OF <div></div>
    return (
        <>
            <input 
                className="task-input" 
                placeholder="Create a new task"
                onChange={ inputChangeHandler }
                onBlur={ addTaskHandler }
                value={ taskValue }
            />
            <ul>
                {
                    tasksItemList.map((task, index) => {
                        return <Task key={ index } taskName={ task }/>
                    })
                }
            </ul>
        </>
    );
}

export default TasksList;