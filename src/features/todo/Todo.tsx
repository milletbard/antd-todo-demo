import React, { useEffect } from "react";
import { Row, Col, PageHeader, Card } from "antd";
import { useAppSelector, useAppDispatch } from "app/hooks";
import {
  addTodo,
  removeTodo,
  toggleTodo,
  getTodosAsync,
} from "store/todo/todoSlice";
import { ITodo } from "../../store/todo/models/todo.model";
import { message } from "antd";

import { AddTodoForm } from "components/AddTodoForm";
import { TodoList } from "components/TodoList";

import "./style.less";

export const Todo = () => {
  const { todos, status } = useAppSelector((state) => state.todo);

  const dispatch = useAppDispatch();

  const handleFormSubmit = (todo: ITodo): void => {
    dispatch(addTodo(todo));
    message.success("Todo added!");
  };

  const handleRemoveTodo = (todo: ITodo): void => {
    dispatch(removeTodo(todo));
    message.warn("Todo removed!");
  };

  const handleToggleTodoStatus = (todo: ITodo): void => {
    dispatch(toggleTodo(todo));
    message.info("Todo state updated!");
  };

  useEffect(() => {
    dispatch(getTodosAsync());
  }, []);
  return (
    <Row
      justify="center"
      align="bottom"
      gutter={[0, 20]}
      // className={styles.todosContainer}
    >
      <Col
        xs={{ span: 23 }}
        sm={{ span: 23 }}
        md={{ span: 21 }}
        lg={{ span: 20 }}
        xl={{ span: 18 }}
      >
        <PageHeader
          title="Add Todo"
          subTitle="To add a todo, just fill the form below and click in add todo."
        />
      </Col>

      <Col
        xs={{ span: 23 }}
        sm={{ span: 23 }}
        md={{ span: 21 }}
        lg={{ span: 20 }}
        xl={{ span: 18 }}
      >
        <Card title="Create a new todo">
          <AddTodoForm onFormSubmit={handleFormSubmit} />
        </Card>
      </Col>

      <Col
        xs={{ span: 23 }}
        sm={{ span: 23 }}
        md={{ span: 21 }}
        lg={{ span: 20 }}
        xl={{ span: 18 }}
      >
        <Card title="Todo List">
          <TodoList
            todos={todos}
            status={status}
            onTodoRemoval={handleRemoveTodo}
            onTodoToggle={handleToggleTodoStatus}
          />
        </Card>
      </Col>
    </Row>
  );
};
