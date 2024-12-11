import ListCSS from "./WorkoutList.module.css"
import MenuCSS from "../WorkoutMenu/WorkoutMenu.module.css"
import CSS from "../../main.module.css"
import { PlusBtn } from "../plusBtn/plusBtn";
import { WorkoutItem } from "../WorkoutMenu/workoutItem";
import { Outlet, Link } from "react-router-dom";

export function WorkoutList(props) {


    return (
        <>
            <div className={ListCSS.menu}>
                <div className={ListCSS.mainTitle}>
                    <h1 className={`${CSS.tekst}`}>{props.title}</h1>
                </div>
                <hr className={ListCSS.hr} />
                <ul>
                    <li className={MenuCSS.item}>
                        <WorkoutItem title="Barbell Lunge" />
                    </li>
                    <li className={MenuCSS.item}>
                        <WorkoutItem title="Front Squat" />
                    </li>
                    <li className={MenuCSS.item}>
                        <WorkoutItem title="Leg Curls" />
                    </li>
                </ul>
                <PlusBtn />
            </div>

            <Outlet />
        </>
    );
}