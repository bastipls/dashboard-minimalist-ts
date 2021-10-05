
import { ActionTypesMaintainers } from '../action-types/maintainersTypes';
import { IList } from '../../interfaces/maintainers/IList';
import { Dispatch } from 'redux';
import { ICompany } from '../../interfaces/maintainers/IComapny';
import { ActionsMaintaners } from '../actions-interfaces/IMaintainers';


export const stratLoadingLists = () =>  async (dispatch:Dispatch) =>{
    
}
const loadLists = (lists:IList[]) => ({
    type:ActionTypesMaintainers.LOAD_LISTS,
    payload:lists
})
const addList = (list:IList) => ({
    type:ActionTypesMaintainers.ADD_LIST,
    payload:list
})
const updateList = (list:IList) => ({
    type:ActionTypesMaintainers.UPDATE_LIST,
    payload:list
})
const deleteList = (idList:number) => ({
    type:ActionTypesMaintainers.DELETE_LIST,
    payload:idList
})

const loadCompaies = (companies:ICompany[]) => ({
    type:ActionTypesMaintainers.LOAD_LISTS,
    payload:companies
})
const addCompany = (comapny:ICompany) => ({
    type:ActionTypesMaintainers.ADD_COMPANY,
    payload:comapny
})
const updateCompany = (company:ICompany) => ({
    type:ActionTypesMaintainers.UPDATE_COMPANY,
    payload:company
})
const deleteCompany = (idComapny:number) => ({
    type:ActionTypesMaintainers.DELETE_COMPANY,
    payload:idComapny
})


