import React, { useRef } from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile, faCaretDown } from '@fortawesome/free-solid-svg-icons';
type Props = {
    title:string,
}
export const DropDownMenuItem = ({title}:Props) => {
    const ref = useRef<HTMLSpanElement | null>(null)
    const handeOnClickArrow = () =>{
        const parentElement = ref.current?.parentElement?.parentElement;
        parentElement?.classList.toggle("sidebar__show-menu")
        console.log(parentElement)
    }
    return (
        <li>
            <div className="sidebar__icon-link">
                <Link  to="#" >
                    <FontAwesomeIcon icon={faSmile} />
                    <span className="sidebar__link-name">{title}</span>
                </Link>
                <span onClick={handeOnClickArrow} ref={ref}><FontAwesomeIcon  className="sidebar__arrow" icon={faCaretDown} /></span>
            </div>
            <ul className="sidebar__sub-menu ">
                <li>
                    <Link className="sidebar__link-name" to="#">Web Desing</Link>
                </li>
                <li>
                    <Link to="#">Card Desing</Link>
                </li>
                <li>
                    <Link to="#">Login Form</Link>
                </li>
            </ul>
    </li>
    )
}
