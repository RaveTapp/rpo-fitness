import { WorkoutItem } from "./workoutItem";
import { PlusBtn } from "../plusBtn/plusBtn";
import MenuCSS from "./menu.module.css"

export function Menu() {

    return (
        <div className={MenuCSS.menu}>
            <h1 className={MenuCSS.tekst}>SAVED WORKOUTS</h1>
            <hr />
            <WorkoutItem title={"Leg day A"} />
            <WorkoutItem title={"Leg day B"} />
            <WorkoutItem title={"Leg day C"} />
            <PlusBtn />
        </div>
    );
}