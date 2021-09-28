
import { ActionTypeUi } from '../action-types';
import { ActionsUi } from '../actions-interfaces/indexs';

export interface UiState {
    loading:boolean;
}
const initialState:UiState = {
    loading:false,
}
// TODO: cambiar las action ui por load user
const authReducer = (state:UiState=initialState,action:ActionsUi) => {
    switch (action.type) {
        case ActionTypeUi.START_LOADING:
            return {
                ...state,
                loading:true
                

            }
        case ActionTypeUi.FINISH_LOADING:
            return {
                ...state,
                loading:false
            }

        default:
            return state;
    }
}
export default authReducer;