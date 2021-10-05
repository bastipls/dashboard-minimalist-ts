import MaterialTable, { Column } from 'material-table'
import React from 'react'
import { localizationMaterialTable } from '../../../../constants/materialTableConfig'



export const TableLists = () => {
    const columns:Column<object>[]  = [
        {
            title:"ID",
            field:"id",
            type:"numeric",
            align:"left"
        },
        {
            title:"Nombre",
            field:"namespace",
    
            type:"string"
        },
        {
            title:"Tipo",
            field:"type",
  
            type:"string"
        },
        {
            title:"Usuario",
            field:"user",

            type:"string"
        },
        {
            title:"Fecha",
            field:"date",
            type:"date",
     
        },
        {
            title:"Actividad",
            field:"activity",
            type:"string",
            filtering:false,   
        },
        {
            title:"Acción",
            field:"action",
            type:"string",
            filtering:false,   
        }
    ]
    return (
        <MaterialTable 
            title=""
            columns={columns}
            style={{minWidth:"100%"}}
            data={[]}
            localization={localizationMaterialTable}
            actions={[
                // {
                //     icon: 'refresh',
                //     tooltip: `Refrescar`,
                //     isFreeAction: true,
                //     onClick:()=> dispatch(startLoadingFiles())
                // },
                // rowData =>({
                //     tooltip:'Descargar',
                //     icon:() =>(  <FontAwesomeIcon icon={faDownload} />),
                //     onClick:(e,rowData) => downloadUrl(rowData.mediaLink)
                    
                // }),
      
            ]}
            options={{
                search:false,
                loadingType:'linear',
                pageSize:10,
                actionsColumnIndex:-1,
                filtering: false
            }}
        
        />
    )
}
