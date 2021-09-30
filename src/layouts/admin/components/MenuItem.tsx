
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { NavLink } from "react-router-dom"
import { RoutesAdmin } from '../../../routers/routes';



export const MenuItem = (props:RoutesAdmin) => {
    return (
        <li>
        <NavLink  to={props.layout + props.path!} >
            <FontAwesomeIcon icon={props.icon} />
            <span className="sidebar__link-name " >{props.name}</span>
        </NavLink>
        <ul className="sidebar__sub-menu sidebar__blank">
            <li>
                <NavLink className="sidebar__link-name "  to={props.layout + props.path!} >
                    {props.name}
                </NavLink>
            </li>
        </ul>
    </li>
    )
}
