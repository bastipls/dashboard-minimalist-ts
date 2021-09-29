
import { ActionTypeAuth } from "../action-types";
import { IToken } from '../../interfaces/IToken';



export const loadTokenUser = (token:IToken) => ({
    type:ActionTypeAuth.LOAD_USER_TOKEN,
    payload:token
})