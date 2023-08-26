import { useEffect, useState } from "react";

import * as TodoService from "../services/TodoService";

import TodoItem from "./TodoItem";
import styles from "./TodoList.module.css";

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [newTask, setNewTask] = useState("");

    useEffect(() => {
        TodoService.getAllTodos().then((todos) => setTodos(todos));
    }, []);

    const statusButtonHandler = (todo) => {
        TodoService.fetchTodoNote(todo).then((changedTodo) => {
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

    return (
        <div className={styles.notesBody}>
            <div className={styles.notesContainer}>
                <div className={styles.inputWrapper}>
                    <input
                        type="text"
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                        className={styles.input}
                        placeholder="Enter name of the new task here..."
                    />
                    <button className={styles.inputButton} onClick={addNoteHandler}>
                        Add Task
                    </button>
                </div>
                {todos.map((todo) => (
                    <TodoItem key={todo.id} {...todo} onClick={statusButtonHandler} />
                ))}
            </div>
        </div>
    );
};

export default TodoList;
