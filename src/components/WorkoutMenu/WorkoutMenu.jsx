import { WorkoutItem } from "./workoutItem";
import { PlusBtn } from "../plusBtn/plusBtn";
import MenuCSS from "./WorkoutMenu.module.css"
import CSS from "../../main.module.css"

export function WorkoutMenu() {

    return (
        <div className={MenuCSS.menu}>
            <div className={MenuCSS.mainTitle}>
                <h1 className={CSS.tekst}>SAVED WORKOUTS</h1>
            </div>
            <hr className={MenuCSS.hr} />
            <ul>
                <li className={MenuCSS.item}>
                    <WorkoutItem title={"Leg day A"} />
                </li>
                <li className={MenuCSS.item}>
                    <WorkoutItem title={"Leg day B"}  />
                </li>
                <li className={MenuCSS.item}>
                    <WorkoutItem title={"Leg day C"}  />
                </li>
            </ul>
            <PlusBtn />
        </div>
    );
}