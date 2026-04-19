import { create } from "zustand";

const getStoredTasks = () => {
    const stored = localStorage.getItem("tasks");
    return stored ? JSON.parse(stored) : [];
}

export const useTaskStore = create((set) => ({
    tasks: getStoredTasks(),

    // Add task  
    AddTask: (title) =>
        set((state) => {
            const updatedTasks = [
                ...state.tasks,
                {
                    id: Date.now(),
                    title: title,
                    done: false
                }
            ];
            localStorage.setItem("tasks", JSON.stringify(updatedTasks));
            return { tasks: updatedTasks };
        }),

    // Delete  Task

    DeleteTask: (id) => set((state) => {
        const updatedTasks = state.tasks.filter((task) => task.id !== id);

        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
        return { tasks: updatedTasks };
    }),


    // Toggle Click button

    ToggleTask: (id) =>
        set((state) => {
            const updatedTasks = state.tasks.map((t) =>
                t.id === id ? { ...t, done: !t.done } : t)

            localStorage.setItem("tasks", JSON.stringify(updatedTasks));
            return { tasks: updatedTasks };
        })

}))