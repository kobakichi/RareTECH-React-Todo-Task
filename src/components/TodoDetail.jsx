/**
 * TodoDetail
 * @package components
 */

import { useState } from "react";

/**
 * TodoDetail
 * @param {*} props
 * @returns
 */
export const TodoDetail = (props) => {
  //propsの宣言
  const { todo, handleOnEdit, handleRemoveTodo } = props;
  /* localでのstate */
  //編集モードと描画モードの切り替えのためのフラグ
  const [editFlg, setEditFlg] = useState(false);
  //編集したtodoを保持するstate
  const [editInputValue, setEditInputValue] = useState(todo.title);

  /**
   * 編集モードになった状態
   */
  const onChangeEditMode = () => {
    setEditFlg(true);
  };

  /**
   * 編集用input value保持
   * @param {*} editTitle
   */
  const onChangeEditInputValue = (event) => {
    setEditInputValue(event.target.value);
  };

  /**
   * タスク編集処理 (Enterをクリックした際に発火)
   * @param {*} event
   */
  const onKeyUpDecideEditTodo = (event) => {
    if (event.key === "Enter") {
      handleOnEdit(todo.id, editInputValue);
      setEditFlg(false);
    }
  };

  /**
   * タスク編集処理　(inputからフォーカスアウトした際に発火)
   */
  const onBlurDecideEditTodo = () => {
    handleOnEdit(todo.id, editInputValue);
    setEditFlg(false);
  };

  return (
    <li className="todo" key={todo.id}>
      <div onClick={onChangeEditMode}>
        {editFlg ? (
          <input
            type="text"
            className="editForm"
            value={editInputValue}
            onChange={onChangeEditInputValue}
            onKeyPress={onKeyUpDecideEditTodo}
            onBlur={onBlurDecideEditTodo}
          />
        ) : (
          <input
            desabled
            type="text"
            className="detailForm"
            value={todo.title}
          />
        )}
      </div>
      <span onClick={() => handleRemoveTodo(todo.id, todo.title)}>
        <i className="far fa-trash-alt"></i>
      </span>
    </li>
  );
};
