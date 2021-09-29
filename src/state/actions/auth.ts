
import { ActionTypeAuth } from "../action-types";
import { IToken } from '../../interfaces/IToken';
import jwt_decode from 'jwt-decode';
import Swal from "sweetalert2";
import KeyCloakService from '../../keycloak';



export const loadTokenUser = (token:string) => {
    const tokenInfo = jwt_decode<IToken>(token)
    localStorage.setItem("token",token)
    if(!!tokenInfo.user === false){

        Swal.fire({
            icon:"info",
            title: 'Atención',
            text: 'No tiene permisos, contáctese con el administrador por favor.',
            allowOutsideClick: false,
            heightAuto: false,
        }).then(async ( result) =>{
            if(result.isConfirmed){
                KeyCloakService.doLogout()
            }
        })
    }
    return {
        type:ActionTypeAuth.LOAD_USER_TOKEN,
        payload:tokenInfo
    }
}
export const logoutUser = () => ({
    type:ActionTypeAuth.LOGOUT
})