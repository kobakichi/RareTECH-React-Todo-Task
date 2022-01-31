/**
 * App
 * @package src
 */

import React from "react";
/** components */
import { AddTodo } from "./components/AddTodo";
import { TodoList } from "./components/TodoList";
import { SearchTodo } from "./components/SearchTodo";
/* hooks */
import { useApp } from "./hooks/useApp";
/** styles */
import "./App.css";

/**
 * App
 * @returns
 */
export const App = () => {
  /* hooks */
  const [states, actions] = useApp();

  return (
    <div className="wrapper">
      <h1>Rare List</h1>
      <AddTodo
        addInputValue={states.addInputValue}
        handleChangeAddInputTodo={actions.handleChangeAddInputTodo}
        handleAddTodo={actions.handleAddTodo}
      />
      <SearchTodo
        todos={states.todos}
        value={states.searchKeyword}
        handleChangeSearchKeyword={actions.handleChangeSearchKeyword}
      />
      <TodoList
        todos={states.todos}
        searchKeyword={states.searchKeyword}
        filteredList={actions.filteredList}
        handleRemoveTodo={actions.handleRemoveTodo}
        handleOnEdit={actions.handleOnEdit}
      />
    </div>
  );
};
