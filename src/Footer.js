import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Footer() {
    return(
        <footer>
            <h3>AMWD</h3>
            <div id="footerContact">
                <a className="contactLink" href="#"><FontAwesomeIcon icon="envelope" size="2x" /></a>
                <a className="contactLink" href="#"><FontAwesomeIcon icon={['fab', 'facebook-square']} size="2x" /></a>
                <a className="contactLink" href="#"><FontAwesomeIcon icon={['fab', 'instagram']} size="2x" /></a>
                <a className="contactLink" href="#"><FontAwesomeIcon icon={['fab', 'twitter-square']} size='2x'/></a>
            </div>
        </footer>
    )
}

export default Footer;