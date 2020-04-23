import React, {useState} from 'react';
import EditTodoForm from './EditTodoForm';
const deleteLabel = 'X';

/**Todo: renders a todo and remove button */
function Todo({ editTodo, removeTodo, task, id, idx }){
  const [editing, setEditing] = useState(false);

  // handleRemove: removes todo on click
  function handleRemove(){
    removeTodo(id);
  }

  //showEditForm: show form for editing a todo by changing the state to true
  function showEditForm(){
    setEditing(true);
  }

  //hideEditForm: hide form for editing a todo by changing the state to false
  function hideEditForm(){
    setEditing(false);
  }

  return (
    <div>
      {task}
      <button onClick={handleRemove}>{deleteLabel}</button>
      <button onClick={showEditForm}>Edit</button>
      {editing ? <EditTodoForm 
      idx={idx} 
      editTodo={editTodo} 
      task={task} 
      hideEditForm={hideEditForm}/> 
      : null}
    </div>
  )
}

export default Todo;