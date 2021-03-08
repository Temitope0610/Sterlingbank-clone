import React from 'react'
import { Link } from 'react-router-dom';

class Navbar extends React.Component{
    render(){
        return(
            <div>
                <div className='navbar'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-2'>
                                <ul className='nav-menu float-start p-3'>
                                   <a href='/personal'><li className='personal-list'>Personal</li></a>
                                    <Link to=''><li>Business</li></Link>
                                </ul>
                            </div>
                            <div className='col-10'>
                                <ul className='nav-menu float-end p-3'>
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

export default Navbar;