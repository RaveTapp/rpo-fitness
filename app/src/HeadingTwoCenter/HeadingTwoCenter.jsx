import styles from "./HeadingTwoCenter.module.css";

function HeadingTwoCenter(props) {
    return (
        <h1 className={styles.headingTwoCenter}>{props.name}</h1>
    );
}

export default HeadingTwoCenter;
