import React, { useState } from 'react';
import {v4 as uuid} from 'uuid';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';

/** TodoList: renders a new Todo, changes state*/
function TodoList(){
  const [todos, setTodos] = useState([]);

  // addTodo: Adds a Todo to state
  function addTodo(task) {
    const newTodo = {task, id: uuid() };
    setTodos(oldTodos => [...oldTodos, newTodo]);
  }

  // pass id instead, use a map
  // editTodo: Edits a todo from state
  function editTodo(updatesTask, idx){
    setTodos(oldTodos => {
      const todosCopy = [...oldTodos];
      todosCopy[idx] = {
          ...todosCopy[idx],
          task: updatesTask
      }
      return todosCopy;
    });
  }

  // removeTodo: Removes a todo from state
  function removeTodo(id) {
    setTodos(oldTodos => oldTodos.filter(todo => todo.id !== id));
  }

  function renderTodos() {
    return todos.map((todo, idx) => {
      return (
        <Todo 
          id={todo.id}
          removeTodo={removeTodo}
          editTodo={editTodo}
          task={todo.task}
          key={todo.id}
          idx={idx}
        />
      )
    })
  }

  return(
    <div>
      <NewTodoForm addTodo={addTodo}/>
      {renderTodos()}
    </div>
  )

}

export default TodoList;