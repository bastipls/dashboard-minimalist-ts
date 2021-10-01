import { Backdrop, Fade, Modal } from "@material-ui/core"

interface PropsModalPreivewDocument {
    open:boolean;
    setModal:(modal:boolean) => void;
    children?:JSX.Element | JSX.Element[]
}
export const ModalPreviewDocument = ({open,setModal,children}:PropsModalPreivewDocument) => {
    const handleClose = () => {
        setModal(false);
    };
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
            <div className="properties__modal-container base__card">
                <span onClick={handleClose} className="properties__modal-close">X</span>
                <h2 className="properties__modal-title">Propiedades</h2>
                <div className="components-modal__content">
                    {children}
                </div>
                {/* <p id="transition-modal-description">react-transition-group animates me.</p> */}
             
            
            </div>
            </Fade>
        </Modal>
        </div>
    )
}
