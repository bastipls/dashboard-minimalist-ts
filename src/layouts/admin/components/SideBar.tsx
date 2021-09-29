import {  faBars, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useCallback, useRef } from 'react'
import profileImg from '../../../assets/img/profile.jpg'
import { DropDownMenuItem } from './DropDownMenuItem'
import { MenuItem } from './MenuItem'
import { routesAdmin } from '../../../routers/routes';
import logo from '../../../assets/img/logo.png'
import { useLocation } from 'react-router-dom'
import keycloak from '../../../keycloak';
import { useKeycloak } from '@react-keycloak/web';

//38 MIN
//https://www.youtube.com/watch?v=ES8vJcUqE7s
export const SideBar = () => {
    const ref = useRef<HTMLDivElement | null> (null)
    const handleCloseSideBar = ( ) => {
        ref.current?.classList.toggle("sidebar__close")
    }
    const location = useLocation()
    const { keycloak } = useKeycloak()
    const logout = useCallback(() => {
        keycloak?.logout()
        
      }, [keycloak])
    return (
        <>
        <div ref={ref}  className="sidebar sidebar__close">
            <div className="sidebar__logo-details">
                <div className="sidebar__logo-img">
                    <img src={logo} alt="Logo Apiux" />
                </div>
                <span className="sidebar__logo-name">
                    DOCUX
                </span>
            </div>
            <ul className="sidebar__nav-links">
            {
                routesAdmin.map((route,key) => {
                    if(route.isMenuItem){
                        if(!route.isSubMenu){
                            return ( 
                                <MenuItem key={key} {...route} /> 
                            )
                        }else{
                            return (
                                <DropDownMenuItem location={location} key={key} {...route} />
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
                        <FontAwesomeIcon onClick={logout} id="sidebar__icon-exit"  icon={faSignOutAlt}/>
                    </div>
                </li>
            </ul>
        </div>
        <section className="sidebar__home-section">
            <div className="sidebar__home-content">
                <FontAwesomeIcon onClick={handleCloseSideBar} className="sidebar__bx-menu" icon={faBars} />
                <span className="sidebar__text"></span>
            </div>
        </section>
        </>
    )
    
}
