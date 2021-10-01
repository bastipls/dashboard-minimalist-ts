import { faEye, faFilePdf, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Tooltip } from '@material-ui/core'

interface PropsFileCharged{
    resetFile:() => void,
    file:File,
    setModal:(modal:boolean) => void;
}

export const FileCharged = ({resetFile,file,setModal}:PropsFileCharged) => {
    const onShowPreview = () =>{
        setModal(true)
    }
    return (
        <div>
            <div  className="upload-documents__container-file-charged">
                <div className="upload-documents__file-charged-icon">
                    <FontAwesomeIcon size={'2x'} icon={faFilePdf} />
                </div>
                <div className="upload-documents__file-charged-name">
                    <p>{file.name}</p>
                </div>
                <div className="upload-documents__container-items">

                    <Tooltip onClick={onShowPreview} title="Revisar"  placement="bottom" arrow>
                        <div  className="upload-documents__file-charged-item">
                            <FontAwesomeIcon size="1x"  icon={faEye} />
                        </div>
                    </Tooltip>
                    <Tooltip onClick={resetFile}  title="Cancelar"  placement="bottom" arrow>
                        <div  className="upload-documents__file-charged-item">
                            <FontAwesomeIcon size="1x" icon={faTrash} />
                        </div>
                    </Tooltip>
                </div>
            </div>
        </div>
    )
}
