
const updateLS = todos => localStorage.setItem(LS_KEY, JSON.stringify(todos));

const todosReducer = (todos = [], action) => {
    switch (action.type) {

        case 'ADD_NEW_TASK':
            const newTodos = [...todos, createNeyTask(action.payload)];
            updateLS(newTodos);
            return newTodos;

        case 'REMOVE_TASK':
            const newTodos1 = [...todos.filter(todo => todo.id !== action.payload)];
            updateLS(newTodos1);
            return newTodos1;

        case 'TOGGLE_TASK':
            const index = todos.findIndex(todo => todo.id === action.payload);
            todos[index].isDone = !todos[index].isDone;
            updateLS(todos);
            return [...todos];

        case 'INIT_TODOS':
            updateLS(action.payload);
            return [...action.payload];

        default:
            return todos;
    }
};

export default todosReducer;
