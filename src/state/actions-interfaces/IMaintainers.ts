import { IList } from '../../interfaces/maintainers/IList';
import { ActionTypesMaintainers } from '../action-types/maintainersTypes';
import { ICompany } from '../../interfaces/maintainers/IComapny';
interface ILoadLists {
    type:ActionTypesMaintainers.LOAD_LISTS,
    payload:IList[]
}
interface IAddList {
    type:ActionTypesMaintainers.ADD_LIST,
    payload:IList
}
interface IUpdateList{
    type:ActionTypesMaintainers.UPDATE_LIST,
    payload:IList
}
interface IDeleteList {
    type:ActionTypesMaintainers.DELETE_LIST,
    payload:number
}

interface ILoadComapnies {
    type:ActionTypesMaintainers.LOAD_COMPANIES,
    payload:ICompany[]
}
interface IAddCompany {
    type:ActionTypesMaintainers.ADD_COMPANY,
    payload:ICompany
}
interface IUpdateComany {
    type:ActionTypesMaintainers.UPDATE_COMPANY,
    payload:ICompany,
}
interface IDeleteCompany {
    type:ActionTypesMaintainers.DELETE_COMPANY,
    payload:number
}
export type ActionsMaintaners =
    | ILoadLists
    | IAddList
    | IUpdateList
    | IDeleteList
    
    | ILoadComapnies
    | IAddCompany
    | IUpdateComany
    | IDeleteCompany;