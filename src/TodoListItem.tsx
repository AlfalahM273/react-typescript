import React from 'react';

interface Props {
  todo: Todo;
  toggleTodo: ToggleTodo;
  removeTodo : RemoveTodo;
  selectTodo : SelectTodo;
}

export const TodoListItem: React.FC<Props> = ({ todo, toggleTodo, removeTodo, selectTodo }) => {
  return (
    <tr>
        <td>
            <label
                style={{ textDecoration: todo.complete ? 'line-through' : undefined }}
            >
                #{' '} {todo.id}
                <input
                type="checkbox"
                checked={todo.complete}
                onChange={() => {
                    toggleTodo(todo);
                }}
                />{' '}
                {todo.text}{' '}{' '}
            </label>
        </td>
        <td>
            { !todo.complete &&
                <button
                    onClick={() => {
                        selectTodo(todo);
                    }}
                >
                    Edit
                </button>
            }
            
            <button
                onClick={() => {
                    removeTodo(todo);
                }}
            >
                Remove
            </button>
        </td>
    </tr>
  );
};