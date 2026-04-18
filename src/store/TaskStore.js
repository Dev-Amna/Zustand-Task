import { create } from "zustand";

export const useTaskStore = create((set) => ({
    tasks: [],

    // Add task Slice(like a global function ) 
    AddTask: (title) => set((state) => ({
        tasks: [...state.tasks, {
            id: Date.now(),
            title: title,
            done: false
        }]
    })),

    // Delete  Task
    DeleteTask: (id) => set((state) => ({
        tasks: state.tasks.filter((task) => task.id !== id),
    })),
}))