import styles from "./TodoEdit.module.css";
import { useState } from "react";

export const TodoEdit = ({ todo, onClose, onSave }) => {
    const [values, setValues] = useState({
        todoTitle: "",
        todoStatus: todo.completed,
    });

    const handleChange = (event) => {
        if (event.target.type === "checkbox" && event.target.value === "on") {
            setValues({ todoStatus: !todo.completed });
        }

        setValues((state) => ({
            ...state,
            [event.target.name]:
                event.target.type === "checkbox" ? event.target.checked : event.target.value,
        }));
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
                        <div className={styles.input}>
                            <label htmlFor="todoTitle">Type a new title:</label>
                            <input
                                id="todoTitle"
                                name="todoTitle"
                                type="text"
                                onChange={handleChange}
                                placeholder={todo.title}
                            />
                        </div>

                        <div className="checkboxText">Todo status:</div>

                        <div className={`${styles.input} ${styles.checkboxWrapper}`}>
                            <input
                                className={`${styles.tgl} ${styles.tglLight}`}
                                id="todoStatus"
                                name="todoStatus"
                                type="checkbox"
                                checked={values.todoStatus}
                                onChange={handleChange}
                            />
                            <label className={styles.tglBtn} htmlFor="todoStatus" />
                        </div>
                    </div>

                    <div className={styles.btnWrapper}>
                        <button className={`${styles.btn} ${styles.cancelBtn}`} onClick={onClose}>
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className={`${styles.btn} ${styles.saveBtn}`}
                            onClick={() => onSave(todo, values.todoTitle, values.todoStatus)}>
                            Save
                        </button>
                    </div>
                </div>
            </section>

            <div className={styles.overlay} onClick={onClose}></div>
        </>
    );
};
