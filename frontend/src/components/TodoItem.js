import styles from "./TodoItem.module.css";

const TodoItem = (props) => {
    let taskStatus = "note-wrapper";
    if (props.completed) {
        taskStatus += " completed";
    }

    return (
        <div className={styles[taskStatus]}>
            <h3 className={styles["note-title"]}>{props.title}</h3>
            <p className={styles["note-desc"]}>{props.description}</p>
            <p className={styles["note-status"]}>{props.completed ? "Complete" : "Incomplete"}</p>
            <button className={styles["note-button"]}>Change status</button>
        </div>
    );
};

export default TodoItem;
