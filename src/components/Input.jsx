import React, { useState } from "react";

const Input = (props) => {
  // 入力した情報を保持するための変数task
  const [task, setTask] = useState("");

  //onSubmitで発火する関数　handleSubmit todosの中身を展開して、taskに追加する
  const handleSubmit = (event) => {
    event.preventDefault();
    if (task === "") return;
    props.setTodos((todos) => [...todos, { task }]);
    setTask("");
  };

  // onChangeイベントで発火する関数　event.target.valueでinputに入力した値が取得できる
  const handleNewTask = (event) => {
    setTask(event.target.value);
  };

  return (
    <div>
      <h2>ADD TASK</h2>
      {/* inputタグに入力した値を取得するonChangeイベント　onChangeイベントで実行する関数はhandleNewTask */}
      {/* エンターを押したらタスクを一覧にして表示するhandleSubmit */}
      <form onSubmit={handleSubmit} className="task-area">
        <input
          value={task}
          className="inputArea"
          placeholder="New Task"
          type="text"
          onChange={handleNewTask}
        />
      </form>
    </div>
  );
};

export default Input;
