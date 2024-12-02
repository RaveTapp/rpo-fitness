import styles from "./CalcBMI.module.css";

function CalcBMI() {

    return (
        <div className={styles.BMI}>
            <h3>CALCULATE YOUR BMI</h3>
            <p>Weight</p>
            <p>Height</p>
            <button>Calculate</button>
            <p>Your BMI:</p>
        </div>
    );

}

export default CalcBMI