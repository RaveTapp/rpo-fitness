import styles from "./HeadingTwoLeft.module.css";

function HeadingTwoLeft(props) {
    return (
        <h1 className={styles.headingTwoLeft}>{props.name}</h1>
    );
}

export default HeadingTwoLeft;
