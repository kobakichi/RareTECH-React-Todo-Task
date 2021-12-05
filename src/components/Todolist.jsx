import React from 'react'

const Todolist = (props) => {

  const handleRemoveTask = index => {
    const newTodos = ( todos => [...todos].filter((todo,todoIndex) => todoIndex !== index));
    props.setTodos(newTodos)
  }

  const handleOnEdit = (index, value) => {
    const newTodos = props.todos.map((todo, todoindex) => {
      if (todoindex === index) {
        todo.task = value;
      }
      return todo;
    });
    props.setTodos(newTodos);
  }

  return (
    <div className="task-area">
      <ul className="todolist">
        { props.todos.filter((val) => {
          if (props.searchKeyword === '') {
            return val;
          } else if (
            val.task.toString().toLowerCase().includes(props.searchKeyword.toString().toLowerCase())
          ) {
            return val;
          } return false;
        }).map((todo, index) => (
          <li className="todo" key={ index }><input type="text" className="editForm" value={todo.task} onChange={(event) => handleOnEdit(index, event.target.value)} />
          <span onClick={() => handleRemoveTask(index) }><i className="far fa-trash-alt"></i></span></li>
        ))}
      </ul>
    </div>
  );
};

export default Todolist