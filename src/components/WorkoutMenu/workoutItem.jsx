
import MenuCSS from "./WorkoutMenu.module.css"

export function WorkoutItem(props) {

    return (
        <>
            <h2 className={MenuCSS.tekst}>{props.title}</h2>
        </>
    );
}