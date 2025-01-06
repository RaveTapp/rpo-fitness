import styles from "./SectionName.module.css";

function SectionName(props) {
    return (
        <h1 className={styles.sectionName}>{props.name}</h1>
    );
}

export default SectionName;
