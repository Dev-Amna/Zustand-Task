import React, { useState } from 'react'
import { useTaskStore } from '../store/TaskStore'

function Task() {
    const [btn, setBtn] = useState(false);
    const [text, setText] = useState("");
    const [filter, setFilter] = useState("all");
    const [active, setActive] = useState("all");

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
        <div className='container'>
            <h2>Task Manger Zustand App</h2>

            <div className='input-container'>
                <input type='text' placeholder='Add an task here..' value={text} onChange={(e) => setText(e.target.value)} onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        handleAdd();
                    }
                }} />
                <button onClick={handleAdd} keyborad>Add Task!</button>
            </div>

            <ul className='task-list'>
                <div className='filterBtns'>
                    <button onClick={() => {
                        setFilter("all");
                        setActive("all");
                    }} className={active === "all" ? "active" : ""}> All</button>

                    <button onClick={() => {
                        setFilter("completed");
                        setActive("completed");
                    }} className={active === "completed" ? "active" : ""}> Completed!</button>

                    <button onClick={() => {
                        setFilter("pending");
                         setActive("pending");
                        }} className={active === "pending" ? "active" : ""}> Pending..</button>
                </div>

                {filteredTasks.map((t) => {
                    return <>
                        <li key={t.id} className={t.done ? "done" : ""}>
                            <p className='title'>{t.title}</p>
                            <div>
                                <button onClick={() => handleDelete(t.id)}>Delete Task</button>
                                <button onClick={() => ToggleTask(t.id)}> {t.done ? "Done" : "Not Done"}</button>
                            </div>
                        </li>

                    </>
                })}

            </ul>
        </div>
    )
}

export default Task