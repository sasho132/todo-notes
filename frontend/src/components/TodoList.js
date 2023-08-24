import TodoItem from "./TodoItem";
import { useEffect, useState } from "react";
import styles from "./TodoList.module.css";

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [newTask, setNewTask] = useState("");

    useEffect(() => {
        fetch("http://localhost:8000/api/todos/").then((res) =>
            res.json().then((result) => {
                setTodos(Object.values(result));
            })
        );
    }, []);

    const statusButtonHandler = (todo) => {
        fetch(`http://localhost:8000/api/todos/${todo.id}/`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({ ...todo, completed: !todo.completed }),
        })
            .then((res) => res.json())
            .then((changedTodo) => {
                setTodos((allNotes) =>
                    allNotes.map((x) => (x.id === changedTodo.id ? changedTodo : x))
                );
            });
    };

    const addNoteHandler = () => {
        let requestOption = {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
                title: newTask,
                description: "",
                completed: false,
            }),
        };

        fetch("http://localhost:8000/api/todos/", requestOption)
            .then((res) => res.json())
            .then((data) => {
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
