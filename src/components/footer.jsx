import React from 'react'
import {Link} from 'react-router-dom'

let Footer = () => {
  return(
    <footer>
      <div className="container">
        <div className="row">

          <div className="col-lg">
            <h4 className="mb-3">Personal Banking</h4>
            <p><Link to="#">Savings</Link></p>
            <p><Link to="#">Current</Link></p>
            <p><Link to="#">Investment</Link></p>
            <p><Link to="#">Loans</Link></p>
            <p><Link to="#">Card</Link></p>
            <p><Link to="#">E-Channels</Link></p>
          </div>

          <div className="col-lg">
            <h4 className="mb-3">Business Banking</h4>
            <p><Link to="#">Coperates</Link></p>
            <p><Link to="#">S.M.E</Link></p>
            <p><Link to="#">Services</Link></p>
            <p><Link to="#">Payment</Link></p>
            <p><Link to="#">Loans</Link></p>
            <p><Link to="#">H.E.A.R.T</Link></p>
          </div>

          <div className="col-lg">
            <h4 className="mb-3">Alternative Banking</h4>
            <p><Link to="#">SAF</Link></p>
            <p><Link to="#">Private Banking</Link></p>
            <p><Link to="#">Invest Now</Link></p>
            <p><Link to="#">ONE Education</Link></p>
            <p><Link to="#">Agriculture</Link></p>
          </div>

          <div className="col-lg">
            <h4 className="mb-3">About Us</h4>
            <p><Link to="#">Who We Are</Link></p>
            <p><Link to="#">Awards</Link></p>
            <p><Link to="#">Board Of Directors</Link></p>
            <p><Link to="#">Executive Management</Link></p>
            <p><Link to="#">Our Policy</Link></p>
            <p><Link to="#">Shareholders</Link></p>
            <p><Link to="#">Careers</Link></p>
          </div>

          <div className="col-lg">
            <h4 className="mb-3">Help & Support</h4>
            <p><Link to="#">Feedback</Link></p>
            <p><Link to="#">Contact Us</Link></p>
            <p><Link to="#">Whistleblowing</Link></p>
            <p><Link to="#">ATM Locator</Link></p>
            <p><Link to="#">Compliants</Link></p>
            <p><Link to="#">Forms</Link></p>
            <p><Link to="#">Forex Report</Link></p>
            <p><Link to="#">Self Certification</Link></p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
