import { Switch, Route } from 'react-router-dom';
import { IUser } from '../interfaces/IUser';
import { RoutesAdmin } from './routes';

import { Redirect } from 'react-router';
import userTEMP from '../FAKEDATA/user.json'
import { checkValuesInList } from '../utils/checkValuesInList';
interface IPropsRoutesView {
    routes:RoutesAdmin[],
    user:IUser
}

export const RoutesView = ({routes,user}:IPropsRoutesView) => {
 
    return (
        <Switch>
      
    {
        
        routes.map(({component:Component,layout,path,groups:route_groups,isSubMenu,subMenus},key)=>(
            // Verifico si cuenta con el grupo relacionado con el componente  
            checkValuesInList(userTEMP.groups,route_groups)   &&
            ( isSubMenu === false ? 
                <Route 
                    path={layout + path!}
                    exact
                    render={(props) => <Component {...props} />}
                    key={key}
                />
            :
                subMenus?.map(({component:Component,layout,path},key) =>(
                    // Aqui si deseo puedo hacer uan condicion segun los permisos del usuario
                    <Route 
                        path={layout + path}
                        exact
                        render={(props) => <Component {...props} />}
                        key={key}
                    />
                ))
            )
        ))
    }
            <Redirect   to="/admin/dashboard" /> 
        </Switch>
    )
}