import styles from "./Header.module.css";

export const Header = () => {
    return (
        <div className={styles.nav}>
            <div className={styles.navWrapper}>
                <img src="/img/notes.png" alt="note-icon" className={styles.navImg} />
                <h2 className={styles.navTitle}>Todo List</h2>
            </div>
        </div>
    );
};
