import { Redirect, Route } from "react-router"


interface IPropsPrivateRoute {
    isAuthenticated:boolean;
    component:React.ElementType;
    [x:string]:any
}

export const PrivateRoute = ({
    isAuthenticated,
    component:Component,
    ...rest
}:IPropsPrivateRoute) => {
    return (
        <Route {...rest}
                render={(props) =>(
                    (isAuthenticated) 
                    ? (<Component {...props} />)
                    : ( <Redirect to="/login" /> )
                )}
        >
            
        </Route>
    )
}
