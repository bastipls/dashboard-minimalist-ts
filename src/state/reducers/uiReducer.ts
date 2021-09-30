
import { ActionTypeUi } from '../action-types';
import { ActionsUi } from '../actions-interfaces/indexs';

export interface IUiState {
    loading:boolean;
}

const initialState:IUiState = {
    loading:false,
}


const uiReducer = (state:IUiState=initialState,action:ActionsUi) => {
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