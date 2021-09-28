import  { useRef } from 'react'
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { RoutesAdmin } from '../../../routers/routes';

export const DropDownMenuItem = (props:RoutesAdmin ) => {
    const ref = useRef<HTMLSpanElement | null>(null)
    const handeOnClickArrow = () =>{
        const parentElement = ref.current?.parentElement?.parentElement;
        parentElement?.classList.toggle("sidebar__show-menu")
        console.log(parentElement)
    }
    return (
        <li>
            <div className="sidebar__icon-link">
                <NavLink  to="#" >
                    <FontAwesomeIcon icon={props.icon} />
                    <span className="sidebar__link-name">{props.name}</span>
                </NavLink>
                <span onClick={handeOnClickArrow} ref={ref}><FontAwesomeIcon  className="sidebar__arrow" icon={faCaretDown} /></span>
            </div>
            <ul className="sidebar__sub-menu ">
                <li>
                    <NavLink className="sidebar__link-name" to="#">{props.name}</NavLink>
                </li>
                {
                    props.subMenus?.map( (menu,key) => (
                    <li key={key}>
                        <NavLink to={menu.layout + menu.path}>{menu.name}</NavLink>
                    </li>
                    ))
                }
            </ul>
    </li>
    )
}
