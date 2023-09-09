import styles from "./TodoInfo.module.css";

export const TodoInfo = ({ todo, onClose }) => {
    return (
        <>
            <section className={styles.modal}>
                <div className={styles.headingWrapper}>
                    <h2 className={styles.todoHeading}>Todo Info</h2>
                    <button className={styles.btnClose} onClick={onClose}>
                        <img src="/img/close-1.svg" alt="close" className={styles.closeModalIcon} />
                        <img
                            src="/img/close-2.svg"
                            alt="close"
                            className={styles.closeModalIconHover}
                        />
                    </button>
                </div>
                <div>
                    <h3>{todo.title}</h3>
                    <p>{todo.description}</p>
                </div>

                <button className={styles.btn} onClick={onClose}>
                    Close
                </button>
            </section>

            <div className={styles.overlay} onClick={onClose}></div>
        </>
    );
};
