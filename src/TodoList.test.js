import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoList from './TodoList';



it("renders without crashing", function() {
  render(<TodoList />);
});

it("matches snapshot", function() {
  const { asFragment } = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
})



describe("adding/removing/editing tasks", function () {
  let renderedTodoList;

  beforeEach(function () {
    renderedTodoList = render(<TodoList />);
    const taskInput = renderedTodoList.getByLabelText("Task:");
    const submitBtn = renderedTodoList.queryByText("Add Todo");

    fireEvent.change(taskInput, { target: { value: "Say Hello!" }});
    fireEvent.click(submitBtn);
  })

  it("can add a new task", function() {
    // expect a task on the document
    expect(renderedTodoList.queryByText("Say Hello!")).toBeInTheDocument();
  })
  
  it("can remove an existing task", function () {
    const removeBtn = renderedTodoList.queryByText("X");
    
    fireEvent.click(removeBtn);
    expect(renderedTodoList.queryByText("X")).not.toBeInTheDocument();
  })

  it("can edit an existing task", function(){
    const editBtn = renderedTodoList.queryByText('Edit');
    fireEvent.click(editBtn);

    const editTaskInput = renderedTodoList.getByLabelText("Edit Task:");
    const submitBtn = renderedTodoList.queryByText("Edit Todo");

    expect(editTaskInput).toBeInTheDocument();
    expect(submitBtn).toBeInTheDocument();
    
    fireEvent.change(editTaskInput, { target: { value: "!" }});
    fireEvent.click(submitBtn);
    
    expect(editTaskInput).not.toBeInTheDocument();
    expect(renderedTodoList.queryByText("!")).toBeInTheDocument();
  });
})

