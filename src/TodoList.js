import React, { useState } from 'react';
import {v4 as uuid} from 'uuid';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';

/** TodoList: renders a new Todo, changes state*/
function TodoList(){
  const [todos, setTodos] = useState([]);

  // addTodo: Adds a Todo to state
  function addTodo(task) {
    const newTodo = {task, completed: false, id: uuid() };
    setTodos(oldTodos => [...oldTodos, newTodo]);
  }

  // editTodo: Edits a todo from state
  function editTodo(updatesTask, id){
    setTodos(oldTodos => {
      return oldTodos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            task: updatesTask
          }
        } else {
          return todo;
        }
      })
    });
  }

  // completeTodo: Completes a todo from state
  function completeTodo(id){
    setTodos(oldTodos => {
      return oldTodos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: true
          }
        } else {
          return todo;
        }
      })
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
          completeTodo={completeTodo}
          task={todo.task}
          completed={todo.completed}
          key={todo.id}
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