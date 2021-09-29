
import { IToken } from '../../interfaces/IToken';
import { ActionTypeAuth } from '../action-types';
import { ActionsAuth } from '../actions-interfaces/IAuth';

export interface IAuthState {
    tokenInfo:IToken | null
}
const initialState:IAuthState = {
    tokenInfo:null
}
// TODO: cambiar las action ui por load user
const authReducer = (state:IAuthState=initialState,action:ActionsAuth) => {
    switch (action.type) {
        case ActionTypeAuth.LOAD_USER_TOKEN:
            return {
                ...state, 
                tokenInfo:action.payload
            }

        default:
            return state;
    }
}
export default authReducer;