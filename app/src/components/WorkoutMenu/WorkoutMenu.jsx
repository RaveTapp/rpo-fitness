import { WorkoutItem } from "./workoutItem";
import { PlusBtn } from "../plusBtn/plusBtn";
import MenuCSS from "./WorkoutMenu.module.css"
import CSS from "../../main.module.css"
import { Link } from "react-router-dom";

export function WorkoutMenu() {

    return (
        <div className={MenuCSS.menu}>
            <div className={MenuCSS.mainTitle}>
                <h1 className={CSS.tekst}>SAVED WORKOUTS</h1>
            </div>
            <hr className={MenuCSS.hr} />
            <ul>
                <li className={MenuCSS.item}>
                    <WorkoutItem title={"Leg day A"} n="1" />
                </li>
                <li className={MenuCSS.item}>
                    <WorkoutItem title={"Leg day B"} n="2" />
                </li>
                <li className={MenuCSS.item}>
                    <WorkoutItem title={"Leg day C"} n="3" />
                </li>
            </ul>
            <PlusBtn />
        </div>
    );
}