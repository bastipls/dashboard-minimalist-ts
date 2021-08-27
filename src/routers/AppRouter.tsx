import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { AdminLayout } from '../layouts/AdminLayout'


export const AppRouter = () => {
    // FIXME: Haacer ruta esto esta sin terminar
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/"  exact render={(props) => <AdminLayout {...props} />} />
                </Switch>
            </div>
        </BrowserRouter>
    )
}
