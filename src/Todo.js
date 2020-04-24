import React, {useState} from 'react';
import EditTodoForm from './EditTodoForm';
const deleteLabel = 'X';

/**Todo: renders a todo and remove button */
function Todo({ editTodo, removeTodo, completeTodo, task, id, completed }){
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

  function markCompleted() {
    completeTodo(id);
  }

  const textStyle = {
    textDecoration: (completed) ? 'line-through' : 'none'
  }

  return (
    <div style={textStyle}>
      {task}
      <button onClick={handleRemove}>{deleteLabel}</button>
      <button onClick={showEditForm}>Edit</button>
      <button onClick={markCompleted}>Mark as completed</button>
      {editing ? <EditTodoForm 
      editTodo={editTodo} 
      task={task} 
      id={id}
      hideEditForm={hideEditForm}/> 
      : null}
    </div>
  )
}

export default Todo;
export { deleteLabel };