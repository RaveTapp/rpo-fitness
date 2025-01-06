import React, { useState } from 'react';
import styles from './HydrationComponent.module.css';

const HydrationComponent = () => {
  const [waterAmount, setWaterAmount] = useState(0);
  const [customAmount, setCustomAmount] = useState('');
  const [glassCount, setGlassCount] = useState(0); // Stevilo napolnjenih kozarcev

  const MAX_WATER = 3000;
  const percentage = Math.min((waterAmount / MAX_WATER) * 100, 100).toFixed(1);
  const waterInLiters = (waterAmount / 1000).toFixed(1);

  const handleAddWater = (amount) => {
    let newAmount = waterAmount + amount;

    if (newAmount >= MAX_WATER) {
      setGlassCount(glassCount + 1); // Povečamo število napolnjenih kozarcev
      newAmount = newAmount - MAX_WATER; // Ponastavimo količino vode, ko dosežemo 3 litre
    }

    setWaterAmount(newAmount);
  };

  const handleCustomAdd = () => {
    const customValue = parseInt(customAmount);
    if (!isNaN(customValue) && customValue > 0) {
      handleAddWater(customValue);
      setCustomAmount('');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.glass}>
        <div
          className={styles.waterLevel}
          style={{ height: `${percentage}%` }}
        >
          <span className={styles.percentage}>{percentage}%</span>
        </div>
      </div>
      <p className={styles.liters}>{waterInLiters} / 3L</p>
      <p className={styles.glassCount}>Cups filled: {glassCount}</p>
      <div className={styles.buttons}>
        <button onClick={() => handleAddWater(100)}>+100 ml</button>
        <button onClick={() => handleAddWater(250)}>+250 ml</button>
        <button onClick={() => handleAddWater(500)}>+500 ml</button>
      </div>
      <div className={styles.customInput}>
        <input
          type="number"
          value={customAmount}
          onChange={(e) => setCustomAmount(e.target.value)}
          placeholder="Custom ml"
        />
        <button onClick={handleCustomAdd}>Add Custom Amount</button>
      </div>
    </div>
  );
};

export default HydrationComponent;
