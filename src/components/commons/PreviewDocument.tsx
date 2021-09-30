import React from "react"

interface PropsPreviewDocument{
    file:File,

}
{/* <div className="commons__preview-thumbail-container">
<span className="commons__preivew-thumbail-pdf-hidde-borders">

</span>
<iframe src={pathUrl+"#toolbar=1&zoom=-150"} className="commons__preview-thumbail-pdf" allowTransparency allowFullScreen    >
    <a href={pathUrl} id="enlaceDescargarPdf" download={pathUrl}>
        Tu dispositivo no puede visualizar los PDF, da click aquí para descargarlo
    </a>
</iframe  > 




</div> */}
export const PreviewDocument = React.memo(({file}:PropsPreviewDocument) => {
    const pathUrl = URL.createObjectURL(file)
    console.log(pathUrl)

    return (
        <div className="commons__preview-thumbail-container">
            <span className="commons__preivew-thumbail-pdf-hidde-borders">

            </span>
            <iframe src={pathUrl+"#toolbar=1&zoom=-150"} className="commons__preview-thumbail-pdf" allowTransparency allowFullScreen    >
                <a href={pathUrl} id="enlaceDescargarPdf" download={pathUrl}>
                    Tu dispositivo no puede visualizar los PDF, da click aquí para descargarlo
                </a>
            </iframe  > 
           
         
            {/* <img  src={pathUrl.replace("blob:","")}  style={{transform:"scale(1.6)"}} width="100px" height="100px"/> */}
      
         
        </div>
    )
})
