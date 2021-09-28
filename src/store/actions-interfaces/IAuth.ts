import { Token } from "../../interfaces/IToken";
import { ActionTypeAuth } from "../action-types/authTypes";

interface ILoadUser {
    type:ActionTypeAuth.LOAD_USER,
    payload:Token
}


export type ActionsUi =
        | ILoadUser 

