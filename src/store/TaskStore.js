import { create } from "zustand";

export const useTaskStore = create((set) => ({
    task: [],

    // Add task Slice(like a global function ) 
    AddTask: (title) => set((state) => ({
        task: [...state.task, {
            id: Date.now(),
            title: title,
            done: false
        }]
    }))

    // Delete  Tasl 
}))