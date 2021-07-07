interface Todo {
    id: number;
    text: string;
    complete: boolean;
}
type ToggleTodo = (selectedTodo: Todo) => void;

type AddTodo = (text: string) => void;
type RemoveTodo = (selectedTodo: Todo) => void;
type SelectTodo = (selectedTodo: Todo) => void;
type EditTodo = (selectedTodo: Todo) => void;
