import { WorkoutItem } from "./workoutItem";
import { PlusBtn } from "../plusBtn/plusBtn";
import MenuCSS from "./WorkoutMenu.module.css"

export function WorkoutMenu() {

    return (
        <div className={MenuCSS.menu}>
            <div className={MenuCSS.mainTitle}>
                <h1 className={`${MenuCSS.tekst}`}>SAVED WORKOUTS</h1>
            </div>
            <hr className={MenuCSS.hr} />
            <WorkoutItem title={"Leg day A"} />
            <WorkoutItem title={"Leg day B"} />
            <WorkoutItem title={"Leg day C"} />
            <PlusBtn />
        </div>
    );
}