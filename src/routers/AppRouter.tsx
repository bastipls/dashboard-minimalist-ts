
import { BrowserRouter, Switch } from 'react-router-dom';
import { AdminLayout } from '../layouts/admin/AdminLayout';
import { LoginLayout } from '../layouts/login/LoginLayout'
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { Redirect } from 'react-router';

import KeyCloakService from '../keycloak';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadTokenUser } from '../state/actions/auth';


export const AppRouter = () => {
    const access = KeyCloakService.getToken()
    const dispatch= useDispatch()
    useEffect(() => {
        dispatch(loadTokenUser(KeyCloakService.getAllInfo()))
     
    }, [dispatch])
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
