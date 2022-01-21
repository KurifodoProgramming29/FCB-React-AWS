import Task from "./Task";

function TasksList()
{
    const tasksItemList = [
        "Follow Edukasyon.ph on Facebook.",
        "Follow AWS SIklab Pilipinas on Facebook.",
        "Follow Zuitt Coding Bootcamp on Facebook."
    ];

    // <></> THIS IS CALLED 'FRAGMENT'
    // YOU CAN USED THIS INSTEAD OF <div></div>
    return (
        <>
            <input className="task-input"/>
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