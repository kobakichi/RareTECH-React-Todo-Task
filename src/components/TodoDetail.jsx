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

  return (
    <li className="todo" key={todo.id}>
      <input
        type="text"
        className="editForm"
        value={todo.title}
        onChange={(event) => handleOnEdit(todo.id, event.target.value)}
      />
      <span onClick={() => handleRemoveTodo(todo.id, todo.title)}>
        <i className="far fa-trash-alt"></i>
      </span>
    </li>
  );
};
