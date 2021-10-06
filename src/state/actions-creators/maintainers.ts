
import { ActionTypesMaintainers } from '../action-types/maintainersTypes';
import { IList } from '../../interfaces/maintainers/IList';
import { Dispatch } from 'redux';
import { ICompany } from '../../interfaces/maintainers/IComapny';
import { ActionsMaintaners } from '../actions-interfaces/IMaintainers';
import {  addListService, deleteListService, getAllListsService, updateListService } from '../../services/maintainers/listsServices';
import { Toast } from '../../utils/sweetAlertMix';
import Swal from "sweetalert2";
import { addCompanyService, deleteCompanyService, getAllComapniesService, updateCompanyService } from '../../services/maintainers/companiesServices';
import { ActionsUi } from '../actions-interfaces/IUi';
import { startLoading, finishLoading } from './ui';
import { addOrganizationService, deleteOrganizationService, getAllOrganizationsService, updateOrganizationService } from '../../services/maintainers/organizationsServices';
import { IOrganization } from '../../interfaces/maintainers/IOrganization';
// Seccion Lists
export const stratLoadingLists = () =>  async (dispatch:Dispatch<ActionsMaintaners | ActionsUi>) =>{
    try {
        dispatch(startLoading())
        const resp = await getAllListsService();
        dispatch(finishLoading())
        if(resp.status === 200){
            dispatch({
                type:ActionTypesMaintainers.LOAD_LISTS,
                payload:resp.data
            })
        }
    } catch (error) {
        dispatch(finishLoading())
        console.log(error)
    }
}
export const startAddList = (list:IList) => async(dispatch:Dispatch<ActionsMaintaners | ActionsUi>) =>{
    try {
        dispatch(startLoading())
        const resp = await addListService(list)
        dispatch(finishLoading())
        if(resp.status===200){
            dispatch({
                type:ActionTypesMaintainers.ADD_LIST,
                payload:resp.data
            })
            Toast.fire({icon:"success",title:`Lista ${list.namespace} creada `})
        }else{
            Toast.fire({icon:"error",title:`Algo salió mal`})
        }
    } catch (error) {
        dispatch(finishLoading())
        console.log(error)
        Toast.fire({icon:"error",title:`Algo salió mal`})
    }
}
export const startUpdateList = (list:IList) => async(dispatch:Dispatch<ActionsMaintaners | ActionsUi>) =>{
    try {
        dispatch(startLoading())
        const resp = await updateListService(list.id,list)
        dispatch(finishLoading())
        if(resp.status === 200){
            dispatch({
                type:ActionTypesMaintainers.UPDATE_LIST,
                payload:resp.data
            })
            Toast.fire({icon:"success",title:`Lista ${list.namespace} actualizada `})
        }
    } catch (error) {
        dispatch(finishLoading())
        console.log(error)
        Toast.fire({icon:"error",title:`Algo salió mal`})
    }
}
export const startDeleteList = (list:IList) => async(dispatch:Dispatch<ActionsMaintaners | ActionsUi>) =>{
    try {
        
        Swal.fire({
            icon:"warning",
            title:"¿Quieres eliminar la lista?",
            text:`${list.namespace}`,
            input:"checkbox",
            inputValidator: (result):any =>{
                return !result && 'Necesita marcar la casilla'
            },
            inputPlaceholder:"Si estoy deacuerdo",
            confirmButtonColor:"#d33",
            confirmButtonText:"Eliminar",
            showCancelButton:true,
            cancelButtonText:"Cancelar",
            cancelButtonColor:"#3085d6"
            
        }).then( async (result) =>{
            if(result.isConfirmed){
                dispatch(startLoading())
                const resp = await deleteListService(list.id)
                dispatch(finishLoading())
                if(resp.status === 200){
                    dispatch({
                        type:ActionTypesMaintainers.DELETE_LIST,
                        payload:list.id
                    })
                    Toast.fire({icon:"success",title:`Lista ${list.namespace} eliminada `})
                }
                    
            }
        })
            
    } catch (error) {
        dispatch(finishLoading())
        console.log(error)
        Toast.fire({icon:"error",title:`Algo salió mal`})
    }
}
// Fin seccion lists
// Seccion Companies
export const stratLoadingCompanies = () =>  async (dispatch:Dispatch<ActionsMaintaners | ActionsUi >) =>{
    try {
        dispatch(startLoading())
        const resp = await getAllComapniesService();
        dispatch(finishLoading())
        if(resp.status === 200){
            dispatch({
                type:ActionTypesMaintainers.LOAD_COMPANIES,
                payload:resp.data
            })
        }
    } catch (error) {
        dispatch(finishLoading())
        console.log(error)
    }
}

