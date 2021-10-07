import { ITodo } from "store/todo/models/todo.model";

export const fetchTodos = () =>
  new Promise<{ data: ITodo[] }>((resolve) =>
    setTimeout(
      () => resolve({ data: [{ name: "eat dinner", id: String(Date.now()) }] }),
      1500
    )
  );
