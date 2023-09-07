import { useEffect, useState } from "react";
import * as TodoService from "../../services/TodoService";
import { TodoItem } from "../todo-item/TodoItem";
import { TodoInfo } from "../todo-info/TodoInfo";
import { TodoDelete } from "../todo-delete/TodoDelete";
import { TodoActions } from "./TodoListConstants";
import styles from "./TodoList.module.css";

export const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [newTask, setNewTask] = useState("");
    const [selectedTodo, setSelectedTodo] = useState(null);
    const [todoAction, setTodoAction] = useState(null);

    useEffect(() => {
        TodoService.getAllTodos().then((todos) => setTodos(todos));
    }, []);

    const statusButtonHandler = (todo) => {
        TodoService.changeStatusTodoNote(todo).then((changedTodo) => {
            setTodos((allNotes) =>
                allNotes.map((x) => (x.id === changedTodo.id ? changedTodo : x))
            );
        });
    };

    const addNoteHandler = () => {
        TodoService.addNote(newTask).then((data) => {
            setTodos([...todos, data]);
        });
        setNewTask("");
    };

    const todoActionHandler = (todoId, actionType) => {
        TodoService.getTodoNote(todoId).then((data) => {
            setSelectedTodo(data);
            setTodoAction(actionType);
        });
    };

    const deleteTodoHandler = (todoId) => {
        TodoService.deleteNote(todoId).then(() => {
            TodoService.getAllTodos().then((todos) => setTodos(todos));
            setSelectedTodo(null);
        });
    };

    const closeHandler = () => {
        setSelectedTodo(null);
        setTodoAction(null);
    };

    return (
        <div className={styles.notesBody} onClick={closeHandler}>
            {selectedTodo && todoAction === TodoActions.Info && (
                <TodoInfo todo={selectedTodo} onClose={closeHandler} />
            )}
            {selectedTodo && todoAction === TodoActions.Delete && (
                <TodoDelete
                    todo={selectedTodo}
                    onClose={closeHandler}
                    deleteActionClick={deleteTodoHandler}
                />
            )}

            <div className={styles.notesContainer}>
                <div className={styles.inputWrapper}>
                    <input
                        type="text"
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                        className={styles.input}
                        placeholder="Add new task..."
                    />
                    <button className={styles.inputButton} onClick={addNoteHandler}>
                        Add Task
                    </button>
                    <button className={styles.inputButtonMin} onClick={addNoteHandler}>
                        +
                    </button>
                </div>
                {todos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        changeStatusClick={statusButtonHandler}
                        todoActionClick={todoActionHandler}
                    />
                ))}
            </div>
        </div>
    );
};
