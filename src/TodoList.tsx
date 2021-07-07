import React from 'react';
import { TodoListItem } from './TodoListItem';

interface Props {
  todos: Todo[];
  toggleTodo: ToggleTodo;
  removeTodo : RemoveTodo;
  selectTodo : SelectTodo;
}

export const TodoList: React.FC<Props> = ({ todos, toggleTodo, removeTodo, selectTodo }) => {
  return (
    <table>
        <thead>
            <tr>
                <td style={{width : "500px"}}>Todo's</td>
                <td>Action</td>
            </tr>
        </thead>
        <tbody>
            {todos.map(todo => (
                <TodoListItem key={todo.text} todo={todo} toggleTodo={toggleTodo} removeTodo={removeTodo} selectTodo={selectTodo} />
            ))}
        </tbody>
    </table>
  );
};