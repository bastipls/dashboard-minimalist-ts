import  { useRef } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { RoutesAdmin } from '../../../routers/routes';
import { Location } from "history";
import { SubMenuItem } from './SubMenuItem';
interface PropsDropDown extends RoutesAdmin{
    location:Location
}
export const DropDownMenuItem = (props:PropsDropDown ) => {
    const ref = useRef<HTMLSpanElement | null>(null);
    
    const handeOnClickArrow = () =>{
        const parentElement = ref.current?.parentElement?.parentElement;
        parentElement?.classList.toggle("sidebar__show-menu")
      
    }

    return (
        <li>
            <div className="sidebar__icon-link">
                <Link  to="#" >
                    <FontAwesomeIcon icon={props.icon} />
                    <span className="sidebar__link-name">{props.name}</span>
                </Link>
                <span onClick={handeOnClickArrow} ref={ref}><FontAwesomeIcon  className="sidebar__arrow" icon={faCaretDown} /></span>
            </div>
            <SubMenuItem {...props} />
            {/* <ul  className="sidebar__sub-menu ">
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
            </ul> */}
    </li>
    )
}
