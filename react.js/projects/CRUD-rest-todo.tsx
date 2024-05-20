import React, { useState, FC } from "react";
// 1. TodoItem, 2. TodoList, 3. ToDoApp, 4. ToDoAddForm, 5. handleButtons
interface TodoItemProps {
    id: number;
    title: string;
    completed: boolean;
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
}
/*** 1. SINGLE TODO ITEM ***/
const TodoItem: FC<TodoItemProps> = ({
    id,
    title,
    completed,
    onToggle,
    onDelete,
}) => {
    const [editMode, setEditMode] = useState(false);
    const [editedTitle, setEditedTitle] = useState(title);
    return (
        <li>
            <input
                type="checkbox"
                checked={completed}
                onChange={() => onToggle(id)}
            />
            {editMode ? (
                <input
                    type="text"
                    value={editedTitle}
                    onChange={e => setEditedTitle(e.target.value)}
                />
            ) : (
                <span className={completed ? "completed" : ""}>
                    {title}
                </span>
            )}
            <button type="button" onClick={() => setEditMode(true)}>
                Edit
            </button>
            <button type="button" onClick={() => onDelete(id)}>
                Delete
            </button>
            )
        </li>
    );
};

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

interface TodoListProps {
    todos: Todo[];
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
}
/*** 2. LIST ALL TODOS ***/
export const TodoList: FC<TodoListProps> = ({
    todos,
    onToggle,
    onDelete,
}) => {
    return (
        <ul>
            {todos.map(todo => (
                <TodoItem
                    key={todo.id}
                    id={todo.id}
                    title={todo.title}
                    completed={todo.completed}
                    onToggle={onToggle}
                    onDelete={onDelete}
                />
            ))}
        </ul>
    );
};

interface TodoFormProps {
    onAdd: (title: string) => void;
}
/*** ADD TODO FORM ***/
const TodoAddForm: FC<TodoFormProps> = ({ onAdd }) => {
    const [title, setTitle] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (title.trim() !== "") {
            onAdd(title);
            setTitle("");
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={e => setTitle(e.target.value)}
                placeholder="Add new..."
            />
            <button type="submit">Add</button>
        </form>
    );
};

/*** APP CONTROLS ***/
export const TodoApp: React.FC = () => {
    const [todos, setTodos] = useState(
        [] as { id: number; title: string; completed: boolean }[],
    );
    // CREATE
    const handleAddTodo = (title: string) => {
        const newTodo = {
            id: Date.now(),
            title: title,
            completed: false,
        };
        setTodos(prevTodos => [...prevTodos, newTodo]);
    };
    // UPDATE
    const handleComplete = (id: number) => {
        setTodos(prevTodos =>
            prevTodos.map(todo =>
                todo.id === id
                    ? { ...todo, completed: !todo.completed }
                    : todo,
            ),
        );
    };
    // DELETE
    const handleDeleteTodo = (id: number) => {
        setTodos(prevTodos =>
            prevTodos.filter(todo => todo.id !== id),
        );
    };

    return (
        <div>
            <h1>Todo List</h1>
            <TodoList
                todos={todos}
                onToggle={handleComplete}
                onDelete={handleDeleteTodo}
            />
            <TodoAddForm onAdd={handleAddTodo} />
        </div>
    );
};
