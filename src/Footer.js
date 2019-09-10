import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Footer() {
    return(
        <footer>
            <p>AMWD</p>
            <div id="footerContact">
                <a href="#"><FontAwesomeIcon icon="envelope"  size="1.5" /></a>
                <a href="#"><FontAwesomeIcon icon={['fab', 'facebook-square']}  size="1.5" /></a>
                <a href="#"><FontAwesomeIcon icon={['fab', 'instagram']}  size="1.5" /></a>
                <a href="#"><FontAwesomeIcon icon={['fab', 'twitter-square']} size="1.5" /></a>
            </div>
        </footer>
    )
}

export default Footer;