import React, { useState } from 'react';
interface Props {
    todo?: Todo;
    editTodo: EditTodo;
}
export const EditTodoForm: React.FC<Props> = ({ todo,  editTodo }) => {
    const [text, setText] = useState(todo?.text);

    return (
        <form>
            <input
                style={{width : "500px"}}
                type="text"
                value={text}
                onChange={e => {
                    setText(e.target.value);
                }}
            />
            <button
                type="submit"
                onClick={e => {
                    e.preventDefault();
                    if(todo && text){
                        todo.text = text as string
                        editTodo(todo);
                    }
                    setText('');
                }}
            >
                Save
            </button>
        </form>
    );
};