import React, { useState } from 'react';

/**NewTodoForm: updates state with new todo */
function NewTodoForm({ addTodo }){

  const [task, setTask] = useState('');

  // handleSubmit: calls property funciton addTodo on a task
  function handleSubmit(evt) {
    evt.preventDefault();
    addTodo(task);
    setTask('');
  }

  // handleChange: updates state with evnt target value
  function handleChange(evt) {
    setTask(evt.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>

      <label htmlFor="task">Task: </label>
      <input 
        id="task" 
        name="task" 
        value={task}
        onChange={handleChange}
      />
      <button>Add Todo</button>
    </form>
    );
}

export default NewTodoForm;
