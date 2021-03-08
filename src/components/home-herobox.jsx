import React from 'react'
import {Link} from 'react-router-dom'
import Personal from '../asset/images/personal.jpg'
import Business from '../asset/images/business.jpg'
import Alternative from '../asset/images/alternative.jpg'
import Icon from "../components/icon";

class Herobox extends React.Component{
    render(){
        return(
            <div>
                <a href='#' style={{top:'600px', marginLeft:'35px'}} className='float-start whatsapp-icon'><Icon icon='whatsapp'/></a>
                <a href='#' style={{top:'530px', right:'35px'}} className='float-end whatsapp-icon'><Icon icon='chat'/></a>
                <div className='row g-0 animate__animated animate__fadeInRight animate__delay-0.1s' style={{position:'relative'}}> 
                    <div className='col-md-4'>
                        <Link to='/personal'>
                        <div className='Overlay'>   
                        </div>
                            <div className='personal-img' style={{backgroundImage:`url(${Personal})`}}>
                                <h1 style={{top:'550px',position:'relative'}}>Personal</h1>
                            </div>
                        </Link>
                    </div>
                    <div className='col-md-4'>
                    <a href='#'>
                        <div className='Overlay'>   
                        </div>
                            <div className='personal-img' style={{backgroundImage:`url(${Business})`}}>
                                <h1 style={{top:'550px',position:'relative'}}>Business</h1>
                            </div>
                        </a>
                    </div>
                    <div className='col-md-4'>
                    <a href='#'>
                        <div className='Overlay'>   
                        </div>
                            <div className='personal-img' style={{backgroundImage:`url(${Alternative})`}}>
                                <h1 style={{top:'550px',position:'relative'}}>Alternative</h1>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}
export default Herobox;