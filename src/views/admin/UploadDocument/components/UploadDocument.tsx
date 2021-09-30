import { faFileUpload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CircularProgress } from '@material-ui/core'
import { useDragAndDrop } from '../../../../hooks/useDragAndDrop'
import { useSelector } from 'react-redux';
import { RootState } from '../../../../state/reducers/index';
import { IUiState } from '../../../../state/reducers/uiReducer';
import { PreviewDocument } from '../../../../components/commons/PreviewDocument';

export const UploadDocument = () => {
    const { loading } =  useSelector((state:RootState):IUiState => state.ui)
    const {getRootProps, getInputProps,isDragActive,isDragReject,acceptedFiles,myFiles,setMyFiles} = useDragAndDrop()
  
    return (
        <div className="upload-documents__container-dropzone">
            {/* <h1>Subir archivo</h1> */}
            <div {...getRootProps()} className="upload-documents__dragdrop-zone">
                            <input  disabled={loading} name="document"  {...getInputProps()}  />
                            { loading && <CircularProgress />}
                            { acceptedFiles.length !== 1  && loading !== true &&  <FontAwesomeIcon icon={faFileUpload} />}
                            {!isDragActive && loading !== true && acceptedFiles.length !== 1  && <p>Arrastra y deja aqui, o haga clic para seleccionar</p>}
                            {isDragActive && loading !== true &&  !isDragReject &&  <p>Deja archivos aquí</p>}
                            { loading !== true &&  isDragReject && <p>Tipo de archivo no permitido</p>}
                            

                            <div>
                                {
                                    myFiles.map((file:any,index:number) => (
                                        <div key={index}>
                                            <div>
                                                <FontAwesomeIcon icon={faFileUpload} />
                                                <h2>{file.name}</h2>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>

                        </div>
                     { myFiles.length &&  <PreviewDocument file={myFiles[0]}  />}
        </div>
    )
}
