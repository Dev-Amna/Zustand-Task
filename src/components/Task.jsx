import React, { useState } from 'react'
import { useTaskStore } from '../store/TaskStore'

function Task() {
    const [btn, setBtn] = useState(false);
    const [text, setText] = useState("");
    const [filter, setFilter] = useState("all");


    const tasks = useTaskStore((state) => state.tasks);
    const AddTask = useTaskStore((state) => state.AddTask);
    const DeleteTask = useTaskStore((state) => state.DeleteTask);
    const ToggleTask = useTaskStore((state) => state.ToggleTask);

    const handleAdd = () => {
        if (text.trim() === "") return;

        AddTask(text);
        setText("");
    }

    const handleDelete = (id) => {
        DeleteTask(id);

    }

    const filteredTasks = tasks.filter((t) => {
        if (filter === "completed") return t.done;
        if (filter === "pending") return !t.done;
        return true;
    })


    return (
        <div>
            <h2>Task Manger Zustand App</h2>

            <input type='text' placeholder='Add an task here..' value={text} onChange={(e) => setText(e.target.value)} />
            <button onClick={handleAdd}>Add Task!</button>

            <ul>
                <button onClick={() => setFilter("all")}> All</button>
                <button onClick={() => setFilter("completed")}> Completed!</button>
                <button onClick={() => setFilter("pending")}> Pending..</button>

                {filteredTasks.map((t) => {
                    return <>
                        <li key={t.id}>{t.title}
                            <button onClick={() => handleDelete(t.id)}>Delete Task</button>
                            <button onClick={() => ToggleTask(t.id)}> {t.done ? "Done" : "Not Done"}</button>
                        </li>

                    </>
                })}

            </ul>
        </div>
    )
}

export default Task