import React from "react";
import styles from './LineGraph.module.css';
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

const LineChart = () => {
    // Sample data for the line chart
    const data = {
        labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], // X-os
        datasets: [
            {
                label: "Daily BMI",
                data: [100, 80, 70, 60, 50, 80, 100],
                fill: false,
                borderColor: "#92ACE5", 
                tension: 0.1, 
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: "BMI Over Time",
            },
            legend: {
                position: "top",
            },
            tooltip: {
                backgroundColor: "white", 
                titleColor: "black",     
                bodyColor: "black",   
            },
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: "Day",
                    color: "rgba(98,115,152,1)",
                },
                ticks: {
                    color: "rgba(98,115,152,1)",
                },
            },
            y: {
                title: {
                    display: true,
                    text: "BMI",
                    color: "rgba(98,115,152,1)",
                },
                ticks: {
                    color: "rgba(98,115,152,1)",
                },
                beginAtZero: true,       // Ensure scale starts at 0
                suggestedMin: 40,        // Suggest minimum Y value
                suggestedMax: 120,       // Suggest maximum Y value
            },
        },
        layout: {
            padding: {
                top: 10,
                bottom: 10,
                left: 10,
                right: 10,
            },
        },
    };
    
    

    return (
        <div className={styles.lineGraphBMI}>
            <h2>BMI Line Chart</h2>
            <Line data={data} options={options} />
        </div>
    );
};

export default LineChart;