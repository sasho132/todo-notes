import styles from "./TodoItem.module.css";

const TodoItem = (todo) => {
    let todoStatus = `${styles.noteWrapper}`;
    if (todo.completed) {
        todoStatus += ` ${styles.completed}`;
    }

    let statusIcon = "/img/completed.png";
    if (todo.completed) {
        statusIcon = "/img/uncompleted.png";
    }

    return (
        <div className={todoStatus}>
            <h3 className={styles.noteTitle}>{todo.title}</h3>
            {/* <p className={styles.noteDesc}>{props.description}</p> */}
            <div className={styles.buttonWrapper}>
                <p className={styles.noteStatus}>{todo.completed ? "Completed" : "Uncompleted"}</p>
                <button className={styles.noteButton} onClick={() => todo.onClick(todo)}>
                    <img src={statusIcon} alt="check" className={styles.btnImg} />
                </button>
            </div>
        </div>
    );
};

export default TodoItem;
