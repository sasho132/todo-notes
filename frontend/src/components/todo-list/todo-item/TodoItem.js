import { TodoActions } from "../TodoListConstants";
import styles from "./TodoItem.module.css";

export const TodoItem = ({ todo, changeStatusClick, todoActionClick }) => {
    let todoStatus = `${styles.noteWrapper}`;
    if (todo.completed) {
        todoStatus += ` ${styles.completed}`;
    }

    let statusIcon = "/img/circle.svg";
    if (todo.completed) {
        statusIcon = "/img/completed.svg";
    }

    return (
        <div className={todoStatus}>
            <button className={styles.noteButton} onClick={() => changeStatusClick(todo)}>
                <img src={statusIcon} alt="check" className={styles.btnImg} />
            </button>
            <h3
                className={styles.todoTitle}
                onClick={() => todoActionClick(todo.id, TodoActions.Info)}>
                {todo.title}
            </h3>
            <div className={styles.buttonWrapper}>
                <button
                    className={styles.noteButton}
                    onClick={() => todoActionClick(todo.id, TodoActions.Edit)}>
                    <img src="/img/edit.svg" alt="check" className={styles.btnImg} />
                </button>
                <button
                    className={styles.noteButton}
                    onClick={() => todoActionClick(todo.id, TodoActions.Delete)}>
                    <img src="/img/delete.svg" alt="delete-button" className={styles.btnImg} />
                </button>
            </div>
        </div>
    );
};
