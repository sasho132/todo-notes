import { TodoActions } from "../todo-list/TodoListConstants";
import styles from "./TodoItem.module.css";

export const TodoItem = ({ todo, changeStatusClick, userActionClick }) => {
    let todoStatus = `${styles.noteWrapper}`;
    if (todo.completed) {
        todoStatus += ` ${styles.completed}`;
    }

    let statusIcon = "/img/completed.svg";
    if (todo.completed) {
        statusIcon = "/img/uncompleted.svg";
    }

    return (
        <div className={todoStatus}>
            <h3 className={styles.todoTitle}>{todo.title}</h3>
            <div className={styles.buttonWrapper}>
                {/* <p className={styles.noteStatus}>{todo.completed ? "Completed" : "Uncompleted"}</p> */}
                <button
                    className={styles.noteButton}
                    onClick={() => userActionClick(todo.id, TodoActions.Info)}>
                    <img src="/img/edit.svg" alt="check" className={styles.btnImg} />
                </button>
                <button
                    className={styles.noteButton}
                    onClick={() => userActionClick(todo.id, TodoActions.Delete)}>
                    <img src="/img/delete.svg" alt="delete-button" className={styles.btnImg} />
                </button>
                <button className={styles.noteButton} onClick={() => changeStatusClick(todo)}>
                    <img src={statusIcon} alt="check" className={styles.btnImg} />
                </button>
            </div>
        </div>
    );
};
