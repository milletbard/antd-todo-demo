import React from "react";

import { List, Tooltip, Switch, Popconfirm, Button, Tag } from "antd";
import { CloseOutlined, CheckOutlined } from "@ant-design/icons";

import "./styles.less";
import { ITodo } from "store/todo/models/todo.model";

interface ItodoItemProps {
  todo: ITodo;
  onTodoRemoval: (todo: ITodo) => void;
  onTodoToggle: (todo: ITodo) => void;
}

export const TodoItem: React.FC<ItodoItemProps> = ({
  todo,
  onTodoRemoval,
  onTodoToggle,
}) => {
  return (
    <List.Item
      actions={[
        <Tooltip
          title={todo.completed ? "Mark as uncompleted" : "Mark as completed"}
        >
          <Switch
            checkedChildren={<CheckOutlined />}
            unCheckedChildren={<CloseOutlined />}
            onChange={() => onTodoToggle(todo)}
            defaultChecked={todo.completed}
          />
        </Tooltip>,
        <Popconfirm
          title="Are you sure you want to delete?"
          onConfirm={() => onTodoRemoval(todo)}
        >
          <Button className="remove-todo-button" type="primary" danger>
            X
          </Button>
        </Popconfirm>,
      ]}
    >
      <div className="todo-item">
        <Tag color={todo.completed ? "cyan" : "red"} className="todo-tag">
          {todo.name}
        </Tag>
      </div>
    </List.Item>
  );
};
