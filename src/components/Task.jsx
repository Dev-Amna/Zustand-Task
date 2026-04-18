import React, { useState } from 'react'
import { useTaskStore } from '../store/TaskStore'

function Task() {
    const [text, setText] = useState("");

    const tasks = useTaskStore((state) => state.tasks);
    const AddTask = useTaskStore((state) => state.AddTask);
    const DeleteTask = useTaskStore((state) => state.DeleteTask);

    const handleAdd = () => {
        if (text.trim() === "") return;

        AddTask(text);
        setText("");
    }

    const handleDelete = (id) => {
        DeleteTask(id);

    }
    return (
        <div>
            <h2>Task Manger Zustand App</h2>

            <input type='text' placeholder='Add an task here..' value={text} onChange={(e) => setText(e.target.value)} />
            <button onClick={handleAdd}>Add Task!</button>

            <ul>
                {tasks.map((t) => {
                    return <>
                        <li key={t.id}>{t.title}
                            <button onClick={() => handleDelete(t.id)}>Delete Task</button>
                        </li>

                    </>
                })}

            </ul>
        </div>
    )
}

export default Task