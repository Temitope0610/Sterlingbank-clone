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
                                   <li><Link to='/personal'className='personal-list active'>Personal</Link></li>
                                    <li><Link to=''>Business</Link></li>
                                </ul>
                            </div>
                            <div className='col-10'>
                                <ul className='hero-nav-menu float-end p-3'>
                                    <li><Link to=''>Investors</Link></li>
                                    <li><Link to=''>Non-Interest</Link></li>
                                    <li><Link to=''>Private</Link></li>
                                    <li><Link to=''>Disapora</Link></li>
                                    <li><Link to=''>About Us</Link></li>
                                    <li><Link to=''>Blog</Link></li>
                                    <li><Link to=''>Branch/ATM Locator</Link></li>
                                    <li><Link to=''>Compliants</Link></li>
                                    <li><Link to=''>Contact Us</Link></li>
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