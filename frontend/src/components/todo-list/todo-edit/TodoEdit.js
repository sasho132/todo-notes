import styles from "./TodoEdit.module.css";
import { useState } from "react";

export const TodoEdit = ({ todo, onClose, onSave }) => {
    const [inputValue, setInputValue] = useState("");

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

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

                <div className={styles.modalContent}>
                    <div className={styles.todoEditWrapper}>
                        <label htmlFor="todoTitle">
                            Type a new title:
                            <input
                                id="todoTitle"
                                name="todoTitle"
                                type="text"
                                value={inputValue}
                                onChange={handleChange}
                                placeholder={todo.title}
                            />
                        </label>

                        <label htmlFor="checkbox">
                            Mark as done:
                            <input type="checkbox" id="checkbox" name="checkbox" />
                        </label>
                    </div>

                    <div className={styles.btnWrapper}>
                        <button className={`${styles.btn} ${styles.cancelBtn}`} onClick={onClose}>
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className={`${styles.btn} ${styles.saveBtn}`}
                            onClick={() => onSave(todo, inputValue)}>
                            Save
                        </button>
                    </div>
                </div>
            </section>

            <div className={styles.overlay} onClick={onClose}></div>
        </>
    );
};
