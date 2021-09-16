import { faAd, faBars, faSignOutAlt, faSmile } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import profileImg from '../../assets/img/profile.jpg'
import { DropDownMenuItem } from './DropDownMenuItem'

//38 MIN
//https://www.youtube.com/watch?v=ES8vJcUqE7s
export const SideBar = () => {
    const ref = useRef<HTMLDivElement | null> (null)
    const handleCloseSideBar  = ( ) => {
        ref.current?.classList.toggle("sidebar__close")
    }
    return (
        <>
        <div ref={ref}  className="sidebar">
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
                <DropDownMenuItem  title="Categoria4" />
                <DropDownMenuItem  title="Categoria5" />   
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
        <section className="sidebar__home-section">
            <div className="sidebar__home-content">
                <FontAwesomeIcon onClick={handleCloseSideBar} className="sidebar__bx-menu" icon={faBars} />
                <span className="sidebar__text">Drop Down Sidebaer</span>
            </div>
        </section>
        </>
    )
    
}
