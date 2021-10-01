import { faEye, faFilePdf, faFileUpload, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CircularProgress, Tooltip } from '@material-ui/core'
import { useDragAndDrop } from '../../../../hooks/useDragAndDrop'
import { useSelector } from 'react-redux';
import { RootState } from '../../../../state/reducers/index';
import { IUiState } from '../../../../state/reducers/uiReducer';
import { PreviewDocument } from '../../../../components/commons/PreviewDocument';
import { useState } from 'react';
import { FileCharged } from './FileCharged';
import { ModalPreviewDocument } from '../../../../components/modals/ModalPreviewDocument';
import { Card } from '../../../../components/cards';


export const UploadDocument = () => {
    const { loading } =  useSelector((state:RootState):IUiState => state.ui)
    const {getRootProps, getInputProps,isDragActive,isDragReject,acceptedFiles,myFiles,setMyFiles} = useDragAndDrop()
    const [modal, setModal] = useState<boolean>(false)
    const resetFile = () => {
        acceptedFiles.splice(acceptedFiles.indexOf(acceptedFiles[0]), 1)
        setMyFiles([])
      }
    return (
        <>
        
        <div className="upload-documents__container-dropzone">
            {/* <h1>Subir archivo</h1> */}
            {/* TODO: CAMBIAR INTERFAZ */}
            <div {...getRootProps()} className="upload-documents__dragdrop-zone">
                            <input  disabled={loading} name="document"  {...getInputProps()}  />
                            { loading && <CircularProgress />}
                            { loading === false &&  acceptedFiles.length ===1 && <p>Cambiar archivo</p>}
                            { acceptedFiles.length !== 1  && loading !== true &&  <FontAwesomeIcon className="upload-documents__icons-files" icon={faFileUpload} />}
                            {!isDragActive && loading !== true && acceptedFiles.length !== 1  && <p>Arrastra y deja aqui, o haga clic para seleccionar</p>}
                            {isDragActive && loading !== true &&  !isDragReject &&  <p>Deja archivos aquí</p>}
                            { loading !== true &&  isDragReject && <p>Tipo de archivo no permitido</p>}

            </div>
           {!!myFiles.length && 
            <div className="upload-documents__container-title">
                    <h4>Documento cargado</h4>
                    <span>
            
                        <hr></hr>
                    </span>
            </div>
            }
                    {
                        myFiles.map((file,index:number) => (
                                <FileCharged setModal={setModal}  key={index} file={file} resetFile={resetFile} />                 
                        ))
                    }
           {modal && 
            <ModalPreviewDocument 
                open={modal}
                setModal={setModal}
                >
                    <Card>
                    <h1>HOLA</h1>
                    </Card>
                </ModalPreviewDocument>
                   } 


          
        </div>
        { !!myFiles.length &&  <PreviewDocument file={myFiles[0]}  />}
        </>
    )
}
