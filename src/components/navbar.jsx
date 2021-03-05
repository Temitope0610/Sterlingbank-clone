import React from 'react'
import Logo from '../asset/images/Sterling-Logo.svg'
import {Link} from 'react-router-dom'
import Icon from './icon'

class Navbar extends React.Component {
    constructor(props) {
        super(props)

        this.desktopHoverMenuRef = React.createRef();
        this.mobileMenuRef = React.createRef();
        this.mobileMenuItemRef = React.createRef();
        this.mobileHoverMenuItemRef = React.createRef();

    }

    showDesktopHoverMenu = () => {
        this.desktopHoverMenuRef.current.classList.remove('hide')
    }

    hideDesktopHoverMenu = () => {
        this.desktopHoverMenuRef.current.classList.add('hide')
    }

    mobileNavMenu = () => {
        
        this.mobileMenuRef.current.classList.toggle("change");
        this.mobileMenuItemRef.current.classList.toggle("hide");
        
        if (this.mobileHoverMenuItemRef.current.classList.contains('hide')) {

        } else {
            this.mobileHoverMenuItemRef.current.classList.add('hide')
        }
        
    }

    mobileNavMenuItem = () => {
        this.mobileHoverMenuItemRef.current.classList.toggle("hide");

    }
    
    render() {

        return(
            <div className="nav-bar">
                <div className="container">
                    <img className="logo" src={Logo} alt="sterling-logo"/>


                    <Link onMouseOver={this.showDesktopHoverMenu} to="#" className="navbar-btn desktop">
                        <span className="nav-btn-icon"><Icon icon="lock"/></span>internet banking
                    </Link>

                    {/* mobile navbar btn */}

                    <div className="mobile-menu-icon d-md-block d-lg-none" ref={this.mobileMenuRef} onClick={this.mobileNavMenu}>
                        <div className="bar1"></div>
                        <div className="bar2"></div>
                        <div className="bar3"></div>
                    </div>

                    {/* mobile navbar btn ends */}

                </div>

                <div ref={this.desktopHoverMenuRef} className="desktop-hover-menu hide" >
                    <ul className="list-unstyled" onMouseLeave={this.hideDesktopHoverMenu}  >
                        <li><Link to="#">Sterling Onepay (Internet Banking)</Link></li>
                        <li><Link to="#">Coporate Internet Banking</Link></li>
                    </ul> 
                </div>

                {/* mobile navbar menu */}

                <div onClick={this.mobileNavMenuItem} ref={this.mobileMenuItemRef} className="mobile-navbar-menu w-100 text-center hide text-white pt-3 pb-3 position-absolute animate__animated animate__fadeInDown">
                    <span className="nav-btn-icon"><Icon icon="lock"/></span>internet Banking
                </div>

                <div ref={this.mobileHoverMenuItemRef} className="mobile-hover-menu w-100 hide position-absolute" >
                    <ul className="list-unstyled">
                        <li><Link to="#">Sterling Onepay (Internet Banking)</Link></li>
                        <li><Link to="#">Coporate Internet Banking</Link></li>
                    </ul> 
                </div>




            </div>

        )
    }
}

export default Navbar;