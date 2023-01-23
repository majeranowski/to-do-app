import { createSlice } from "@reduxjs/toolkit";

//creating slice using Redux toolkit.

const todoSlice = createSlice({
    //name
    name: "tasks",
    //initial state that wa specified in the task. I have made it in my example and array, because 
    //I am using array method to add tasks.
    initialState: [
        {nextId: 2, 
            id: 1, 
            content: 'Content1', 
            completed: false}
    ],

    reducers: {
        //add task creates a new task and pushes the task at the end of the state array
        addTask: (state, action) => {

            const newTask = {
                nextId: Math.floor(Math.random() * 100),
                id: Math.floor(Math.random() * 100),
                content: action.payload.content,
                completed: false
            };
            state.push(newTask);
        },
        //looking for the specific index in the array of items then update current state with the action
        completeTask: (state, action) => {
            const index = state.findIndex((task) => task.id === action.payload.id);
            state[index].completed = action.payload.completed;
        },

        //when the action is dispatched it will send the id of what is clicked and .filter function will run
        //and it will return all the ids that are not equal to the payload id
        deleteTask: (state, action) => {
            return state.filter((task) => task.id !== action.payload.id);
        },

        //when the action is despatched it will call the function for every array element and if the id is equal to payload id
        //and returns the arrent with new content that will be specified somewhere else 
        editTask: (state, action) => {
            return state.map((todo) => {
                if (todo.id === action.payload.id) {
                  return {
                    ...todo,
                    content: action.payload.content,
                  };
                }
                return todo;
              });
            },
        },
});

export const { addTask, completeTask, deleteTask, editTask } = todoSlice.actions;

export default todoSlice.reducer;