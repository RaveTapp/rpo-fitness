import styles from "./Card.module.css"

function Card(props) {
    return (
        <div className={styles.card}>
            <div className={styles.card_inner}>
                {/* Front Side */}
                <div className={styles.card_front}>
                    <img
                        className={styles.card_image}
                        src={props.imageSrc}
                        alt={props.title}
                    />
                    <h2>{props.title}</h2>
                </div>

                {/* Back Side */}
                <div className={styles.card_back}>
                    <p className={styles.card_description}>{props.description}</p>
                    <button
                        className={styles.discover_button}
                        onClick={() => window.location.href = props.redirectUrl}
                    >
                        Discover
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Card;

