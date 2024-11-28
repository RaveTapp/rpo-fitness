import MenuCSS from "./OptionsMenu.module.css"
import CSS from "../../main.module.css"

export function OptionsMenu() {


    return (
        <div className={MenuCSS.menu}>
            <div className={MenuCSS.mainTitle}>
                <h1 className={`${CSS.tekst}`}>Test</h1>
                {/* treba passat ime not */}
            </div>
            <hr className={MenuCSS.hr} />
            <ul>
                <li className={MenuCSS.item}>
                    <h2 className={CSS.tekst}>Difficulty</h2>
                </li>
                <li className={MenuCSS.item}>
                    <h2 className={CSS.tekst}>Weekly Sessions</h2>
                </li>
                <li className={MenuCSS.item}>
                    <h2 className={CSS.tekst}>Training intervals</h2>
                </li>
            </ul>

            <div className={MenuCSS.btnContainer}>
                <button className={MenuCSS.btn}>Generate</button>
            </div>

        </div>
    );
}