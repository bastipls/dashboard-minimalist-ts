import { faEye, faFilePdf, faFileUpload, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CircularProgress, Tooltip } from '@material-ui/core'
import { useDragAndDrop } from '../../../../hooks/useDragAndDrop'
import { useSelector } from 'react-redux';
import { RootState } from '../../../../state/reducers/index';
import { IUiState } from '../../../../state/reducers/uiReducer';
import { PreviewDocument } from '../../../../components/commons/PreviewDocument';

export const UploadDocument = () => {
    const { loading } =  useSelector((state:RootState):IUiState => state.ui)
    const {getRootProps, getInputProps,isDragActive,isDragReject,acceptedFiles,myFiles} = useDragAndDrop()
  
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
                                {
                                    myFiles.map((file,index:number) => (
                                      
                                            <div key={index} className="upload-documents__container-file-charged">
                                                <div className="upload-documents__file-charged-name">
                                                    <p>{file.name}</p>
                                                </div>
                                                <div  className="upload-documents__file-charged-item">
                                                    <FontAwesomeIcon size="1x"  icon={faEye} />
                                                </div>
                                                <div  className="upload-documents__file-charged-item">
                                                    <FontAwesomeIcon size="1x" icon={faTrash} />
                                                </div>
                                                
                                            
                                            </div>
                                      
                                    
                                    ))
                                }
                           

          
        </div>
        { !!myFiles.length &&  <PreviewDocument file={myFiles[0]}  />}
        </>
    )
}
