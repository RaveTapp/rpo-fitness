import ListCSS from "./WorkoutList.module.css"
import { PlusBtn } from "../plusBtn/plusBtn";
import { ExerciseItem } from "./ExerciseItem";

export function WorkoutList() {


    return (
        <div className={ListCSS.menu}>
            <div className={ListCSS.mainTitle}>
                <h1 className={`${ListCSS.tekst}`}>Test</h1>
                {/* treba passat ime not */}
            </div>
            <hr className={ListCSS.hr} />
            <ul>
                <li className={ListCSS.item}>
                    <ExerciseItem title="Barbell Lunge" />
                </li>
                <li className={ListCSS.item}>
                    <ExerciseItem title="Front Squat" />
                </li>
                <li className={ListCSS.item}>
                    <ExerciseItem title="Leg Curls" />
                </li>
            </ul>
            <PlusBtn />
        </div>
    );
}