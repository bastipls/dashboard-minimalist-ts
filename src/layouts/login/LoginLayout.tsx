
import KeyCloakService from '../../keycloak';

export const LoginLayout = () => {

    return (
        <div>
            <h1>Hola login</h1>
            <button onClick={() => KeyCloakService.doLogin()} type="button" >
            login
            </button>
        </div>
    )
}
