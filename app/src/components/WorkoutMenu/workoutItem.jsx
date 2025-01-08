import React, { useState } from "react";

import MenuCSS from "./WorkoutMenu.module.css"
import CSS from "../../main.module.css"
import { Link } from "react-router-dom";

async function deleteItem(itemName, isWorkout){
    if(confirm("Are you sure you want to remove this?")){
        try {
            const response = await fetch(`http://localhost:3000/${isWorkout ? 'deleteWorkout' : 'deleteExercise'}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: itemName
            }),
            });
    
            const data = await response.json();
    
            if (!response.ok) {
                console.log(data.error);
            } else {
                console.log(data.message);
                let url = window.location.href;
                let num = parseInt(url.substring(url.length-1)) - 1;
                if(num >= 1){
                    window.location.replace(window.location.href.substring(0, url.length-1) + num);
                }
            }
        } catch (error) {
            console.log("Error: ", error.message);
        }
    }
}

function editPrompt(props){
    let p = prompt("Vnesi nov naslov:", props.title);

    if(p != null && p != "" && p != props.title){
        editItem(props.title, p, props.isWorkout)
    }
}

async function editItem(old, newName, isWorkout){
    try {
        const response = await fetch(`http://localhost:3000/${isWorkout ? 'editWorkout' : 'editExercise'}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: newName,
            oldName: old
        }),
        });

        const data = await response.json();

        if (!response.ok) {
            console.log(data.error);
        } else {
            console.log(data.message);

            window.location.reload();
        }
    } catch (error) {
        console.log("Error: ", error.message);
    }
}

export function WorkoutItem(props) {
    const [rotateAmount, setRotationAmount] = useState(90);

    const dotClick = () => {
        setRotationAmount(rotateAmount == 90 ? 0 : 90);
    }

    let url = window.location.href;

    return (
        <>
            <div className={MenuCSS.horizontalFlex}>
                <Link reloadDocument to={props.isWorkout ? "/workout/" + props.n + "/exercise/1" : url.substring(0, url.length-1) + props.n}><h2 className={CSS.tekst}>{props.title}</h2></Link>
                <svg className={rotateAmount == 0 ? MenuCSS.activeDots : MenuCSS.dots} fill="#EEEEEE" height="24px" width="24px" viewBox="0 0 32.055 32.055" transform={`rotate(${rotateAmount})`} onClick={dotClick}><path d="M3.968,12.061C1.775,12.061,0,13.835,0,16.027c0,2.192,1.773,3.967,3.968,3.967c2.189,0,3.966-1.772,3.966-3.967 C7.934,13.835,6.157,12.061,3.968,12.061z M16.233,12.061c-2.188,0-3.968,1.773-3.968,3.965c0,2.192,1.778,3.967,3.968,3.967 s3.97-1.772,3.97-3.967C20.201,13.835,18.423,12.061,16.233,12.061z M28.09,12.061c-2.192,0-3.969,1.774-3.969,3.967 c0,2.19,1.774,3.965,3.969,3.965c2.188,0,3.965-1.772,3.965-3.965S30.278,12.061,28.09,12.061z"></path></svg>
            </div>
            <div className={rotateAmount == 0 ? MenuCSS.active : MenuCSS.disabled} onClick={() => editPrompt(props)}>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z" stroke="#EEEEEE"></path> <path d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13" stroke="#EEEEEE"></path> </svg>
                <p className={`${MenuCSS.edit} ${CSS.tekst}`}>Edit</p>
            </div>
            <div className={rotateAmount == 0 ? MenuCSS.active : MenuCSS.disabled} onClick={() => deleteItem(props.title, props.isWorkout)}>
                <svg viewBox="0 0 24 24"><path d="M17 12C17 11.4477 16.5523 11 16 11H8C7.44772 11 7 11.4477 7 12C7 12.5523 7.44771 13 8 13H16C16.5523 13 17 12.5523 17 12Z" fill="#FF0000"></path> <path d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM12 20.9932C7.03321 20.9932 3.00683 16.9668 3.00683 12C3.00683 7.03321 7.03321 3.00683 12 3.00683C16.9668 3.00683 20.9932 7.03321 20.9932 12C20.9932 16.9668 16.9668 20.9932 12 20.9932Z" fill="#FF0000"></path></svg>
                <p className={MenuCSS.redText}>Remove</p>
            </div>
        </>
    );
}