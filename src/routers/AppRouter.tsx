
import { BrowserRouter, Switch } from 'react-router-dom';
import { AdminLayout } from '../layouts/admin/AdminLayout';
import { LoginLayout } from '../layouts/login/LoginLayout'
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { Redirect } from 'react-router';
import { useKeycloak } from '@react-keycloak/web';
import { useEffect } from 'react';


export const AppRouter = () => {
    // FIXME: Haacer ruta esto esta sin terminar
    const { keycloak,initialized } = useKeycloak()
    // const access:string = "holasoyeltokentemporal"
    console.log("KEYCLOAK AUTH ",keycloak?.authenticated)
    console.log("KEYCLOAK init  ",initialized)

    // useEffect(() => { 
    //     if( initialized){
    //         console.log("YA INICIALIZADO ",initialized)
    //     }
    // }, [initialized])
    // if(!initialized){
    //     return <div>Loading...</div>
    // }
    return (
        <BrowserRouter>
            <div>
                <Switch>
                
                        
                        <PublicRoute  
                            path="/login" 
                            component={LoginLayout}
                            isAuthenticated={keycloak?.authenticated ? keycloak?.authenticated : false}
                            /> 
                        <PrivateRoute  
                            path="/admin" 
                            component={AdminLayout}
                            isAuthenticated={keycloak?.authenticated ? keycloak?.authenticated : false}
    
                            />
                    <Redirect from="/" to="/login" />
                </Switch>
            </div>
        </BrowserRouter>
    )
}
