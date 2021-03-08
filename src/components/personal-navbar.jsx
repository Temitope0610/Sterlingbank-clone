import React from 'react'
import { Link } from 'react-router-dom';

class PersonalNavbar extends React.Component{
    render(){
        return(
            <div>
                <div className='hero-navbar'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-2'>
                                <ul className='hero-nav-menu float-start p-3'>
                                   <a href='/personal'><li className='personal-list'>Personal</li></a>
                                    <Link to=''><li>Business</li></Link>
                                </ul>
                            </div>
                            <div className='col-10'>
                                <ul className='hero-nav-menu float-end p-3'>
                                    <li>Investors</li>
                                    <li>Non-Interest</li>
                                    <li>Private</li>
                                    <li>Disapora</li>
                                    <li>About Us</li>
                                    <li>Blog</li>
                                    <li>Branch/ATM Locator</li>
                                    <li>Compliants</li>
                                    <li>Contact Us</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PersonalNavbar;