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

                <form action="submit">
                    <label htmlFor="todo-title">Type a new title:</label>
                    <input
                        type="text"
                        value={inputValue}
                        onChange={handleChange}
                        placeholder={todo.title}
                    />
                    <button className={styles.closeBtn} onClick={onClose}>
                        Close
                    </button>
                    <button className={styles.saveBtn} onClick={() => onSave(todo, inputValue)}>
                        Save
                    </button>
                </form>
            </section>

            <div className={styles.overlay}></div>
        </>
    );
};
