import React, { useState } from 'react';
import { TodoList } from './TodoList';
import { AddTodoForm } from './AddTodoForm';
import { EditTodoForm } from './EditTodoForm';

const initialTodos: Todo[] = [
  {
    id: 1,
    text: 'Walk the dog',
    complete: false,
  },
  {
    id: 2,
    text: 'Write app',
    complete: true,
  },
];

function App()  {
  let [selectedTodo, setSelectedTodo] = useState();
  let [nextId, setNextId] = useState(3);
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const addTodo: AddTodo = (text: string) => {
    const newTodo = { id : nextId++, text, complete: false };
    setTodos([...todos, newTodo]);
    setNextId(nextId);
  };

  const removeTodo : RemoveTodo = (selectedTodo: Todo) => {
    const filteredTodos = todos.filter( it => it.id !== selectedTodo.id );
    setTodos(filteredTodos);
  }

  const selectTodo : SelectTodo = (selectedTodo: Todo) => {
    setSelectedTodo(selectedTodo as any);
  }

  const editTodo: EditTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map(todo => {
      if (todo.id === selectedTodo.id) {
        return {
          ...todo,
          text: selectedTodo.text,
        };
      }
      return todo;
    });
    setTodos(newTodos);
    setSelectedTodo(null as any);
  }

  const markAllToDone = () => {
    const newTodos = todos.map(todo => {
      return {
        ...todo,
        complete: true,
      };
    });
    setTodos(newTodos);
  };

  return (
    <>
      <button
          onClick={() => {
            markAllToDone();
          }}
      >
          Mark All as Done
      </button>
      <TodoList todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo} selectTodo={selectTodo} />
      {
        selectedTodo ? 
          <EditTodoForm editTodo={editTodo} todo={selectedTodo} />
        :
          <AddTodoForm addTodo={addTodo} />
      }
    </>
  )
}

export default App;