import { ActionTypeUi } from '../action-types';
import { ActionsUi } from '../actions-interfaces/index';

export interface UiState {
    loading:boolean;
}
const initialState:UiState = {
    loading:false,
}


const uiReducer = (state:UiState=initialState,action:ActionsUi) => {
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
export default uiReducer;