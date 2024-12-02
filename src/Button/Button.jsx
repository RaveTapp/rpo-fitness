import styles from "./Button.module.css"

function Button(props) {

    return (
        <span className={styles.buttonContainer}>
            <span className={styles.buttonSpan}>
                <button className={styles.button}>{props.name}</button>
            </span>
        </span>
    );
}

export default Button


/*<div className={styles.buttonContainer}>
<button className={styles.button}>{props.name}</button>
</div>*/