export const startAddCompany = (company:ICompany) => async (dispatch:Dispatch<ActionsMaintaners | ActionsUi>) =>{
    try {
        dispatch(startLoading())
        const resp = await addCompanyService(company);
        dispatch(finishLoading())
        if(resp.status === 200){
            dispatch({
                type:ActionTypesMaintainers.ADD_COMPANY,
                payload:resp.data
            })
            Toast.fire({icon:"success",title:`Empresa ${company.company} creada `})
        }
    } catch (error) {
        dispatch(finishLoading())
        console.log(error)
    }
}
export const startUpdateCompany = (company:ICompany) => async(dispatch:Dispatch<ActionsMaintaners | ActionsUi>) =>{
    try {
        dispatch(startLoading())
        const resp = await updateCompanyService(company.id,company)
        dispatch(finishLoading())
        if(resp.status === 200){
            dispatch({
                type:ActionTypesMaintainers.UPDATE_COMPANY,
                payload:resp.data
            })
            Toast.fire({icon:"success",title:`Empresa ${company.company} actualizada `})
        }
    } catch (error) {
        dispatch(finishLoading())
        console.log(error)
        Toast.fire({icon:"error",title:`Algo salió mal`})
    }
}
export const startDeleteCompany = (company:ICompany) => async(dispatch:Dispatch<ActionsMaintaners | ActionsUi>) =>{
    try {
        
        Swal.fire({
            icon:"warning",
            title:"¿Quieres eliminar la empresa?",
            text:`${company.company}`,
            input:"checkbox",
            inputValidator: (result):any =>{
                return !result && 'Necesita marcar la casilla'
            },
            inputPlaceholder:"Si estoy deacuerdo",
            confirmButtonColor:"#d33",
            confirmButtonText:"Eliminar",
            showCancelButton:true,
            cancelButtonText:"Cancelar",
            cancelButtonColor:"#3085d6"
            
        }).then( async (result) =>{
            if(result.isConfirmed){
                dispatch(startLoading())
                const resp = await deleteCompanyService(company.id)
                dispatch(finishLoading())
                if(resp.status === 200){
                    dispatch({
                        type:ActionTypesMaintainers.DELETE_COMPANY,
                        payload:company.id
                    })
                    Toast.fire({icon:"success",title:`Empresa ${company.company} eliminada `})
                }
                    
            }
        })
            
    } catch (error) {
        dispatch(finishLoading())
        console.log(error)
        Toast.fire({icon:"error",title:`Algo salió mal`})
    }
}
// Fin seccion companies
// Seccion organizations
export const stratLoadingOrganizations = () =>  async (dispatch:Dispatch<ActionsMaintaners | ActionsUi >) =>{
    try {
        dispatch(startLoading())
        const resp = await getAllOrganizationsService();
        dispatch(finishLoading())
        if(resp.status === 200){
            dispatch({
                type:ActionTypesMaintainers.LOAD_ORGANIZATIONS,
                payload:resp.data
            })
        }
    } catch (error) {
        dispatch(finishLoading())
        console.log(error)
    }
}

export const startAddOrganization = (organization:IOrganization) => async (dispatch:Dispatch<ActionsMaintaners | ActionsUi>) =>{
    try {
        dispatch(startLoading())
        const resp = await addOrganizationService(organization);
        dispatch(finishLoading())
        if(resp.status === 200){
            dispatch({
                type:ActionTypesMaintainers.ADD_ORGANIZATION,
                payload:resp.data
            })
            Toast.fire({icon:"success",title:`Organización ${organization.name} creada `})
        }
    } catch (error) {
        dispatch(finishLoading())
        console.log(error)
    }
}
export const startUpdateOrganization = (organization:IOrganization) => async(dispatch:Dispatch<ActionsMaintaners | ActionsUi>) =>{
    try {
        dispatch(startLoading())
        const resp = await updateOrganizationService(organization.id,organization)
        dispatch(finishLoading())
        if(resp.status === 200){
            dispatch({
                type:ActionTypesMaintainers.UPDATE_ORGANIZATION,
                payload:resp.data
            })
            Toast.fire({icon:"success",title:`Organización ${organization.name} actualizada `})
        }
    } catch (error) {
        dispatch(finishLoading())
        console.log(error)
        Toast.fire({icon:"error",title:`Algo salió mal`})
    }
}
export const startDeleteOrganization = (organization:IOrganization) => async(dispatch:Dispatch<ActionsMaintaners | ActionsUi>) =>{
    try {
        
        Swal.fire({
            icon:"warning",
            title:"¿Quieres eliminar la organización?",
            text:`${organization.name}`,
            input:"checkbox",
            inputValidator: (result):any =>{
                return !result && 'Necesita marcar la casilla'
            },
            inputPlaceholder:"Si estoy deacuerdo",
            confirmButtonColor:"#d33",
            confirmButtonText:"Eliminar",
            showCancelButton:true,
            cancelButtonText:"Cancelar",
            cancelButtonColor:"#3085d6"
            
        }).then( async (result) =>{
            if(result.isConfirmed){
                dispatch(startLoading())
                const resp = await deleteOrganizationService(organization.id)
                dispatch(finishLoading())
                if(resp.status === 200){
                    dispatch({
                        type:ActionTypesMaintainers.DELETE_ORGANIZATION,
                        payload:organization.id
                    })
                    Toast.fire({icon:"success",title:`Organización ${organization.name} eliminada `})
                }
                    
            }
        })
            
    } catch (error) {
        dispatch(finishLoading())
        console.log(error)
        Toast.fire({icon:"error",title:`Algo salió mal`})
    }
}
// Fin seccion organizations5