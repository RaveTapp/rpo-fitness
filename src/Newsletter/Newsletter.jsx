import styles from "./Newsletter.module.css"

function Newsletter() {

    return (
        <div className={styles.newsletter}>
            <h3>SUBRSCRIBE TO OUR NEWSLETTER</h3>
            <form action="/submit" method="post">
                <input type="text" id="name" name="name" required/>
                <button>SUBMIT</button>
            </form>
        </div>
    );

}

export default Newsletter