
import { BrowserRouter, Switch } from 'react-router-dom'
import { AdminLayout } from '../layouts/admin/AdminLayout';
import { LoginLayout } from '../layouts/login/LoginLayout'
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { Redirect } from 'react-router';


export const AppRouter = () => {
    // FIXME: Haacer ruta esto esta sin terminar
    const access:string = "holasoyeltokentemporal"
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <PublicRoute  
                        path="/login" 
                        component={LoginLayout}
                        isAuthenticated={!!access}
                        />
                    <PrivateRoute  
                        path="/admin" 
                        component={AdminLayout}
                        isAuthenticated={!!access}

                        />
                    <Redirect from="/" to="/login" />
                </Switch>
            </div>
        </BrowserRouter>
    )
}
