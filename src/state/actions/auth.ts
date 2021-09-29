
import { ActionTypeAuth } from "../action-types";
import { IToken } from '../../interfaces/IToken';
import { KeycloakTokenParsed } from "keycloak-js";



export const loadTokenUser = (token:KeycloakTokenParsed | IToken | undefined) => ({
    type:ActionTypeAuth.LOAD_USER_TOKEN,
    payload:token
})