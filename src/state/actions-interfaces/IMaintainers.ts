import { IList } from '../../interfaces/maintainers/IList';
import { ActionTypesMaintainers } from '../action-types/maintainersTypes';
import { ICompany } from '../../interfaces/maintainers/IComapny';
import { IOrganization } from '../../interfaces/maintainers/IOrganization';
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



interface ILoadOrganizations {
    type:ActionTypesMaintainers.LOAD_ORGANIZATIONS,
    payload:IOrganization[]
}
interface IAddOrganization {
    type:ActionTypesMaintainers.ADD_ORGANIZATION,
    payload:IOrganization
}
interface IUpdateOrganization {
    type:ActionTypesMaintainers.UPDATE_ORGANIZATION,
    payload:IOrganization,
}
interface IDeleteOrganization {
    type:ActionTypesMaintainers.DELETE_ORGANIZATION,
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
    | IDeleteCompany

    | ILoadOrganizations
    | IAddOrganization
    | IUpdateOrganization
    | IDeleteOrganization;