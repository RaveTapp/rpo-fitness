import { useParams } from "react-router"
import ExerciseCSS from "./ExerciseShowcase.module.css"
import CSS from "../../main.module.css"

export function ExerciseShowcase(props) {
    let {exerciseId} = useParams();

    return (
        <div className={ExerciseCSS.menu}>
            <div className={ExerciseCSS.mainTitle}>
                <h1 className={CSS.tekst}>{props.title}</h1>
            </div>
            <div className={ExerciseCSS.imageContainer}>
                <img src="" alt="" />
                <img src="" alt="" />
            </div>
            <p className={`${CSS.tekst} ${ExerciseCSS.tekst}`}>{props.exerText}</p>
        </div>
    );
}