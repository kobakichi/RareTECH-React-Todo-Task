import React from 'react'

const Search = (props) => {

  return (
    <div className="task-area">
      <input type="text" className="inputArea" placeholder="Search Keyword" onChange={ props.onChange }/>

      {/* { props.todos.filter((val) => {
        if (search === "") {
          return val;
        } else if (
          val.task.toLowerCase().includes(search.toLowerCase())
          ) {
            return val;
          }
        }).map((todo, index) => (
          <li key={ index }><input type="text" value={todo.task} onChange={(event) => handleOnEdit(index, event.target.value)} />
          <span onClick={() => handleRemoveTask(index) }><i className="far fa-trash-alt fa-pull-right"></i></span></li>
        ))} */}
    </div>
  )
}

export default Search
