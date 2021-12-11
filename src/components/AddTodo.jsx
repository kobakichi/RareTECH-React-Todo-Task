/**
 * AddTodo
 * @package components
 */
import React from "react";

/**
 * AddTodo
 * @param {*} props
 * @returns
 */
export const AddTodo = (props) => {
  //propsの定義
  const { addInputValue, handleChangeAddInputTodo, handleAddTodo } = props;

  return (
    <div>
      <h2>ADD TASK</h2>
      <div className="task-area">
        <input
          type="text"
          className="inputArea"
          value={addInputValue}
          placeholder="New Task"
          onChange={handleChangeAddInputTodo}
          onKeyDown={handleAddTodo}
        />
      </div>
    </div>
  );
};
