import { ADD_TODO, REMOVE_TODO, DELETE_ALL, UPDATE_TODO, UPDATE_CHECKBOX } from "../actions";

// Defines the initial state which contains 2 tasks already.
const initialState = [
    {id: 1, content: "Book flights to Cabo", completed: false},
    {id: 2, content: "Call up restaurants in the area", completed: false}
];

// Outlines the different operations which have been linked to the actions in the other folder
const operationsReducer = (state = initialState, action) => {
    switch (action.type) {
        // Adds a new to-do
        case ADD_TODO:
            return [...state, action.payload];
        // Clears all the tasks 
        case DELETE_ALL:
            return [];
        // Delete's individual task
        case REMOVE_TODO:
            const filteredTodos = state.filter((todo) => todo.id !== action.payload);
            return filteredTodos;
        // Updates the chosen task 
        case UPDATE_TODO:
            let data = action.payload;
            const updatedArray = [];
            state.map((item) => {
                if (item.id === data.id) {
                    item.id = data.id;
                    item.content = data.content;
                    item.completed = data.completed;
                } updatedArray.push(item);
            })
            return updatedArray;
        // Marks a task as completed
        case UPDATE_CHECKBOX:
            let todoArray = [];
            state.map((item) => {
                if (item.id === action.payload) {
                    item.completed = !item.completed;
                }
                todoArray.push(item);
            })
            return todoArray;
        default: return state;
    };
}

export default operationsReducer;