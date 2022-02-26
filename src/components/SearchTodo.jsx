/**
 * SearchTodo
 * @package components
 */
import React from "react";

/**
 * SearchTodo
 * @param {*} props
 * @returns
 */
export const SearchTodo = (props) => {
  const { searchKeyword, handleChangeSearchKeyword } = props;

  return (
    <div className="task-area">
      <input
        type="text"
        className="inputArea"
        placeholder="Search Keyword"
        value={searchKeyword}
        onChange={handleChangeSearchKeyword}
      />
    </div>
  );
};
