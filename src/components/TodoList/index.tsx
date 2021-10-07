import React from "react";

import { List } from "antd";

import { ITodo, IStatue } from "store/todo/models/todo.model";
import { TodoItem } from "components/TodoItem";

interface ITodoListProps {
  todos: ITodo[];
  status: IStatue;
  onTodoRemoval: (todo: ITodo) => void;
  onTodoToggle: (todo: ITodo) => void;
}

export const TodoList: React.FC<ITodoListProps> = ({
  todos,
  status,
  onTodoRemoval,
  onTodoToggle,
}) => {
  return (
    <List
      loading={status === "loading"}
      locale={{
        emptyText: "There's nothing to do :(",
      }}
      dataSource={todos}
      renderItem={(todo) => (
        <TodoItem
          todo={todo}
          onTodoRemoval={onTodoRemoval}
          onTodoToggle={onTodoToggle}
        />
      )}
      pagination={{
        position: "bottom",
        pageSize: 10,
      }}
    />
  );
};
