import React, { useEffect, useState } from 'react'

interface PropsPreviewDocument{
    file:File,

}

export const PreviewDocument = ({file}:PropsPreviewDocument) => {
    const [pathFile, setPathFile] = useState<string | ArrayBuffer |null >(null)
    const getPath = () =>{
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () =>{  
            setPathFile(reader.result)

        }
        reader.onerror = (error) =>{
            console.log("ERROR",error)
        }
        console.log(pathFile)
    }
    useEffect(() => {
        getPath()
    }, [file])
    return (
        <div style={{ width: '100%', height: '900px' }}>
        
            <iframe src={""} width="100%" height="800px">
                <a href={""} id="enlaceDescargarPdf"
                    download={file.name}
                >Tu dispositivo no puede visualizar los PDF, da click aquí para descargarlo</a>
            </iframe>
         
        </div>
    )
}
