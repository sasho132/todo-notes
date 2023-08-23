import TodoItem from "./TodoItem";
import { useEffect, useState } from "react";
import styles from "./TodoList.module.css";

const TodoList = () => {
    const [todos, setTodos] = useState([]);

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

    return (
        <div className={styles["notes-body"]}>
            <div className={styles["notes-container"]}>
                {todos.map((todo) => (
                    <TodoItem key={todo.id} {...todo} onClick={statusButtonHandler} />
                ))}
            </div>
        </div>
    );
};

export default TodoList;
