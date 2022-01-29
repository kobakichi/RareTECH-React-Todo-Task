/**
 * TodoList
 * @package components
 */
import React from "react";
/* components */
import { TodoDetail } from "./TodoDetail";

/**
 * TodoList
 * @param {*} props
 * @returns
 */
export const TodoList = (props) => {
  //props
  const { filteredList, handleRemoveTodo, handleOnEdit } = props;

  return (
    <div className="task-area">
      <ul className="todolist">
        {filteredList.map((todo) => (
          <TodoDetail
            key={todo.id}
            todo={todo}
            handleOnEdit={handleOnEdit}
            handleRemoveTodo={handleRemoveTodo}
          />
        ))}
      </ul>
    </div>
  );
};
