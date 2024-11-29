import OptionCSS from "./OptionsWindow.module.css"
import CSS from "../../main.module.css"

const radioOptions = {
    "Difficulty": ["Beginner", "Intermediate", "Expert"],
    "Weekly Sessions": ["2", "3", "4"],
}

export function OptionsWindow(props) {

    let optionsList = [];

    radioOptions[props.title].forEach(e => {
        optionsList.push(<input type="radio" id={e} name={props.title + "_select"} value={e} key={e + '1'} />);
        optionsList.push(<label htmlFor={e} key={e + '2'}>{e}</label>);
        optionsList.push(<br key={e + '3'} />);
    });

    return (
        <div className={OptionCSS.menu}>
            <div className={OptionCSS.mainTitle}>
                <h1 className={`${CSS.tekst}`}>{props.title}</h1>
            </div>
            
            <form action="">
                {optionsList}
            </form>
        </div>
    );
}