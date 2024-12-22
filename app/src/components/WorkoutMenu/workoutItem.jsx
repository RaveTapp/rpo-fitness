import React, { useState } from "react";

import MenuCSS from "./WorkoutMenu.module.css"
import CSS from "../../main.module.css"
import { Link } from "react-router-dom";

function removeItem(){
    confirm("Are you sure you want to remove this?");
}

export function WorkoutItem(props) {
    const [rotateAmount, setRotationAmount] = useState(90);

    const dotClick = () => {
        setRotationAmount(rotateAmount == 90 ? 0 : 90);
    }

    return (
        <>
            <div className={MenuCSS.horizontalFlex}>
                <Link to={"/workout/" + props.n }><h2 className={CSS.tekst}>{props.title}</h2></Link>
                <svg className={rotateAmount == 0 ? MenuCSS.activeDots : MenuCSS.dots} fill="#EEEEEE" height="24px" width="24px" viewBox="0 0 32.055 32.055" transform={`rotate(${rotateAmount})`} onClick={dotClick}><path d="M3.968,12.061C1.775,12.061,0,13.835,0,16.027c0,2.192,1.773,3.967,3.968,3.967c2.189,0,3.966-1.772,3.966-3.967 C7.934,13.835,6.157,12.061,3.968,12.061z M16.233,12.061c-2.188,0-3.968,1.773-3.968,3.965c0,2.192,1.778,3.967,3.968,3.967 s3.97-1.772,3.97-3.967C20.201,13.835,18.423,12.061,16.233,12.061z M28.09,12.061c-2.192,0-3.969,1.774-3.969,3.967 c0,2.19,1.774,3.965,3.969,3.965c2.188,0,3.965-1.772,3.965-3.965S30.278,12.061,28.09,12.061z"></path></svg>
            </div>
            <div className={rotateAmount == 0 ? MenuCSS.active : MenuCSS.disabled}>
                <p className={`${MenuCSS.edit} ${CSS.tekst}`}>Edit</p>
            </div>
            <div className={rotateAmount == 0 ? MenuCSS.active : MenuCSS.disabled} onClick={removeItem}>
                <svg viewBox="0 0 24 24"><path d="M17 12C17 11.4477 16.5523 11 16 11H8C7.44772 11 7 11.4477 7 12C7 12.5523 7.44771 13 8 13H16C16.5523 13 17 12.5523 17 12Z" fill="#FF0000"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM12 20.9932C7.03321 20.9932 3.00683 16.9668 3.00683 12C3.00683 7.03321 7.03321 3.00683 12 3.00683C16.9668 3.00683 20.9932 7.03321 20.9932 12C20.9932 16.9668 16.9668 20.9932 12 20.9932Z" fill="#FF0000"></path></svg>
                <p className={MenuCSS.redText}>Remove</p>
            </div>
        </>
    );
}