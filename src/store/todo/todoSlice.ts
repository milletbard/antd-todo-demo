import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITodo, IStatue } from "./models/todo.model";
import { fetchTodos } from "service/api/todo";

interface ITodoReducerInterface {
  todos: ITodo[];
  status: IStatue;
}

const initialState: ITodoReducerInterface = {
  todos: [],
  status: "idle",
};

export const getTodosAsync = createAsyncThunk("todo/fetchTodos", async () => {
  const response = await fetchTodos();

  return response;
});

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<ITodo>) => {
      state.todos = [
        ...state.todos,
        { ...action.payload, id: String(Date.now()) },
      ];
    },
    removeTodo: (state, action: PayloadAction<ITodo>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
    toggleTodo: (state, action: PayloadAction<ITodo>) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTodosAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getTodosAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.todos = action.payload.data;
      });
  },
});

export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions;

export default todoSlice.reducer;
