import {createSlice, nanoid} from '@reduxjs/toolkit';

export interface Task {
    id: string;
    name: string;
}

const initialState: Task[] = [];

export const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action) => {
            const newTask: Task = {
                id: nanoid(),
                name: action.payload.task
            };
            state.push(newTask)
        },
        deleteTask: (state, action) => {
            return state.filter((item: any) => item.id !== action.payload.id)
        },
    }
})

export const { addTask, deleteTask } = taskSlice.actions
export default taskSlice.reducer