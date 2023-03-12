import React, { FC } from 'react';
import style from './styles_ui_global/ginput.module.css';

interface GrinputProps {
    type: string;
    placeholder?: string;
    fileName: string;
    onChange: any;
}

const GInput: FC<GrinputProps> = ({ type, placeholder, fileName, onChange }) => {
    return (
        <>
            {
                type == "file"
                    ?
                    <label
                        className={style.fileupload}
                    >
                        <input type="file" onChange={onChange} />
                        {fileName ? fileName : "put xml file"}
                    </label>
                    :
                    <input type={type} placeholder={placeholder} onChange={onChange} />
            }
        </>
    )
}

export default GInput