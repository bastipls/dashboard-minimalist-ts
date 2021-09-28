import { Redirect, Route } from "react-router"

interface IPropsPublicRoute {
    isAuthenticated:boolean;
    component:React.ElementType;
    [x:string]:any
}
export const PublicRoute = ({
    isAuthenticated,
    component:Component,
    ...rest
}:IPropsPublicRoute) => {
    return (
        <Route {...rest}
                render={(props) =>(
                    // Si es false doy acceso al componente Login que es public
                    (!isAuthenticated) 
                    ? (<Component {...props} />)
                    // Si no existe la ruta y esta logueado lo envio a:
                    : ( <Redirect to="/admin/dashboard" /> )
                )}
        >
            
        </Route>
    )
}
