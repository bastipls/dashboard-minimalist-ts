import { faAd, faBars, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRef } from 'react'
import profileImg from '../../../assets/img/profile.jpg'
import { DropDownMenuItem } from './DropDownMenuItem'
import { MenuItem } from './MenuItem'
import { routesAdmin } from '../../../routers/routes';

//38 MIN
//https://www.youtube.com/watch?v=ES8vJcUqE7s
export const SideBar = () => {
    const ref = useRef<HTMLDivElement | null> (null)
    const handleCloseSideBar = ( ) => {
        ref.current?.classList.toggle("sidebar__close")
    }
    return (
        <>
        <div ref={ref}  className="sidebar sidebar__close">
            <div className="sidebar__logo-details">
                <FontAwesomeIcon  icon={faAd} /> 
                <span className="sidebar__logo-name">
                    Dashboard
                </span>
            </div>
            <ul className="sidebar__nav-links">
            {
                routesAdmin.map(route => {
                    if(route.isMenuItem){
                        if(route.isMenuItem){
                            return ( 
                                <MenuItem {...route} /> 
                            )
                        }else{
                            return (
                                <DropDownMenuItem {...route} />
                            )
                        }

                    }
                    return null
                })
            }
            
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
                <span className="sidebar__text">Drop</span>
            </div>
        </section>
        </>
    )
    
}
