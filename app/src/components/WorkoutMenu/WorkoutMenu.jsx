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
                    <Link to="/workout/1">
                        <WorkoutItem title={"Leg day A"} />
                    </Link>
                </li>
                <li className={MenuCSS.item}>
                    <Link to="/workout/2">
                        <WorkoutItem title={"Leg day B"}  />
                    </Link>
                </li>
                <li className={MenuCSS.item}>
                    <Link to="/workout/3">
                        <WorkoutItem title={"Leg day C"}  />
                    </Link>
                </li>
            </ul>
            <PlusBtn />
        </div>
    );
}