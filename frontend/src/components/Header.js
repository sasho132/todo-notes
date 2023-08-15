import styles from "./Header.module.css";

const Header = () => {
    return (
        <div className={styles["nav"]}>
            <div className={styles["nav-wrapper"]}>
                <img src="/img/notes.png" alt="note-icon" className={styles["nav-img"]} />
                <h2 className={styles["nav-title"]}>Todo List</h2>
            </div>
        </div>
    );
};

export default Header;
