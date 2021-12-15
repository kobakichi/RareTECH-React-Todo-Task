/**
 * useApp
 */
import { useState } from "react";
/* constants */
import { INIT_TODO_LIST, INIT_TODO_LIST_COUNT } from "../constants/data";

/**
 * useApp
 * @returns
 */
export const useApp = () => {
  // todoリストの初期値
  const [todos, setTodos] = useState(INIT_TODO_LIST);
  // タスク追加用の入力値
  const [addInputValue, setAddInputValue] = useState("");
  //todo 採番ID
  const [uniqueId, setUniqueId] = useState(INIT_TODO_LIST_COUNT);
  // Searchコンポーネントで入力されたキーワードを保存するステート
  const [searchKeyword, setSearchKeyword] = useState("");

  /**
   *タスクが入力されたらデータを保持する処理、更新処理
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
    // エンターキーが押された時にTodoを追加する
    if (event.key === "Enter" && addInputValue !== "") {
      const nextUniqueId = uniqueId + 1;
      setTodos([
        ...todos,
        {
          id: nextUniqueId,
          title: addInputValue,
        },
      ]);
      //採番IDを更新
      setUniqueId(nextUniqueId);
      //todo追加後、入力値をリセットする
      setAddInputValue("");
    }
  };
  /**
   * タスク削除処理
   * @param {*} index
   * 削除する時にconfirmを出している
   */
  const handleRemoveTodo = (targetId, targetTitle) => {
    if (window.confirm(` 「${targetTitle}」のtodoを削除しますか？`)) {
      // 削除するid以外のtodoリストを再編集
      const newTodos = todos.filter((todo) => todo.id !== targetId);
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
        todo.title = value;
      }
      return todo;
    });
    setTodos(newTodos);
  };

  /**
   * 検索キーワード更新処理 キーワードを保持する
   * @param {*} event
   */
  const handleChangeSearchKeyword = (event) => {
    setSearchKeyword(event.target.value);
  };

  /**
   * 検索キーワードフィルター処理
   */
  const filteredList = todos.filter((val) => {
    if (searchKeyword === "") {
      return val;
    } else if (
      val.title
        .toString()
        .toLowerCase()
        .startsWith(searchKeyword.toString().toLowerCase())
    ) {
      return val;
    }
    return false;
  });
  /**
   * hooksの返り値
   * 第一引数、state
   * 第二引数、関数、変数
   */
  return [
    {
      todos,
      addInputValue,
      searchKeyword,
    },
    {
      handleChangeAddInputTodo,
      handleAddTodo,
      handleRemoveTodo,
      handleOnEdit,
      handleChangeSearchKeyword,
      filteredList,
    },
  ];
};
