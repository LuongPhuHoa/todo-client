import { Todo, addTodo, removeTodo, toggleTodo, fetchTodos } from "./todoSlice";
import axios from "axios";
import { createAppAsyncThunk } from "../../createAppAsyncThunk";

// export const addTodoAsync = (todo: Todo) => async (dispatch: any) => {
//     const newTodo = await axios.post("/api/todo/createTodo", todo);
//     dispatch(addTodo({
//         id: newTodo.data.todo.id,
//         taskName: newTodo.data.todo.taskName,
//         completed: newTodo.data.todo.completed,
//         userID: newTodo.data.todo.userID,
//     }));
// }

// export const removeTodoAsync = (id: number) => async (dispatch: any) => {
//     const todo = await axios.post("/api/todo/removeTodo", { id });
//     dispatch(removeTodo(todo.data.todo.id));
// }

// export const toggleTodoAsync = (id: number) => async (dispatch: any) => {
//     const todo = await axios.post("/api/todo/toggleTodo", { id });
//     dispatch(toggleTodo(todo.data.todo.id));
// }

// export function getTodos(userID: number) {
//     return async function fetchTodosThunk(dispatch: any) {
//         const { data } = await axios.post("/api/todo", { userID });
//         console.log(data);
//         dispatch(fetchTodos(data.todos));
//     }
// }

export const addTodoAsync = createAppAsyncThunk('todo/addTodo', async (todo: Todo) => {
    const newTodo = await axios.post("/api/todo/createTodo", todo);
    return newTodo.data.todo;
});

export const removeTodoAsync = createAppAsyncThunk('todo/removeTodo', async (id: number) => {
    const todo = await axios.post("/api/todo/removeTodo", { id });
    return todo.data.todo.id;
});

export const toggleTodoAsync = createAppAsyncThunk('todo/toggleTodo', async (id: number) => {
    const todo = await axios.post("/api/todo/toggleTodo", { id });
    return todo.data.todo.id;
});

export const getTodos = createAppAsyncThunk('todo/getTodos', async (userID: number) => {
    const { data } = await axios.post("/api/todo", { userID });
    return data.todos;
});