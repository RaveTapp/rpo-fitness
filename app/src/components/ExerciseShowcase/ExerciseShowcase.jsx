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
            setData(data.rows);
        }
    } catch (error) {
        console.log("Error: ", error.message);
    }
}

export function ExerciseShowcase() {
    let {exerciseId} = useParams();

    const [data, setData] = useState([]);
    const [exercise, setExercise] = useState([]);

    useEffect(() => {
            getTableOffset("vaja", exerciseId, setData);
    }, []);

    useEffect(() => {
        if(Object.keys(data).length > 0){
            getExerciseJSON(data[0].ime, setExercise);
        }
    }, [data]);

    let description = [];
    let imagesElem = [];
    if(Object.keys(exercise).length > 0){
        description.splice(0, description.length);
        imagesElem.splice(0, description.length);

        exercise.instructions.forEach((e, i) => {
            description.push(<p className={`${CSS.tekst} ${ExerciseCSS.tekst}`} key={"exerciseDesc" + i}>{e}</p>);
        });

        for(let i = 0; i < 2; i++) {
            let url = "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/" + exercise.images[i];
            imagesElem.push(<img src={url} alt={data[0].ime + " image " + (i+1)} key={data[0].ime + " image " + (i+1)} />)
        };
    }

    return (
        <div className={ExerciseCSS.menu}>
            <div className={ExerciseCSS.mainTitle}>
                <h1 className={`${CSS.tekst}`}>{Object.keys(data).length > 0 ? data[0].ime : "Title not found"}</h1>
            </div>
            <div className={ExerciseCSS.imageContainer}>
                {imagesElem}
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