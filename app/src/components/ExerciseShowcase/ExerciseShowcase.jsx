import React, { useEffect, useState } from 'react';
import { useParams } from "react-router"
import ExerciseCSS from "./ExerciseShowcase.module.css"
import CSS from "../../main.module.css"

const wholeData = await fetch("https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/dist/exercises.json");
const wholeJSON = await wholeData.json();

async function getTableOffset(table, n, setData){
    try {
        const response = await fetch(`http://localhost:3000/exercisesOffset`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: table,
            limit: 1,
            offset: n - 1
        }),
        });

        const data = await response.json();

        if (!response.ok) {
            console.log(data.error);
        } else {
            console.log(data.rows);
            setData(data);
        }
    } catch (error) {
        console.log("Error: ", error.message);
    }
}

export function ExerciseShowcase(props) {
    let {exerciseId} = useParams();

    const [data, setData] = useState([]);
    const [exercise, setExercise] = useState([]);

    useEffect(() => {
            getTableOffset("vaja", exerciseId, setData);
    }, []);

    useEffect(() => {
        if(Object.keys(data).length > 0){
            getExerciseJSON(data.rows[0].ime, setExercise);
        }
    }, [data]);

    let description = [];
    if(Object.keys(exercise).length > 0){
        description.splice(0, description.length);

        exercise.instructions.forEach((e, i) => {
            description.push(<p className={`${CSS.tekst} ${ExerciseCSS.tekst}`} key={"exerciseDesc" + i}>{e}</p>);
        });
    }

    return (
        <div className={ExerciseCSS.menu}>
            <div className={ExerciseCSS.mainTitle}>
                <h1 className={`${CSS.tekst}`}>{Object.keys(data).length > 0 ? data.rows[0].ime : "Title not found"}</h1>
            </div>
            <div className={ExerciseCSS.imageContainer}>
                <img src="" alt="" />
                <img src="" alt="" />
            </div>
            {description}
        </div>
    );
}

async function getExerciseJSON(title, setExercise){
    if(Object.keys(wholeJSON).length > 0){
        wholeJSON.forEach(e => {
            if(e.name == title){
                return setExercise(e);
            }
        });
    }
}