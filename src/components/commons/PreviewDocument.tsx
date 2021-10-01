import React from "react"

interface PropsPreviewDocument{
    file:File,
}
export const PreviewDocument = React.memo(({file}:PropsPreviewDocument) => {
    const pathUrl = URL.createObjectURL(file)
    console.log(pathUrl)

    return (
        <div className="commons__preview-thumbail-container">
            <iframe src={pathUrl+"#toolbar=1&zoom=71"} title={file.name} className="commons__preview-thumbail-pdf"  allowFullScreen    >
                <a href={pathUrl} id="enlaceDescargarPdf" download={pathUrl}>
                    Tu dispositivo no puede visualizar los PDF, da click aquí para descargarlo
                </a>
            </iframe  > 
        </div>
    )
})
