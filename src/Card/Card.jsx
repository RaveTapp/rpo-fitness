import styles from "./Card.module.css"

function Card(props) {
    
    return (
        <div className={styles.card}>
            <img className={styles.card_image} src={props.imageSrc} alt={props.title}></img>
            <h2>{props.title}</h2>
        </div>
    );
}

export default Card