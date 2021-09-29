import { IToken } from "../../interfaces/IToken";
import { ActionTypeAuth } from "../action-types/authTypes";

interface ILoadUser {
    type:ActionTypeAuth.LOAD_USER_TOKEN,
    payload:IToken
}
interface ILogOut {
    type:ActionTypeAuth.LOGOUT
}


export type ActionsAuth =
        | ILoadUser 
        | ILogOut

