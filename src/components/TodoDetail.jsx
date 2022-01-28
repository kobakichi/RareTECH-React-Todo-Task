/**
 * TodoDetail
 * @package components
 */
import React from "react";

/**
 * TodoDetail
 * @param {*} props
 * @returns
 */
export const TodoDetail = (props) => {
  // props
  const { todo, handleOnEdit, handleRemoveTodo } = props;
  /* local */
  const [editFlg, setEditFlg] = React.useState(false);
  const [editInputValue, setEditInputValue] = React.useState(todo.title);

  /**
   * 編集モードON
   */
  const onChangeEditMode = () => {
    setEditFlg(true);
  };

  /**
   * 編集用input value変更処理
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
   * タスク編集処理 (inputからフォーカスアウトした際に発火)
   */
  const onBlurDecideEditTodo = () => {
    handleOnEdit(todo.id, editInputValue);
    setEditFlg(false);
  };

  return (
    <li className="todo" key={todo.id}>
      {editFlg ? (
        <div>
          <input
            type="text"
            className="editForm"
            value={editInputValue}
            onChange={onChangeEditInputValue}
            onKeyPress={onKeyUpDecideEditTodo}
            onBlur={onBlurDecideEditTodo}
          />
        </div>
      ) : (
        <div onClick={onChangeEditMode}>
          <input
            disabled
            type="text"
            className="detailForm"
            value={todo.title}
          />
        </div>
      )}

      <span onClick={() => handleRemoveTodo(todo.id, todo.title)}>
        <i className="far fa-trash-alt"></i>
      </span>
    </li>
  );
};
