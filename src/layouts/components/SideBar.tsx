import { faAd, faCaretDown, faSignOutAlt, faSmile } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import profileImg from '../../assets/img/profile.jpg'
import { DropDownMenuItem } from './DropDownMenuItem'

export const SideBar = () => {
    
    return (
        <div className="sidebar sidebar__close">
            <div className="sidebar__logo-details">
                <FontAwesomeIcon  icon={faAd} /> 
                <span className="sidebar__logo-name">
                    Dashboard
                </span>
            </div>
            <ul className="sidebar__nav-links">
                <li>
                    <Link to="#" >
                        <FontAwesomeIcon icon={faSmile} />
                        <span className="sidebar__link-name">Categoria1</span>
                    </Link>
                    <ul className="sidebar__sub-menu sidebar__blank">
                        <li>
                            <Link className="sidebar__link-name" to="#" >
                                Categoria1
                            </Link>
                        </li>
                    </ul>
                </li>
                <DropDownMenuItem  title="Categoria2" />
                <DropDownMenuItem  title="Categoria3" />
                <li>
                    <div className="sidebar__icon-link">
                        <Link to="#" >
                            <FontAwesomeIcon  icon={faSmile} />
                            <span className="sidebar__link-name">Categoria</span>
                        </Link>
                        <FontAwesomeIcon className="sidebar__arrow" icon={faCaretDown} />
                    </div>
                    <ul className="sidebar__sub-menu">
                        <li>
                            <Link className="sidebar__link-name" to="#">HTML CSS</Link>
                        </li>
                        <li>
                            <Link to="#">JS</Link>
                        </li>
                        <li>
                            <Link to="#">Login Form</Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <div className="sidebar__profile-details">
                        <div className="sidebar__porfile-content">
                            <img src={profileImg} alt="" />
                        </div>
                        <div className="sidebar__name-job">
                            <div className="sidebar__profile-name">Bastian Pérez</div>
                            <div className="sidebar__profile-job">Dev. Front-End</div>
                        </div>
                        <FontAwesomeIcon id="sidebar__icon-exit"  icon={faSignOutAlt}/>
                    </div>
                </li>
            </ul>
        </div>
    )
    
}
