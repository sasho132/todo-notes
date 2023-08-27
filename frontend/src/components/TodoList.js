import { useEffect, useState } from "react";
import * as TodoService from "../services/TodoService";
import { TodoItem } from "./TodoItem";
import { TodoInfo } from "./TodoInfo";
import styles from "./TodoList.module.css";

export const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [newTask, setNewTask] = useState("");
    const [selectedTodo, setSelectedTodo] = useState(null);

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

    const deleteTaskHandler = (todoId) => {
        TodoService.deleteNote(todoId).then(() => {
            setTodos([...todos]);
        });
    };

    const todoInfoHandler = (todoId) => {
        TodoService.getTodoNote(todoId).then((data) => {
            setSelectedTodo(data);
        });
    };

    const infoCloseHandler = () => {
        setSelectedTodo(null);
    };

    return (
        <div className={styles.notesBody}>
            {selectedTodo && <TodoInfo todo={selectedTodo} onClose={infoCloseHandler} />}
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
                </div>
                {todos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        changeStatusClick={statusButtonHandler}
                        deleteClick={deleteTaskHandler}
                        infoClick={todoInfoHandler}
                    />
                ))}
            </div>
        </div>
    );
};
