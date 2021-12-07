import React, { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import Title from "./components/Title";
import Todolist from "./components/Todolist";
import Search from "./components/Search";

function App() {
  // 最初のTodoリストの配列
  const initialState = [
    {
      task: "Task1",
    },
    {
      task: "Task2",
    },
  ];

  // 上で定義した配列をuseStateでtodosに入れる
  const [todos, setTodos] = useState(initialState);

  // Searchコンポーネントで入力されたキーワードを保存するステート
  const [searchKeyword, setSearchKeyword] = useState("");

  const handleSearch = (event) => {
    setSearchKeyword(event.target.value);
  };

  return (
    <div className="wrapper">
      <Title title={"Todo List"} />
      <Input todos={todos} setTodos={setTodos} />
      <Search todos={todos} value={searchKeyword} onChange={handleSearch} />
      <Todolist
        todos={todos}
        setTodos={setTodos}
        searchKeyword={searchKeyword}
        setSearchKeyword={setSearchKeyword}
      />
    </div>
  );
}

export default App;
