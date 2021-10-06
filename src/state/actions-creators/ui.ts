import { ActionTypeUi } from "../action-types"



export const startLoading = () =>({
    type:ActionTypeUi.START_LOADING
})
export const finishLoading = () => ({
    type:ActionTypeUi.FINISH_LOADING
})