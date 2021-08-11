import { ActionTypeUi } from '../action-types/index';

interface StartLoadingAction {
    type:ActionTypeUi.START_LOADING
}
interface FinishLoadingAction{
    type:ActionTypeUi.FINISH_LOADING
}

export type ActionsUi =
        | StartLoadingAction 
        | FinishLoadingAction
