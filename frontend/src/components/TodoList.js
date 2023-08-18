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

    return (
        <div className={styles["notes-body"]}>
            <div className={styles["notes-container"]}>
                {todos.map((todo) => (
                    <TodoItem key={todo.id} {...todo} />
                ))}
            </div>
        </div>
    );
};

export default TodoList;
