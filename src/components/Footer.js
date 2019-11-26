import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../styles/footer.css'

function Footer() {
    return(
        <footer>
            <p>AMWD</p>
            <div id="footerContact">
                <a href="#"><FontAwesomeIcon icon="envelope"  size="2x" /></a>
                <a href="#"><FontAwesomeIcon icon={['fab', 'facebook-square']}  size="2x" /></a>
                <a href="#"><FontAwesomeIcon icon={['fab', 'instagram']}  size="2x" /></a>
                <a href="#"><FontAwesomeIcon icon={['fab', 'twitter-square']} size="2x" /></a>
            </div>
        </footer>
    )
}

export default Footer;