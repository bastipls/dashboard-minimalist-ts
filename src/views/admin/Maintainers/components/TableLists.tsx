import MaterialTable, { Column } from 'material-table'
import React from 'react'
import { localizationMaterialTable } from '../../../../constants/materialTableConfig'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../state/reducers/index';
import { IMaintainersState } from '../../../../state/reducers/maintainersReducer';
import { startAddList, startDeleteList, startUpdateList, stratLoadingLists } from '../../../../state/actions-creators/maintainers';
import { IList } from '../../../../interfaces/maintainers/IList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

interface PropsTableLists {
    loading:boolean
}

export const TableLists = ({loading}:PropsTableLists) => {
    const dispatch = useDispatch();
    const {lists}:IMaintainersState = useSelector((state:RootState) => state.maintainers)
    const columns:Column<IList>[]  = [
        {
            title:"ID",
            field:"id",
            type:"numeric",
            align:"left",
            editable:"never"
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
            editable:"never"
     
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
    useEffect(() => {
        dispatch(stratLoadingLists())
      
    }, [dispatch])
    const handleAdd = (newData:IList)=>{
        return new Promise<void>((resolve,reject) => {
            dispatch(startAddList(newData))
            resolve();
        })
    }
    const handleUpdate = (newData:IList) => {
        return new Promise<void>((resolve,reject) => {
            dispatch(startUpdateList(newData))
            resolve();

        })
    }
    return (
        <MaterialTable 
            title=""
            columns={columns}
            style={{minWidth:"100%"}}
            data={lists}
            localization={localizationMaterialTable}
            editable={{
                onRowAdd:handleAdd,
                onRowUpdate:handleUpdate,
            }
            }
            actions={[
                {
                    icon: 'refresh',
                    tooltip: `Refrescar`,
                    isFreeAction: true,
                    onClick:()=> dispatch(stratLoadingLists())
                },
                rowData =>({
                    tooltip:'Eliminar',
                    icon:() =>(  <FontAwesomeIcon color="#C60B1E" icon={faTrash} />),
                    onClick:(e) => dispatch(startDeleteList(rowData)) 
                    
                }),
      
            ]}
            isLoading={loading}
            options={{
                search:false,
                loadingType:'overlay',
                pageSize:10,
                actionsColumnIndex:-1,
                filtering: false
            }}
        
        />
    )
}