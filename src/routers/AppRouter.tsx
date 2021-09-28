
import { BrowserRouter, Switch } from 'react-router-dom'
import { AdminLayout } from '../layouts/admin/AdminLayout';
import { LoginLayout } from '../layouts/login/LoginLayout'
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { Redirect } from 'react-router';
import { useKeycloak } from '@react-keycloak/web';


export const AppRouter = () => {
    // FIXME: Haacer ruta esto esta sin terminar
    const { keycloak } = useKeycloak()
    // const access:string = "holasoyeltokentemporal"
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
