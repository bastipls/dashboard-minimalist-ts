import { IList } from '../../interfaces/maintainers/IList';
import { ICompany } from '../../interfaces/maintainers/IComapny';

import { ActionsMaintaners } from '../actions-interfaces/IMaintainers';
import { ActionTypesMaintainers } from '../action-types';
import { IOrganization } from '../../interfaces/maintainers/IOrganization';

export interface IMaintainersState{
    lists:IList[] 
    companies:ICompany[] 
    organizations:IOrganization[]
}
const initialState:IMaintainersState ={
    lists:[],
    companies:[],
    organizations:[],
}
const maintanersReducer = (state:IMaintainersState=initialState,action:ActionsMaintaners) =>{
    switch (action.type) {
        // Seccion lists
        case ActionTypesMaintainers.LOAD_LISTS:
            return {
                ...state,
                lists:[...action.payload]
            }
        case ActionTypesMaintainers.ADD_LIST:
            return {
                ...state,
                lists:[...state.lists,action.payload]
            }
        case ActionTypesMaintainers.UPDATE_LIST:
            return {
                ...state,
                lists:state.lists.map(list => 
                    list.id === action.payload.id ?
                    action.payload
                    :
                    list
                    )
            }
        case ActionTypesMaintainers.DELETE_LIST:
            return {
                ...state,
                lists:state.lists.filter(list => ( list.id !== action.payload ))
            }
        // Fin seccion lists
        
        // Seccion comapnies

        case ActionTypesMaintainers.LOAD_COMPANIES:
            return {
                ...state,
                companies:[...action.payload]
            }
        case ActionTypesMaintainers.ADD_COMPANY:
            return {
                ...state,
                companies:[...state.companies,action.payload]
            }
        case ActionTypesMaintainers.UPDATE_COMPANY:
            return {
                ...state,
                companies:state.companies.map(company => 
                    company.id === action.payload.id ?
                    action.payload
                    :
                    company
                    )
            }
        case ActionTypesMaintainers.DELETE_COMPANY:
            return {
                ...state,
                companies:state.companies.filter(company => ( company.id !== action.payload ))
            }
        // Fin seccion comapnies
        // Seccion organization
        case ActionTypesMaintainers.LOAD_ORGANIZATIONS:
            return {
                ...state,
                organizations:[...action.payload]
            }
        case ActionTypesMaintainers.ADD_ORGANIZATION:
            return {
                ...state,
                organizations:[...state.organizations,action.payload]
            }
        case ActionTypesMaintainers.UPDATE_ORGANIZATION:
            return {
                ...state,
                organizations:state.organizations.map(organization => 
                    organization.id === action.payload.id ?
                    action.payload
                    :
                    organization
                    )
            }
        case ActionTypesMaintainers.DELETE_ORGANIZATION:
            return {
                ...state,
                organizations:state.organizations.filter(organization => ( organization.id !== action.payload ))
            }
        // Fin seccion organization

        default:
            return state;
    }
}
export default maintanersReducer;