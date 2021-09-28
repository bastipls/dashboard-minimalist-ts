import { useKeycloak } from "@react-keycloak/web"
import { useCallback } from "react";
import keycloak from '../../keycloak';

export const LoginLayout = () => {
    const { keycloak } = useKeycloak()
    const login = useCallback(() => {
        keycloak?.login()
      }, [keycloak])
    return (
        <div>
            <h1>Hola login</h1>
            <button  type="button" onClick={login}>
            login
            </button>
        </div>
    )
}
