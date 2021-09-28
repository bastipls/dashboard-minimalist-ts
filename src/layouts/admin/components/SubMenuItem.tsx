import React, { useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { RoutesAdmin, SubMenuRoute } from '../../../routers/routes';
import { Location } from "history";
interface PropsSubMenuItem extends RoutesAdmin{
    location:Location
}
export const SubMenuItem = React.memo((props:PropsSubMenuItem) => {
    const pathNames = props.subMenus?.map( submenu => submenu.fullpath)
    useEffect(() => {
        console.log("Me renderizo", pathNames?.includes(props.location.pathname))
        // console.log("PROPS ",props.subMenus)
       
        
    }, [props.location.pathname,pathNames])
    return (
        <ul  className="sidebar__sub-menu ">
                <li>
                    <Link className="sidebar__link-name " to="#">{props.name}</Link>
                </li>
                {
                    props.subMenus?.map( (menu,key) => (
                    <li key={key}>
                        <NavLink to={menu.layout + menu.path}>
                            <span className="sidebar__active-submenu-indicator"></span>
                            {menu.name}
                        </NavLink>
                    </li>
                    ))
                }
        </ul>
    )
})
