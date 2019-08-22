import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function responsiveMenu(props) {

    return (
        <div className="openNavbar">
            <ul>
                <li className="navLink">Home</li>
                <li className="navLink" id="gameMenu">
                    <button className="navLink" 
                        
                        name="gameMenu" 
                        onClick={props.menuClick}>
                            {props.data.gameMenu ? "^ Games ^" : "v Games v"}
                    </button>
                </li>
                {props.data.gameMenu ? gamesNav() : null}
                <li id="contactUs" className="navLink">Contact Us</li>
            </ul>
        </div>
    )
}

function Header(props) {
    return (
        <header>
            <div className="title">
                <h1>Online ESL Teacher Resources</h1>
                <h3>Your source for games, lesson plans, and more!</h3>
            </div>
            <div className="navbar">
                <button 
                    name="menuOpen" 
                    style={props.data.menuOpen ? 
                    buttonStyle : 
                    null} 
                    onClick={props.menuClick} 
                    className="menuOpenButton">
                        <FontAwesomeIcon name="menuOpen" icon="bars" size="2x" style={{color: 'red'}}/>
                    </button>
                {props.data.menuOpen ? responsiveMenu(props) : null}
            </div>
            
            
            
        </header>
    )
}

const buttonStyle = {
    boxShadow: 'none',
    border: 'none'
}

const gamesNav = () => {
    return (
        <div className='subMenu'>
            <li className="navLink"><a href="https://vigilant-lichterman-f14f98.netlify.com/">Tic-Tac-Toe</a></li>
            <li className="navLink"><a href="https://goofy-montalcini-2ef709.netlify.com/">Hangman</a></li>
        </div>
        
    )
}

const lessonPlansNav = () => {
    return (
        <div className="subMenu">
            <li className="navLink"><a href="#">Master Course</a></li>
            <li className="navLink"><a href="#">Grammar</a></li>
            <li className="navLink"><a href="#">Levelled Reading</a></li>
            <li className="navLink"><a href="#">Free Talk</a></li>
        </div>
    )
}

export default Header;