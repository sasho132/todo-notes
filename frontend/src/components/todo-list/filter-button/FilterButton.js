import styles from "./FilterButton.module.css";

export function FilterButton(props) {
    return (
        <button
            type="button"
            className={styles.filterBtn}
            aria-pressed={props.isPressed}
            onClick={() => props.setFilter(props.name)}>
            <span>{props.name}</span>
        </button>
    );
}
