import styles from "./TodoItem.module.css";

const TodoItem = (props) => {
    let todoStatus = `${styles.noteWrapper}`;
    if (props.completed) {
        todoStatus += ` ${styles.completed}`;
    }

    return (
        <div className={todoStatus}>
            <h3 className={styles.noteTitle}>{props.title}</h3>
            {/* <p className={styles.noteDesc}>{props.description}</p> */}
            <div className={styles.buttonWrapper}>
                <p className={styles.noteStatus}>{props.completed ? "Completed" : "Incompleted"}</p>
                <button className={styles.noteButton} onClick={() => props.onClick(props)}>
                    Change status
                </button>
            </div>
        </div>
    );
};

export default TodoItem;
