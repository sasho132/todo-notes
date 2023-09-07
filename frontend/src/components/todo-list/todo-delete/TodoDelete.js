import styles from "./TodoDelete.module.css";

export const TodoDelete = ({ todo, onClose, deleteActionClick }) => {
    return (
        <>
            <section className={styles.modal}>
                <div className={styles.headingWrapper}>
                    <h2 className={styles.todoHeading}>Confirm delete</h2>
                    <button className={styles.btnClose} onClick={onClose}>
                        <img src="/img/close-1.svg" alt="close" className={styles.closeModalIcon} />
                        <img
                            src="/img/close-2.svg"
                            alt="close"
                            className={styles.closeModalIconHover}
                        />
                    </button>
                </div>

                <p className={styles.todoText}>Are you sure you want delete {todo.title}?</p>

                <div className={styles.btnWrapper}>
                    <button className={`${styles.btn} ${styles.btnCancel}`} onClick={onClose}>
                        Cancel
                    </button>
                    <button
                        className={`${styles.btn} ${styles.btnDelete}`}
                        onClick={() => deleteActionClick(todo.id)}
                        type="submit">
                        Delete
                    </button>
                </div>
            </section>
            <div className={styles.overlay}></div>
        </>
    );
};
