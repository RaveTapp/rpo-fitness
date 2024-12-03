import React from 'react';
import styles from './CalcBMI.module.css';

function CalcBMI() {
    return (
        <div className={styles.BMI}>
            <h3>CALCULATE YOUR BMI</h3>

            <div className={styles.inputGroup}>
                <label htmlFor="weight">Weight (kg): 70</label>
                <input type="range" id="weight" min="30" max="200" value="70" className={styles.slider} />
            </div>

            <div className={styles.inputGroup}>
                <label htmlFor="height">Height (cm): 170</label>
                <input type="range" id="height" min="100" max="220" value="170" className={styles.slider} />
            </div>

            <button className={styles.calculateBtn}>Calculate</button>

            <p className={styles.result}>Your BMI: </p>
        </div>
    );
}

export default CalcBMI;





















/*import React from 'react';
import styles from './CalcBMI.module.css';  // Import CSS Module

function CalcBMI() {
    return (
        <div className={styles.BMI}>
            <h3>CALCULATE YOUR BMI</h3>
            <div className={styles.inputGroup}>
                <label htmlFor="weight">Weight (kg):</label>
                <input type="number" id="weight" placeholder="Enter your weight" />
            </div>
            <div className={styles.inputGroup}>
                <label htmlFor="height">Height (cm):</label>
                <input type="number" id="height" placeholder="Enter your height" />
            </div>
            <button className={styles.calculateBtn}>Calculate</button>
            <p className={styles.result}>Your BMI: </p>
        </div>
    );
}

export default CalcBMI;*/





// import React, { useState } from 'react';
// import styles from './CalcBMI.module.css';

// function CalcBMI() {
//     const [weight, setWeight] = useState(70); // Default weight in kg
//     const [height, setHeight] = useState(170); // Default height in cm
//     const [bmi, setBmi] = useState(null);

//     const calculateBMI = () => {
//         if (weight && height) {
//             const heightInMeters = height / 100; // Convert height from cm to meters
//             const bmiValue = weight / (heightInMeters * heightInMeters);
//             setBmi(bmiValue.toFixed(2)); // Round to 2 decimal places
//         } else {
//             alert('Please enter both weight and height!');
//         }
//     };

//     return (
//         <div className={styles.BMI}>
//             <h3>CALCULATE YOUR BMI</h3>

//             <div className={styles.inputGroup}>
//                 <label htmlFor="weight">Weight (kg): {weight}</label>
//                 <input
//                     type="range"
//                     id="weight"
//                     min="30"
//                     max="200"
//                     value={weight}
//                     onChange={(e) => setWeight(e.target.value)}
//                     className={styles.slider}
//                 />
//             </div>

//             <div className={styles.inputGroup}>
//                 <label htmlFor="height">Height (cm): {height}</label>
//                 <input
//                     type="range"
//                     id="height"
//                     min="100"
//                     max="220"
//                     value={height}
//                     onChange={(e) => setHeight(e.target.value)}
//                     className={styles.slider}
//                 />
//             </div>

//             <button className={styles.calculateBtn} onClick={calculateBMI}>Calculate</button>

//             {bmi && <p className={styles.result}>Your BMI: {bmi}</p>}
//         </div>
//     );
// }

// export default CalcBMI;

