import ExerciseCSS from "./ExerciseShowcase.module.css"
import CSS from "../../main.module.css"

export function ExerciseShowcase(props) {


    return (
        <div className={ExerciseCSS.menu}>
                <h1 className={`${CSS.tekst}`}>{props.title}</h1>
        </div>
    );
}