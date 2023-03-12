import React, { FC } from 'react';
import style from "./styles_ui_global/gbtn.module.css";

interface GBTN_Props {
    text: string;
    event?: any;
}

const GButton: FC<GBTN_Props> = ({ text, event }) => {
    return (
        <button
            onClick={event ? event : null}
            className={style.mainbtn}
        >
            {text}
        </button>
    )
}

export default GButton