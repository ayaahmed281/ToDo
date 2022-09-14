import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import TaskListPage from "./pages/TaskListPage";
import TaskCategoryListPage from "./pages/TaskCategoryListPage";
import AddTaskPage from "./pages/AddTaskPage";
import LoginPage from "./pages/LoginPage";
import AllTasks from "./features/core/AllTasks/AllTasks";

const AppRoute: React.FC = () => {
  return (
    <Switch>
        <Route path="/" exact>
        <LoginPage />
      </Route>
      <Route path="/tasks" exact>
        <AllTasks />
      </Route>
      <Route  path="/task/:categoryName">
        <TaskCategoryListPage />
      </Route>
      <Route  path="/task/add">
        <AddTaskPage />
      </Route>
      <Route path="*">
        <div className="centered text-centered">
          <h2>404: No Page Found!!</h2>
        </div>
      </Route>
    </Switch>
  );
};

export default AppRoute;
