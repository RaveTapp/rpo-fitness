import React, { useEffect, useState } from 'react';
import { WorkoutItem } from "./workoutItem";
import { PlusBtn } from "../plusBtn/plusBtn";
import MenuCSS from "./WorkoutMenu.module.css"
import CSS from "../../main.module.css"
import ErrorBoundary from '../Error/ErrorBoundary';

export async function getTable(table, setData){
    try {
        const response = await fetch(`http://localhost:3000/workouts`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: table
        }),
        });

        const data = await response.json();

        if (!response.ok) {
            console.log(data.error);
        } else if (data && data.rows) {
            console.log(data.rows);
            setData(data.rows);
        }
    } catch (error) {
        console.log("Error: ", error.message);
    }
}

export function WorkoutMenu() {
    const [data, setData] = useState([]);

    useEffect(() => {
        getTable("vadba", setData);
      }, []);

    let workoutsList = [];
    if(data) {
        data.forEach((e, i) => {
            workoutsList.push(
                <li className={MenuCSS.item} key={e.ime + i + '1'} >
                    <WorkoutItem title={e.ime} n={i+1} isWorkout={true}  key={e.ime + i + '2'}/>
                </li>
            );
        });
    }

    return (
        <div className={MenuCSS.menuContainer}>
            <div className={MenuCSS.menu}>
                <div className={MenuCSS.mainTitle}>
                    <h1 className={CSS.tekst}>SAVED WORKOUTS</h1>
                </div>
                <hr className={MenuCSS.hr} />
                <ul>
                    {workoutsList}
                </ul>
                <PlusBtn isWorkout={true} />
            </div>
        </div>
    );
}