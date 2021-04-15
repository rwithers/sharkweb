import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";
import EmailSubscribeForm from './EmailSubscribeForm.js';

library.add(fab, faFacebook)

function AppFooter() {
    return (
        <div className="App-footer">
        <div className="App-footer-content">
          <div className="footer-column-left">
            <p><b>106.5 The Shark</b></p>
            <p>710 Buffalo Street, Suite 411</p>
            <p>Corpus Christi, TX 78401</p>
            <br/>
            <p>361-336-2001</p>
            <br/>
          </div>

          <div className="footer-column-middle">
            {/* <p><a className="App-link" href="">Our Story</a></p>
            <p><a className="App-link" href="">Meet the team</a></p>
            <p><a className="App-link" href="">Careers</a></p>
            <p><a className="App-link" href="">Advertising</a></p> */}
            <p><a className="App-link" href="https://publicfiles.fcc.gov/fm-profile/kyrk" target="_blank" rel="noopener noreferrer">Public Files</a></p>    
            <p><Link className="App-link" to="/applications">FCC Applications</Link></p> 
          </div>

          <div className="footer-column-right">
          <p>subscribe:</p>
            <EmailSubscribeForm/>
            <div className="social-media-links">
              <a href="https://www.facebook.com/1065theshark/"><FontAwesomeIcon className="social-media-icon" icon={['fab', 'facebook']} size="lg" /></a>
              <a href="https://twitter.com/1065theshark"><FontAwesomeIcon className="social-media-icon" icon={['fab', 'twitter']} size="lg" /></a>
              <a href="https://www.instagram.com/1065theshark/?hl=en"><FontAwesomeIcon className="social-media-icon" icon={['fab', 'instagram']} size="lg" /></a>
              {/* <a href=""><FontAwesomeIcon className="social-media-icon" icon={['fab', 'github']} size="lg" /></a> */}
            </div>
          </div>

        </div>

        <div className="copyright-statment">
               <p><i>A Withers Family Texas Holdings Company. &#169; 2021</i></p>
        </div>

      </div>
    );
}

export default AppFooter;