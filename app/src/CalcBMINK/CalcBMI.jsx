import React, { useState } from 'react';
import styles from './CalcBMI.module.css';

function CalcBMI() {
    const [weight, setWeight] = useState('70.0');
    const [height, setHeight] = useState('170.0');
    const [bmi, setBmi] = useState(null);
    const [status, setStatus] = useState('');
    const [weightError, setWeightError] = useState('');
    const [heightError, setHeightError] = useState('');

    const saveBMIToDatabase = async (weight, height) => {
        try {
            const userId = 1; // Posodobi s trenutno prijavljenim uporabnikom
            const response = await fetch("http://localhost:3000/api/bmi", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ userId, teza: weight, visina: height }),
            });

            const data = await response.json();
            if (response.ok) {
                console.log(data.message);
            } else {
                console.error(data.error);
            }
        } catch (error) {
            console.error("Napaka pri pošiljanju podatkov:", error);
        }
    };

    const calculateBMI = () => {
        const parsedWeight = parseFloat(weight);
        const parsedHeight = parseFloat(height);

        let valid = true;

        if (isNaN(parsedWeight) || parsedWeight <= 0) {
            setWeightError("Prosimo vnesite veljavno težo");
            valid = false;
        } else {
            setWeightError("");
        }

        if (isNaN(parsedHeight) || parsedHeight <= 0) {
            setHeightError("Prosimo vnesite veljavno višino");
            valid = false;
        } else {
            setHeightError("");
        }

        if (valid) {
            const heightInMeters = parsedHeight / 100;
            const bmiValue = parsedWeight / (heightInMeters * heightInMeters);
            setBmi(bmiValue.toFixed(2));

            if (bmiValue < 18.5) {
                setStatus("underweight");
            } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
                setStatus("normal");
            } else {
                setStatus("overweight");
            }

            // Pošlji podatke v bazo
            saveBMIToDatabase(parsedWeight, parsedHeight);
        }
    };

    const handleWeightInput = (value) => {
        if (value === '' || /^[0-9]+(\.[0-9]{0,1})?$/.test(value)) {
            setWeight(value);
        }
    };

    const handleHeightInput = (value) => {
        if (value === '' || /^[0-9]+(\.[0-9]{0,1})?$/.test(value)) {
            setHeight(value);
        }
    };

    return (
        <div className={styles.calcBMIContainer}>
            <h3>IZRAČUNAJ SVOJ BMI</h3>

            <div className={styles.inputGroup}>
                <label htmlFor="weight">Teža (kg):</label>
                <div className={styles.inputWithSlider}>
                    <input
                        type="text"
                        id="weight"
                        value={weight}
                        onChange={(e) => handleWeightInput(e.target.value)}
                        className={`${styles.numberInput} ${weightError ? styles.errorInput : ''}`}
                        placeholder="Teža"
                    />
                    <input
                        type="range"
                        min="30"
                        max="200"
                        value={parseFloat(weight) || 30}
                        onChange={(e) => setWeight(e.target.value)}
                        className={styles.slider}
                    />
                </div>
                {weightError && <p className={styles.errorText}>{weightError}</p>}
            </div>

            <div className={styles.inputGroup}>
                <label htmlFor="height">Višina (cm):</label>
                <div className={styles.inputWithSlider}>
                    <input
                        type="text"
                        id="height"
                        value={height}
                        onChange={(e) => handleHeightInput(e.target.value)}
                        className={`${styles.numberInput} ${heightError ? styles.errorInput : ''}`}
                        placeholder="Višina"
                    />
                    <input
                        type="range"
                        min="100"
                        max="220"
                        value={parseFloat(height) || 100}
                        onChange={(e) => setHeight(e.target.value)}
                        className={styles.slider}
                    />
                </div>
                {heightError && <p className={styles.errorText}>{heightError}</p>}
            </div>

            <button className={styles.calculateBtn} onClick={calculateBMI}>
                Izračunaj
            </button>

            {bmi && (
                <div className={styles.result}>
                    <p>Vaš BMI: {bmi}</p>
                    <div
                        className={`${styles.bmiCircle} ${styles[status]}`}
                    ></div>
                </div>
            )}
        </div>
    );
}

export default CalcBMI;
