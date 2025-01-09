import React from "react";
import styles from "./FilterButton.module.css";

const FilterButton = ({ text, icon, onClick }) => {
  return (
    <button className={styles.filterButton} onClick={onClick}>
      <span>{text}</span> <span>{icon}</span>
    </button>
  );
};

export default FilterButton;
