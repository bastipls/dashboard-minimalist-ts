
import { localizationMaterialTable } from '../../../../constants/materialTableConfig'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../state/reducers/index';
import { IMaintainersState } from '../../../../state/reducers/maintainersReducer';
import { stratLoadingCompanies, startDeleteCompany, startAddCompany, startUpdateCompany } from '../../../../state/actions-creators/maintainers';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { ICompany } from '../../../../interfaces/maintainers/IComapny';
import MaterialTable, { Column } from 'material-table';

interface PropsTableCompanies {
    loading:boolean
}

export const TableCompanies = ({loading}:PropsTableCompanies) => {
    const dispatch = useDispatch();
    const {companies}:IMaintainersState = useSelector((state:RootState) => state.maintainers)
    const columns:Column<ICompany>[]  = [
        {
            title:"ID",
            field:"id",
            type:"numeric",
            align:"left",
            editable:"never"
        },
        {
            title:"Empresa",
            field:"company",
    
            type:"string"
        },
        {
            title:"Rut",
            field:"rut",
            type:"string"
        },
    ]
    useEffect(() => {
        dispatch(stratLoadingCompanies())
    }, [dispatch])
    const handleAdd = (newData:ICompany)=>{
        return new Promise<void>((resolve,reject) => {
            dispatch(startAddCompany(newData))
            resolve();
        })
    }
    const handleUpdate = (newData:ICompany) => {
        return new Promise<void>((resolve,reject) => {
            dispatch(startUpdateCompany(newData))
            resolve();

        })
    }
    return (
        <MaterialTable 
            title=""
            columns={columns}
            style={{minWidth:"100%"}}
            data={companies}
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
                    onClick:()=> dispatch(stratLoadingCompanies())
                },
                rowData =>({
                    tooltip:'Eliminar',
                    icon:() =>(  <FontAwesomeIcon color="#C60B1E" icon={faTrash} />),
                    onClick:(e) => dispatch(startDeleteCompany(rowData)) 
                    
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
