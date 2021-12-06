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
import { INIT_TODO_LIST, INIT_TODO_LIST_COUNT } from "./constants/data";
/* styles */
import "./App.css";

/**
 * App
 * @returns
 */
export const App = () => {
  /* todoリストの初期値 */
  const [todos, setTodos] = useState(INIT_TODO_LIST);
  /* タスク追加用の入力値 */
  const [addInputValue, setAddInputValue] = useState("");
  /* todo 採番ID */
  const [uniqueId, setUniqueId] = React.useState(INIT_TODO_LIST_COUNT);
  // Searchコンポーネントで入力されたキーワードを保存するステート
  const [searchKeyword, setSearchKeyword] = useState("");

  /**
   * タスク追加用の入力値更新処理
   * @param {*} event
   */
  const handleChangeAddInputTodo = (event) => {
    setAddInputValue(event.target.value);
  };

  /**
   * タスク追加処理
   * @param {*} event
   */
  const handleAddTodo = (event) => {
    //  エンターキーが押された時にTodoを追加する
    if (event.key === "Enter" && addInputValue !== "") {
      const nextUniqueId = uniqueId + 1;
      // Todo追加処理
      // 元の配列を破壊しないように配列のコピーを作成して、その値でstateを更新する
      // pushでの配列追加は元の配列の値を変更するのでエラーになる

      // concatの処理
      // setTodoList(
      //   // concatとpushの違い
      //   // https://kskpblog.com/javascript-array-add/
      //   todoList.concat({
      //     id: nextUniqueId,
      //     title: addInputValue,
      //   })
      // );

      // スプレッド構文の処理
      setTodos([
        ...todos,
        {
          id: nextUniqueId,
          title: addInputValue,
        },
      ]);
      // 採番IDを更新
      setUniqueId(nextUniqueId);
      // todo追加後、入力値をリセット
      setAddInputValue("");
    }
  };

  /**
   * タスク削除処理
   * @param {*} index
   */
  const handleRemoveTodo = (targetId, targetTitle) => {
    if (window.confirm(`「${targetTitle}」のtodoを削除しますか？`)) {
      // 削除するid以外のtodoリストを再編集
      // filterを用いた方法
      const newTodos = todos.filter((todo) => todo.id !== targetId);
      // 削除するTodoの配列番号を取り出してspliceで削除する方法もある
      // const newTodos = [...todoList];
      // const deleteIndex = newTodos.findIndex((todo) => todo.id === targetId);
      // newTodos.splice(deleteIndex, 1);
      setTodos(newTodos);
    }
  };

  /**
   * タスク編集処理
   * @param {*} index
   * @param {*} value
   */
  const handleOnEdit = (index, value) => {
    const newTodos = todos.map((todo, todoIndex) => {
      if (todoIndex === index) {
        todo.task = value;
      }
      return todo;
    });
    setTodos(newTodos);
  };

  /**
   * 検索キーワード更新処理
   * @param {*} event
   */
  const handleChangeSearchKeyword = (event) => {
    setSearchKeyword(event.target.value);
  };

  return (
    <div className="wrapper">
      <h1>Todo List</h1>
      <AddTodo
        addInputValue={addInputValue}
        handleChangeAddInputTodo={handleChangeAddInputTodo}
        handleAddTodo={handleAddTodo}
      />
      <SearchTodo
        todos={todos}
        value={searchKeyword}
        onChange={handleChangeSearchKeyword}
      />
      <TodoList
        todos={todos}
        searchKeyword={searchKeyword}
        handleRemoveTodo={handleRemoveTodo}
        handleOnEdit={handleOnEdit}
      />
    </div>
  );
};
