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
export const TodoList = (props) => {
  /* props */
  const { handleRemoveTodo, handleOnEdit } = props;

  return (
    <div className="task-area">
      <ul className="todoList">
        {/* TODO: 検索処理のこのやり方だと冗長なコードになるので、別の方法を考えてみてください。 */}
        {props.todos
          .filter((val) => {
            if (props.searchKeyword === "") {
              return val;
            } else if (
              val.task
                .toString()
                .toLowerCase()
                .includes(props.searchKeyword.toString().toLowerCase())
            ) {
              return val;
            }
            return false;
          })
          .map((todo, index) => (
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
