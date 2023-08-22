import styles from "./TodoItem.module.css";

const TodoItem = (props) => {
    let taskStatus = "note-wrapper-uncompleted";
    if (props.completed) {
        taskStatus = "note-wrapper-completed";
    }

    return (
        <div className={styles[taskStatus]}>
            <h3 className={styles["note-title"]}>{props.title}</h3>
            {/* <p className={styles["note-desc"]}>{props.description}</p> */}
            <div className={styles["button-wrapper"]}>
                <p className={styles["note-status"]}>
                    {props.completed ? "Completed" : "Uncompleted"}
                </p>
                <button className={styles["note-button"]}>Change status</button>
            </div>
        </div>
    );
};

export default TodoItem;
