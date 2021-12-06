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
  /* props */
  const { addInputValue, handleChangeAddInputTodo, handleAddTodo } = props;

  return (
    <div>
      <h2>ADD TASK</h2>
      {/* inputタグに入力した値を取得するonChangeイベント　onChangeイベントで実行する関数はhandleNewTask */}
      {/* エンターを押したらタスクを一覧にして表示するhandleSubmit */}

      {/* formタグでsubmitはおすすめされない */}
      {/* https://document.intra-mart.jp/library/iap/public/im_ui/im_design_guideline_pc/texts/contents_area/submit.html */}

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
