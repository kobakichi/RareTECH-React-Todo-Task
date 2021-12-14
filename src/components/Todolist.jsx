/**
 * TodoList
 * @package components
 */
import React from "react";

/**
 * TodoList
 * @param {*} props
 * @returns
 */
export const Todolist = (props) => {
  //props
  const { filteredList, handleRemoveTodo, handleOnEdit } = props;

  return (
    <div className="task-area">
      <ul className="todolist">
        {filteredList.map((todo, index) => (
          <li className="todo" key={todo.id}>
            <input
              type="text"
              className="editForm"
              value={todo.title}
              onChange={(event) => handleOnEdit(index, event.target.value)}
            />
            <span onClick={() => handleRemoveTodo(todo.id, todo.title)}>
              <i className="far fa-trash-alt"></i>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
