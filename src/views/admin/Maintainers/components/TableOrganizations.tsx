
import { localizationMaterialTable } from '../../../../constants/materialTableConfig'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../state/reducers/index';
import { IMaintainersState } from '../../../../state/reducers/maintainersReducer';
import {  startAddOrganization, startUpdateOrganization, startDeleteOrganization, stratLoadingOrganizations } from '../../../../state/actions-creators/maintainers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import MaterialTable, { Column } from 'material-table';
import { IOrganization } from '../../../../interfaces/maintainers/IOrganization';

interface PropsTableOrganizations {
    loading:boolean
}

export const TableOrganizations = ({loading}:PropsTableOrganizations) => {
    const dispatch = useDispatch();
    const {organizations}:IMaintainersState = useSelector((state:RootState) => state.maintainers)
    const columns:Column<IOrganization>[]  = [
        {
            title:"ID",
            field:"id",
            type:"numeric",
            align:"left",
            editable:"never"
        },
        {
            title:"Nombre",
            field:"name",
            type:"string"
        },
        {
            title:"Dirección",
            field:"address",
            type:"string"
        },
        {
            title:"ID Empresa",
            field:"company_id",
            type:"numeric"
        },

    ]
    useEffect(() => {
        dispatch(stratLoadingOrganizations())
    }, [dispatch])
    const handleAdd = (newData:IOrganization)=>{
        return new Promise<void>((resolve,reject) => {
            dispatch(startAddOrganization(newData))
            resolve();
        })
    }
    const handleUpdate = (newData:IOrganization) => {
        return new Promise<void>((resolve,reject) => {
            dispatch(startUpdateOrganization(newData))
            resolve();

        })
    }
    return (
        <MaterialTable 
            title=""
            columns={columns}
            style={{minWidth:"100%"}}
            data={organizations}
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
                    onClick:()=> dispatch(stratLoadingOrganizations())
                },
                rowData =>({
                    tooltip:'Eliminar',
                    icon:() =>(  <FontAwesomeIcon color="#C60B1E" icon={faTrash} />),
                    onClick:(e) => dispatch(startDeleteOrganization(rowData)) 
                    
                })
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
