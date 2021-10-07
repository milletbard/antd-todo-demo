import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home } from "features/home/Home";
import { Todo } from "features/todo/Todo";

interface IRoutesProps {}

export const Routes: React.FC<IRoutesProps> = () => (
  <Switch>
    <Route path="/" exact={true} component={() => <Home />} />
    <Route path="/todo" component={() => <Todo />} />
  </Switch>
);
