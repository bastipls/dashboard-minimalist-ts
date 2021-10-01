import {  Backdrop, Button, Fade,  Modal } from "@material-ui/core"
import { PreviewDocument } from "../../commons/PreviewDocument";

import { ProperitesFile } from "./components/ProperitesFile";
interface PropsModalPreivewDocument {
    open:boolean;
    setModal:(modal:boolean) => void;
    children?:JSX.Element | JSX.Element[],
    file:File
}
export const ModalPreviewDocument = ({open,setModal,file,children}:PropsModalPreivewDocument) => {
    const handleClose = () => {
        setModal(false);
    };
    console.log(file)
    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className="components-modal__modal-preview-document "
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
            <Fade in={open}>
            <div className="components-modal__modal-preview-document-container ">
                <span onClick={handleClose} className="components-modal__modal-preview-document-close">X</span>
                <div className="components-modal__modal-preview-document-title">
                    <h4>Previsualización de documento</h4>
                </div>
                <div  className="components-modal__modal-preview-content">

                    <div className="components-modal__modal-preview-document-item">
                        <div className="components-modal__modal-preview-document-info">
                            <ProperitesFile file={file} />

                        </div>
                    </div>
                    <div className="components-modal__modal-preview-document-item">
                        <PreviewDocument file={file} />
                    </div>
                </div>
                <div className="components-modal__modal-preview-document-buttons" >
                    <Button  onClick={handleClose} color="primary"  variant="contained">
                        Cerrar
                    </Button>
                </div>
                {/* <p id="transition-modal-description">react-transition-group animates me.</p> */}        
            </div>
            </Fade>
        </Modal>
        </div>
    )
}
