import React, { useEffect, useState } from 'react';
import { useParams } from "react-router"
import ExerciseCSS from "./ExerciseShowcase.module.css"
import CSS from "../../main.module.css"

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

    useEffect(() => {
            getTableOffset("vaja", exerciseId, setData);
    }, []);

    let title = [];
    if (data.length != 0) {
        let titleName = data.rows[0].ime;
        title.push(<h1 className={`${CSS.tekst}`} key={titleName + '_title'} >{titleName}</h1>);
    }

    return (
        <div className={ExerciseCSS.menu}>
            <div className={ExerciseCSS.mainTitle}>
                {title}
            </div>
            <div className={ExerciseCSS.imageContainer}>
                <img src="" alt="" />
                <img src="" alt="" />
            </div>
            <p className={`${CSS.tekst} ${ExerciseCSS.tekst}`}>{props.exerText}</p>
        </div>
    );
}