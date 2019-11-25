import React, {useState}   from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ResponsiveNavMenu from './ResponsiveNavMenu'
//import { Link } from 'react-router-dom'


function Header() {
    
        const [menuOpen, setMenuOpen] = useState(true);

    return (
        <header>
            <div className="title">
                <h1>Online ESL Teacher Resources</h1>
                <h3>Your source for games, lesson plans, and more!</h3>
            </div>
            <div className="navbar">
                <button 
                    name="menuOpen" 
                    style={menuOpen ? 
                    buttonStyle : 
                    null} 
                    onClick={() => setMenuOpen(!menuOpen)} 
                    className="menuOpenButton">
                        <FontAwesomeIcon name="menuOpen" icon="bars" size="2x" style={{color: 'red'}}/>
                    </button>
                {menuOpen ? <ResponsiveNavMenu /> : null}
            </div>
        </header>
    )
}

const buttonStyle = {
    boxShadow: 'none',
    border: 'none'
}



export default Header;