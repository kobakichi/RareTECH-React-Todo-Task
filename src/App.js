/**
 * App
 * @package src
 */
import React, { useState } from "react";
/* components */
import { AddTodo } from "./components/AddTodo";
import { TodoList } from "./components/TodoList";
import { SearchTodo } from "./components/SearchTodo";
/* constants */
import { INIT_TODO_LIST } from "./constants/data";
/* styles */
import "./App.css";

/**
 * App
 * @returns
 */
export const App = () => {
  // 上で定義した配列をuseStateでtodosに入れる
  const [todos, setTodos] = useState(INIT_TODO_LIST);

  // Searchコンポーネントで入力されたキーワードを保存するステート
  const [searchKeyword, setSearchKeyword] = useState("");

  const handleSearch = (event) => {
    setSearchKeyword(event.target.value);
  };

  return (
    <div className="wrapper">
      <h1>Todo List</h1>
      <AddTodo todos={todos} setTodos={setTodos} />
      <SearchTodo todos={todos} value={searchKeyword} onChange={handleSearch} />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        searchKeyword={searchKeyword}
        setSearchKeyword={setSearchKeyword}
      />
    </div>
  );
};
