import React, { useState } from 'react';

function EditTodoForm({ editTodo, id, task, hideEditForm }){
  const [editTask, setEditTask] = useState(task);

  // handleSubmit: calls property funciton addTodo on a task
  function handleSubmit(evt) {
    evt.preventDefault();
    editTodo(editTask, id);
    setEditTask('');
    hideEditForm()
  }

  // handleChange: updates state with evnt target value
  function handleChange(evt) {
    setEditTask(evt.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>

      <label htmlFor="task">Edit Task: </label>
      <input 
        id="task" 
        name="task" 
        value={editTask}
        onChange={handleChange}
      />
      <button>Edit Todo</button>
    </form>
    );
}

export default EditTodoForm;