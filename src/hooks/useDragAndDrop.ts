import { useCallback, useState } from "react"
import { useDropzone } from "react-dropzone"
import { Toast } from "../utils/sweetAlertMix"

export const useDragAndDrop = () => {
    // SECCION DRAGANDDROP
    const [myFiles, setMyFiles] = useState<File[]>([])

    const onDrop = useCallback(acceptedFiles => {
    console.log(myFiles)
    if (myFiles.length === 0) {
        setMyFiles([...myFiles, ...acceptedFiles]);
    } else if ( acceptedFiles[0]?.name.split(".")[1] !== "pdf" ){
        setMyFiles([])

        return Toast.fire({icon:"error",title:"Solo se permiten PDF"})
    }else { 
        setMyFiles([...acceptedFiles])
    
    }
    }, [myFiles])
    const { getRootProps, getInputProps,isDragActive,isDragReject,acceptedFiles} = useDropzone({
        onDrop,
        maxFiles:1,
        accept:"application/pdf",
        
    })
    

    
    return {
        getRootProps, getInputProps,isDragActive,isDragReject,acceptedFiles,myFiles,setMyFiles
    }
}
