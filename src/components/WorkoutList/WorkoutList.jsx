import ListCSS from "./WorkoutList.module.css"
import { PlusBtn } from "../plusBtn/plusBtn";

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
                    
                </li>
                <li className={ListCSS.item}>

                </li>
                <li className={ListCSS.item}>
                    
                </li>
            </ul>
            <PlusBtn />
        </div>
    );
}