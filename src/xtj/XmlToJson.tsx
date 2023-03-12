import React, { useState } from 'react';
import GButton from '../UI_global/GButton';
import GInput from '../UI_global/GInput';
import style from './styles_xtj/xtj.module.css';

const XmlToJson = () => {
    const URL_MS = 'http://213.189.201.72:3030/parse-xml';
    let [selectedFile, setSelectedFile] = useState<File>()
    let [nameFile, setNameFile] = useState("")

    const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log("onChange")
        const files = (event.target as HTMLInputElement).files;
        if (files && files.length > 0) {
            setSelectedFile(files[0])
            setNameFile(files[0].name)
        }
    }

    let readyAnswer: string = "";
    const onFileUpload = async () => {
        console.log("click")
        console.log(selectedFile)
        let formData = new FormData();
        if (selectedFile) {
            formData.append("xml", selectedFile, selectedFile.name);
            console.log(formData.get("xml"))
            if (formData) {
                console.log("fromData exists")
                try {
                    const answer = await fetch(URL_MS, {
                        method: "POST",
                        // headers: {
                        //     "Access-Control-Allow-Origin": "*"
                        // },
                        body: formData
                    });
                    console.log(`status req: ${answer.status}`)
                    readyAnswer = await answer.json()
                } catch (e: any) {
                    console.log(e.message)
                }
            } else {
                console.log("formdata is empty")
            }
        }
    }

    return (
        <div className={style.wrap}>
            <GInput type="file" placeholder="put xml file" fileName={nameFile} onChange={onFileChange} />
            <GButton text='sent' event={onFileUpload} />
        </div>
    )
}

export default XmlToJson